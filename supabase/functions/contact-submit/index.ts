/**
 * POST /functions/v1/contact-submit
 *
 * Public endpoint behind the "Book a Free Consultation" form. Runs without a
 * user JWT (`verify_jwt = false`) because visitors are anonymous, so it carries
 * its own protections: origin allowlist, honeypot, fill-time check and a
 * per-IP + per-email rate limit.
 */
import 'jsr:@supabase/functions-js/edge-runtime.d.ts';

import { consumeRateLimit, insert } from '../_shared/db.ts';
import {
  clientIp,
  clip,
  hashIp,
  isOriginAllowed,
  json,
  preflight,
} from '../_shared/http.ts';
import { detectBot, readJson, validateContact } from '../_shared/validate.ts';

// 5 submissions per IP per hour, and 3 per email address per day. The first
// stops a single machine hammering the form; the second stops a distributed
// run all targeting the same identity.
const IP_LIMIT = { max: 5, windowSeconds: 60 * 60 };
const EMAIL_LIMIT = { max: 3, windowSeconds: 24 * 60 * 60 };

const SUCCESS = {
  ok: true as const,
  message: "Thank you — we'll be in touch within one business day.",
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
    body = await readJson(req);
  } catch (err) {
    const tooLarge = err instanceof Error && err.message === 'payload-too-large';
    return json(
      req,
      { ok: false, error: tooLarge ? 'payload_too_large' : 'invalid_json' },
      tooLarge ? 413 : 400,
    );
  }

  const parsed = validateContact(body);
  if (!parsed.ok) {
    return json(req, { ok: false, error: 'validation_failed', fields: parsed.errors }, 422);
  }
  const payload = parsed.value;

  const ip = clientIp(req);
  const ipHash = await hashIp(ip);
  const botReason = detectBot(body);

  // Bots get the ordinary success response so they cannot tell rejection from
  // acceptance and tune their payload. The row is still written, flagged spam,
  // so real submissions caught by mistake are recoverable rather than lost.
  if (!botReason) {
    const underIpLimit = await consumeRateLimit(
      `contact:ip:${ipHash}`,
      IP_LIMIT.max,
      IP_LIMIT.windowSeconds,
    );
    if (!underIpLimit) {
      return json(
        req,
        {
          ok: false,
          error: 'rate_limited',
          message: 'Too many submissions from this network. Please try again later.',
        },
        429,
        { 'Retry-After': String(IP_LIMIT.windowSeconds) },
      );
    }

    const underEmailLimit = await consumeRateLimit(
      `contact:email:${payload.email}`,
      EMAIL_LIMIT.max,
      EMAIL_LIMIT.windowSeconds,
    );
    if (!underEmailLimit) {
      // Already heard from this address today — acknowledge rather than error,
      // since a duplicate enquiry is not a failure from the visitor's side.
      return json(req, SUCCESS, 200);
    }
  }

  try {
    await insert('contact_submissions', {
      name: payload.name,
      company: payload.company,
      email: payload.email,
      phone: payload.phone,
      service: payload.service,
      message: payload.message,
      status: botReason ? 'spam' : 'new',
      ip_hash: ipHash,
      user_agent: clip(req.headers.get('user-agent'), 512),
      referer: clip(req.headers.get('referer'), 512),
      notes: botReason ? `auto-flagged: ${botReason}` : null,
    });
  } catch (err) {
    console.error('contact_insert_failed', { err: String(err) });
    return json(
      req,
      {
        ok: false,
        error: 'server_error',
        message: 'Something went wrong on our side. Please email hello@autoneural.ai.',
      },
      500,
    );
  }

  return json(req, SUCCESS, 200);
});
