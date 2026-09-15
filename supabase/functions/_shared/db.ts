/**
 * Thin PostgREST client for the Edge Functions.
 *
 * Uses `fetch` against the REST endpoint rather than `@supabase/supabase-js`
 * because these functions only need three calls (insert, upsert, rpc). Skipping
 * the SDK keeps cold starts fast and removes a remote import that could fail to
 * resolve at deploy time.
 *
 * Every request here authenticates with the service-role key, which bypasses
 * RLS. That key is read from the function environment and must never reach the
 * browser bundle.
 */

const SUPABASE_URL = Deno.env.get('SUPABASE_URL') ?? '';
// `SUPABASE_SERVICE_ROLE_KEY` is injected automatically by the Supabase
// platform; the fallback name is for `supabase functions serve` locally.
const SERVICE_ROLE_KEY =
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ??
  Deno.env.get('SERVICE_ROLE_KEY') ??
  '';

export class DbError extends Error {
  // Written out longhand rather than as constructor parameter properties, so
  // the module also parses under type-stripping runtimes that lack them.
  status: number;
  code?: string;

  constructor(message: string, status: number, code?: string) {
    super(message);
    this.name = 'DbError';
    this.status = status;
    this.code = code;
  }
}

function assertConfigured() {
  if (!SUPABASE_URL || !SERVICE_ROLE_KEY) {
    throw new DbError('Supabase environment is not configured', 500);
  }
}

function baseHeaders(): Record<string, string> {
  return {
    apikey: SERVICE_ROLE_KEY,
    Authorization: `Bearer ${SERVICE_ROLE_KEY}`,
    'Content-Type': 'application/json',
  };
}

async function readError(res: Response): Promise<DbError> {
  let code: string | undefined;
  let message = `${res.status} ${res.statusText}`;
  try {
    const body = await res.json();
    code = body?.code;
    message = body?.message ?? message;
  } catch {
    // Non-JSON error body; the status line is all we get.
  }
  return new DbError(message, res.status, code);
}

/** Insert one row. `onConflict` turns it into an upsert on that column. */
export async function insert(
  table: string,
  row: Record<string, unknown>,
  opts: { onConflict?: string; returning?: string } = {},
): Promise<unknown[]> {
  assertConfigured();

  const url = new URL(`${SUPABASE_URL}/rest/v1/${table}`);
  if (opts.onConflict) url.searchParams.set('on_conflict', opts.onConflict);
  if (opts.returning) url.searchParams.set('select', opts.returning);

  const prefer = [
    opts.returning ? 'return=representation' : 'return=minimal',
    ...(opts.onConflict ? ['resolution=merge-duplicates'] : []),
  ].join(',');

  const res = await fetch(url, {
    method: 'POST',
    headers: { ...baseHeaders(), Prefer: prefer },
    body: JSON.stringify(row),
  });

  if (!res.ok) throw await readError(res);
  if (!opts.returning) return [];
  return (await res.json()) as unknown[];
}

/** Call a Postgres function. */
export async function rpc<T>(fn: string, args: Record<string, unknown>): Promise<T> {
  assertConfigured();

  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${fn}`, {
    method: 'POST',
    headers: baseHeaders(),
    body: JSON.stringify(args),
  });

  if (!res.ok) throw await readError(res);
  return (await res.json()) as T;
}

/**
 * Consume one token from a rate-limit bucket.
 *
 * Deliberately fails *open*: if the database is unreachable the correct
 * behaviour is to let a genuine enquiry through rather than reject real leads
 * because of an infrastructure blip. The subsequent insert would fail anyway if
 * the database is truly down, so this cannot be used to bypass persistence.
 */
export async function consumeRateLimit(
  bucket: string,
  maxHits: number,
  windowSeconds: number,
): Promise<boolean> {
  try {
    return await rpc<boolean>('check_rate_limit', {
      p_bucket: bucket,
      p_max_hits: maxHits,
      p_window_seconds: windowSeconds,
    });
  } catch (err) {
    console.error('rate_limit_check_failed', { bucket, err: String(err) });
    return true;
  }
}

/** Postgres unique-violation, surfaced by PostgREST as code 23505. */
export function isUniqueViolation(err: unknown): boolean {
  return err instanceof DbError && err.code === '23505';
}
