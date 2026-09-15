# Deployment — Autoneural

Two independent pieces:

| Piece | Runs on | Deploy with |
| --- | --- | --- |
| Static site (`dist/public`) | Hostinger hPanel hosting (LiteSpeed) | hPanel File Manager / rsync |
| Database + API | Supabase (`uthbekvrwkgbcivsifhc`) | Supabase CLI |

There is **no Node process to run in production**. Every route is prerendered to
real HTML at build time and all server logic lives in Supabase Edge Functions,
so the host only serves static files — no PM2, no reverse proxy to an app port,
and nothing to restart after a reboot.

> **Deploy Supabase before the site.** `autoneural.in` is already live. The forms
> in this build post to Supabase Edge Functions, so uploading the site while the
> backend is missing leaves visitors with a failing contact form.

---

## 1. Supabase

Install the CLI and link the project:

```bash
npm install -g supabase
supabase login
supabase link --project-ref uthbekvrwkgbcivsifhc
```

### 1a. Apply the schema

```bash
supabase db push
```

This runs `supabase/migrations/20260906120000_contact_and_newsletter.sql`, which
creates `contact_submissions`, `newsletter_subscribers` and `rate_limit_hits`,
their indexes, the `check_rate_limit()` function, and turns RLS **on with no
policies** — a deny-all for `anon` and `authenticated`. Only the service role,
used exclusively inside the Edge Functions, can read or write these tables.

Verify it took effect — this must return a 401/permission error, **not** rows:

```bash
curl "https://uthbekvrwkgbcivsifhc.supabase.co/rest/v1/contact_submissions?select=id" \
  -H "apikey: $VITE_SUPABASE_ANON_KEY"
```

### 1b. Set the function secrets

```bash
supabase secrets set ALLOWED_ORIGINS="https://autoneural.in,https://www.autoneural.in"
supabase secrets set IP_HASH_SALT="$(openssl rand -hex 32)"
```

- `ALLOWED_ORIGINS` — browser origins allowed to call the endpoints. Include
  every hostname that actually serves the site (apex **and** `www` if both
  resolve), or submissions from the missing one will be refused with 403.
- `IP_HASH_SALT` — generate once and leave alone. Rotating it resets every
  rate-limit bucket and makes stored `ip_hash` values incomparable with history.

`SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY` are injected by the platform. Do
not set them, and never copy the service-role key into this repo or any
`VITE_`-prefixed variable — that would publish it in the browser bundle.

### 1c. Deploy the functions

```bash
supabase functions deploy contact-submit
supabase functions deploy newsletter-subscribe
```

`supabase/config.toml` sets `verify_jwt = false` on both, because visitors are
anonymous and have no JWT. They are not unprotected: each one enforces an origin
allowlist, a honeypot field, a minimum fill time, and per-IP (and for contact,
per-email) rate limits.

Smoke-test the deployed endpoint:

```bash
curl -i -X POST "https://uthbekvrwkgbcivsifhc.supabase.co/functions/v1/contact-submit" \
  -H "Content-Type: application/json" \
  -H "Origin: https://autoneural.in" \
  -H "apikey: $VITE_SUPABASE_ANON_KEY" \
  -d '{"name":"Deploy Check","email":"you@yourdomain.com",
       "phone":"+91 98765 43210","service":"Not sure yet",
       "message":"Verifying the production endpoint.","companyWebsite":"",
       "startedAt":'"$(( $(date +%s000) - 30000 ))"'}'
```

Expect `200 {"ok":true,...}` and a new row in the `contact_submissions` table.
Delete the test row afterwards.

---

## 2. Build the site

```bash
cp .env.example .env     # then fill in the values
pnpm install
pnpm --filter @workspace/autoneural run build
```

Output: `artifacts/autoneural/dist/public`.

`VITE_SITE_URL` must match the domain you actually serve from — it is baked into
canonical URLs, Open Graph URLs and `sitemap.xml` at build time. Pointing it at
the wrong host will make Google canonicalise your pages to that host.

> The `VITE_*` values are compiled into the JavaScript. That is correct and
> expected for the Supabase URL and anon key — the anon key grants no table
> access because of the RLS setup above.

---

## 3. Upload to Hostinger

`autoneural.in` responds with `platform: hostinger` / `panel: hpanel` and no
`Server: nginx` header, i.e. hPanel-managed hosting running **LiteSpeed**. That
means:

- routing and caching come from **`.htaccess`**, not an nginx server block;
- there is no root shell to edit nginx config in;
- uploads go through hPanel File Manager, FTP, or SSH if your plan includes it.

`.htaccess` is committed at `artifacts/autoneural/public/.htaccess` and Vite
copies it into `dist/public`, so **uploading the build installs it**. Nothing to
paste by hand.

> If you are in fact on a full VPS with your own nginx, use the server block at
> the end of this file instead and ignore `.htaccess`.

### What to upload

The **contents** of `artifacts/autoneural/dist/public/` — not the folder itself —
into your domain's document root (`public_html`). Roughly 4.6 MB, 28 files.

Confirm the hidden `.htaccess` came across; File Manager hides dotfiles by
default and the site will 404 on every deep link without it.

### Option A — hPanel File Manager

1. Build locally, then zip the *contents* of `dist/public`.
2. hPanel → Files → File Manager → open `public_html`.
3. Delete the previous build's `assets/` folder (its filenames are hashed, so
   stale ones accumulate forever otherwise).
4. Upload the zip into `public_html` and extract it there.
5. Enable "show hidden files" and verify `.htaccess` is present.

### Option B — rsync over SSH (if your plan has SSH)

```bash
rsync -avz --delete \
  artifacts/autoneural/dist/public/ \
  u123456789@autoneural.in:~/domains/autoneural.in/public_html/
```

`--delete` clears stale hashed assets. Get the exact username, host and port
from hPanel → Advanced → SSH Access.

## 4. Post-deploy checks

```bash
# Every route serves real HTML, not a JS-injected shell (this is what crawlers
# read). Each should print its own distinct title.
for r in "" services industries about contact aivora ai-chatbots website-development; do
  echo "/$r -> $(curl -s "https://autoneural.in/$r" | grep -o '<title>[^<]*' | head -1)"
done

curl -s https://autoneural.in/ | grep -c "The Founders"     # expect 1

# SEO files resolve.
curl -s https://autoneural.in/sitemap.xml | head -5
curl -s https://autoneural.in/robots.txt

# Tables are not readable from the browser key.
curl -s "https://uthbekvrwkgbcivsifhc.supabase.co/rest/v1/contact_submissions?select=id" \
  -H "apikey: <anon key>"                                    # expect an error, not rows
```

Then submit the real contact form once and confirm the row lands in the
Supabase table editor.

Finally, in Google Search Console: add the property and submit
`https://autoneural.in/sitemap.xml`.

---

## Redeploying

Site content or design change:

```bash
pnpm --filter @workspace/autoneural run build
# then re-upload dist/public (File Manager, or the rsync command in section 3)
```

Backend change: edit the function or add a migration, then
`supabase functions deploy <name>` or `supabase db push`. The two halves deploy
independently — a site upload never needs a function redeploy, and vice versa.
