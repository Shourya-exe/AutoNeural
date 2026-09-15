/**
 * POST /functions/v1/newsletter-subscribe
 *
 * Public endpoint behind the footer newsletter form. Same protections as
 * contact-submit; the response is intentionally identical for a new subscriber
 * and an existing one so the endpoint cannot be used to enumerate who is on
 * the list.
 */
import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

import { consumeRateLimit, insert, isUniqueViolation } from '../_shared/db.ts';
import {
  clientIp,
  clip,
  hashIp,
  isOriginAllowed,
  json,
  preflight,
} from '../_shared/http.ts';
import { detectBot, readJson, validateEmailOnly } from '../_shared/validate.ts';

const IP_LIMIT = { max: 10, windowSeconds: 60 * 60 };

const SUCCESS = {
  ok: true as const,
  message: "You're subscribed. Look out for our next issue.",
};

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') return preflight(req);
  if (req.method !== 'POST') {
    return json(req, { ok: false, error: 'method_not_allowed' }, 405);
  }
  if (!isOriginAllowed(req)) {
    return json(req, { ok: false, error: 'origin_not_allowed' }, 403);
  }

  let body: unknown;
  try {
    body = await readJson(req, 4 * 1024);
  } catch (err) {
    const tooLarge = err instanceof Error && err.message === 'payload-too-large';
    return json(
      req,
      { ok: false, error: tooLarge ? 'payload_too_large' : 'invalid_json' },
      tooLarge ? 413 : 400,
    );
  }

  const parsed = validateEmailOnly(body);
  if (!parsed.ok) {
    return json(req, { ok: false, error: 'validation_failed', fields: parsed.errors }, 422);
  }
  const { email } = parsed.value;

  const ipHash = await hashIp(clientIp(req));
  // A newsletter field is a single input, so the fill-time floor is lower than
  // the contact form's — a returning visitor can legitimately paste and submit.
  const botReason = detectBot(body, 1200);

  if (!botReason) {
    const underLimit = await consumeRateLimit(
      `newsletter:ip:${ipHash}`,
      IP_LIMIT.max,
      IP_LIMIT.windowSeconds,
    );
    if (!underLimit) {
      return json(
        req,
        {
          ok: false,
          error: 'rate_limited',
          message: 'Too many attempts from this network. Please try again later.',
        },
        429,
        { 'Retry-After': String(IP_LIMIT.windowSeconds) },
      );
    }
  }

  try {
    await insert(
      'newsletter_subscribers',
      {
        email,
        status: botReason ? 'spam' : 'subscribed',
        ip_hash: ipHash,
        user_agent: clip(req.headers.get('user-agent'), 512),
        source: 'footer',
      },
      { onConflict: 'email' },
    );
  } catch (err) {
    // Re-subscribing is a no-op success, not an error the visitor should see.
    if (isUniqueViolation(err)) return json(req, SUCCESS, 200);

    console.error('newsletter_insert_failed', { err: String(err) });
    return json(
      req,
      {
        ok: false,
        error: 'server_error',
        message: 'Something went wrong on our side. Please try again shortly.',
      },
      500,
    );
  }

  return json(req, SUCCESS, 200);
});
