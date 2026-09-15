/**
 * Shared HTTP helpers for the public Edge Functions.
 *
 * Both functions are invoked directly from the browser, so CORS is restricted
 * to an explicit origin allowlist rather than `*` — this is what stops an
 * unrelated site from pointing its own form at our endpoints.
 */

/** Origins permitted to call the public endpoints, from `ALLOWED_ORIGINS`. */
function allowedOrigins(): string[] {
  return (Deno.env.get('ALLOWED_ORIGINS') ?? '')
    .split(',')
    .map((o) => o.trim().replace(/\/$/, ''))
    .filter(Boolean);
}

export function corsHeaders(req: Request): Record<string, string> {
  const origin = (req.headers.get('origin') ?? '').replace(/\/$/, '');
  const allowed = allowedOrigins();
  const headers: Record<string, string> = {
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'authorization, apikey, content-type',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
  // An empty allowlist means "not configured yet" — fall back to echoing the
  // origin so a misconfigured deploy fails loudly in logs, not silently in CORS.
  if (allowed.length === 0 || allowed.includes(origin)) {
    headers['Access-Control-Allow-Origin'] = origin || '*';
  }
  return headers;
}

export function isOriginAllowed(req: Request): boolean {
  const allowed = allowedOrigins();
  if (allowed.length === 0) return true;
  const origin = (req.headers.get('origin') ?? '').replace(/\/$/, '');
  // Non-browser callers (curl, uptime checks) send no Origin; let them through
  // since CORS is not a server-side authorisation mechanism anyway.
  if (!origin) return true;
  return allowed.includes(origin);
}

export function json(
  req: Request,
  body: unknown,
  status = 200,
  extraHeaders: Record<string, string> = {},
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      ...corsHeaders(req),
      ...extraHeaders,
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
    },
  });
}

export function preflight(req: Request): Response {
  return new Response(null, { status: 204, headers: corsHeaders(req) });
}

/**
 * Best-effort client IP. Supabase sits behind a proxy, so the leftmost entry of
 * `x-forwarded-for` is the real client; `x-real-ip` is the fallback.
 */
export function clientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) {
    const first = fwd.split(',')[0]?.trim();
    if (first) return first;
  }
  return req.headers.get('x-real-ip') ?? 'unknown';
}

/**
 * Salted SHA-256 of the client IP. We rate-limit and triage on this instead of
 * the raw address so no personal data is persisted.
 */
export async function hashIp(ip: string): Promise<string> {
  const salt = Deno.env.get('IP_HASH_SALT') ?? '';
  const data = new TextEncoder().encode(`${salt}:${ip}`);
  const digest = await crypto.subtle.digest('SHA-256', data);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('');
}

/** Truncate free-text headers before they reach the database CHECK constraints. */
export function clip(value: string | null, max: number): string | null {
  if (!value) return null;
  return value.length > max ? value.slice(0, max) : value;
}
