# Autoneural

Marketing site for Autoneural (autoneural.in) — an AI agency building custom
agents, chatbots, automation, dashboards and websites. Eight prerendered routes
with an enquiry form and newsletter signup, backed by Supabase.

## Run & Operate

- `pnpm --filter @workspace/autoneural run dev` — run the site locally (port 5173)
- `pnpm --filter @workspace/autoneural run build` — production build + prerender
- `pnpm --filter @workspace/autoneural run typecheck` — typecheck the site
- `supabase db push` — apply migrations to the linked project
- `supabase functions deploy <name>` — deploy an Edge Function
- Required env: see `.env.example`. Deployment steps in `DEPLOYMENT.md`.

## Stack

- pnpm workspaces, Node.js 24, TypeScript 5.9
- Site: Vite 7 + React 19, Tailwind v4, framer-motion, wouter, shadcn/ui
- Backend: Supabase — Postgres + Edge Functions (Deno)
- Hosting: static files on a Hostinger VPS; no Node process in production

## Where things live

- `artifacts/autoneural/` — the website (the only deployed artifact)
  - `src/pages/` — one file per route, each composing Navbar + content + Footer
  - `src/components/home/` — the 23 home-page sections, in `pages/Home.tsx` order
  - `src/components/pages/` — the content body of each secondary route
  - `src/components/ContactForm.tsx` — **the** enquiry form, shared by all 8 pages
  - `src/lib/api.ts` — browser client for the Edge Functions
  - `src/lib/seo.ts` — **source of truth for routes and their metadata**; the
    prerenderer, the runtime `<head>` updater and `sitemap.xml` all read it
  - `src/lib/seo-jsonld.ts` — per-route structured data (generated, long)
  - `scripts/prerender.mjs` — static site generation, runs after `vite build`
  - `public/media/` — logo and portraits
- `supabase/migrations/` — SQL schema, RLS, indexes
- `supabase/functions/` — `contact-submit`, `newsletter-subscribe`, shared `_shared/`
- `artifacts/api-server/`, `lib/db/`, `lib/api-*` — **unused boilerplate.** The
  backend is Supabase; these were scaffolded by the template and never wired up.

## Architecture decisions

- **Prerendered, not SSR.** The VPS supports Node, but every route is static
  marketing content. `renderToString` at build time gives crawlers complete HTML
  with no always-on process to maintain.
- **No table is reachable from the browser.** RLS is on with *zero* policies and
  grants are revoked, so `anon` is denied by default rather than by a policy that
  could be mis-written. Writes go only through Edge Functions under the service
  role, which is the sole identity that bypasses RLS.
- **Edge Functions use `fetch` against PostgREST, not `@supabase/supabase-js`.**
  Three calls do not justify the SDK's cold-start cost or a remote import that
  can fail to resolve at deploy time. See `supabase/functions/_shared/db.ts`.
- **Validation is hand-rolled** (`_shared/validate.ts`) for the same reason: it is
  the only thing between the public internet and the database, so it must not be
  able to break because of a registry hiccup. The DB CHECK constraints mirror it.
- **Rate limiting lives in Postgres**, not function memory — functions are
  stateless and horizontally scaled, so an in-process counter resets on cold
  start and is bypassed by spreading requests across instances.
- **IPs are stored only as a salted SHA-256.** Enough for rate limiting and abuse
  triage, without holding personal data.
- **`service` is stored as the label the visitor picked**, not a slug, so a row
  reads the same as the form did. The DB CHECK mirrors the `<select>` exactly —
  changing one without the other will start rejecting valid submissions.

## Product

Eight routes: `/`, `/services`, `/industries`, `/about`, `/contact`, `/aivora`,
`/ai-chatbots`, `/website-development`. Two things persist: the enquiry form
(on every page) and the footer newsletter signup. Everything else is static
content in the components.

## Gotchas

- **`VITE_SITE_URL` is baked in at build time** into canonical URLs, OG URLs and
  `sitemap.xml`. Build with the wrong value and Google canonicalises to that host.
- **Adding a route means editing `src/lib/seo.ts` as well as `App.tsx`.** A route
  missing from seo.ts is not prerendered and not in the sitemap.
- **The web server needs the rewrite rules in `DEPLOYMENT.md`.** Each route is a
  directory containing `index.html`; without `try_files` a refresh returns 404.
- **`ALLOWED_ORIGINS` must list every hostname that serves the site.** If `www`
  resolves but is not listed, form submissions from it fail with 403.
- Never put a secret in a `VITE_`-prefixed variable — it lands in the JS bundle.
- The navbar's active state compares paths with the trailing slash stripped;
  some servers redirect `/aivora` to `/aivora/`.

## User preferences

- The live site at autoneural.in is the design reference. Match it exactly;
  do not redesign.
- Founder/team photos are supplied by the user. Do not invent biographies or
  portraits; use an initials placeholder in the existing container instead.
- Shourya Kumar (Technical Lead) is a deliberate addition to the Founders
  section that does **not** exist on the live site — keep it across rebuilds.
