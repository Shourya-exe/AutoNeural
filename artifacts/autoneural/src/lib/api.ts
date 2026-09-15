/**
 * Browser-side client for the public Supabase Edge Functions.
 *
 * Only the publishable (anon) key is referenced here — it is designed to be
 * public and is safe in the bundle. The service-role key must never appear in
 * this file or anything it imports; all privileged work happens inside the
 * Edge Functions.
 */

const SUPABASE_URL = (import.meta.env.VITE_SUPABASE_URL ?? '').replace(/\/$/, '');
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';

export const isBackendConfigured = Boolean(SUPABASE_URL && SUPABASE_ANON_KEY);

/** Field-level messages keyed by form field name. */
export type FieldErrors = Record<string, string>;

export type SubmitResult =
  | { ok: true; message: string }
  | { ok: false; message: string; fields?: FieldErrors };

type EdgeResponse = {
  ok?: boolean;
  message?: string;
  error?: string;
  fields?: FieldErrors;
};

const GENERIC_ERROR =
  'Something went wrong sending your message. Please email official@autoneural.in.';

async function callFunction(name: string, payload: unknown): Promise<SubmitResult> {
  if (!isBackendConfigured) {
    // Surfaces a misconfigured deploy immediately rather than failing with an
    // opaque network error against a "/functions/v1/..." relative URL.
    console.error(
      `[autoneural] VITE_SUPABASE_URL / VITE_SUPABASE_ANON_KEY are not set — cannot call "${name}".`,
    );
    return { ok: false, message: GENERIC_ERROR };
  }

  // Abort rather than leave the button spinning forever on a stalled network.
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 15_000);

  try {
    const res = await fetch(`${SUPABASE_URL}/functions/v1/${name}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
      },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    let body: EdgeResponse = {};
    try {
      body = (await res.json()) as EdgeResponse;
    } catch {
      // Non-JSON response (gateway error page, empty 502, etc).
    }

    if (res.ok && body.ok) {
      return { ok: true, message: body.message ?? 'Thanks — we have received your message.' };
    }

    // A field-level rejection is the visitor's to fix, so the banner must not
    // claim the server broke. The per-field messages carry the detail.
    const fallback = body.fields
      ? 'Please check the highlighted fields and try again.'
      : GENERIC_ERROR;

    return {
      ok: false,
      message: body.message ?? fallback,
      fields: body.fields,
    };
  } catch (err) {
    const aborted = err instanceof DOMException && err.name === 'AbortError';
    return {
      ok: false,
      message: aborted
        ? 'That took too long. Please check your connection and try again.'
        : GENERIC_ERROR,
    };
  } finally {
    clearTimeout(timeout);
  }
}

export type ContactInput = {
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  /** Honeypot — hidden from real users, so any value marks the sender a bot. */
  companyWebsite: string;
  /** Epoch ms captured when the form mounted, used as a fill-time floor. */
  startedAt: number;
};

export function submitContact(input: ContactInput): Promise<SubmitResult> {
  return callFunction('contact-submit', input);
}

export type NewsletterInput = {
  email: string;
  companyWebsite: string;
  startedAt: number;
};

export function subscribeNewsletter(input: NewsletterInput): Promise<SubmitResult> {
  return callFunction('newsletter-subscribe', input);
}
