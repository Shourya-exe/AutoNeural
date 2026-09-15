/**
 * Minimal hand-rolled validation.
 *
 * Deliberately dependency-free: these functions are the only thing standing
 * between the public internet and the database, so they must not be able to
 * break because of a registry resolution failure at deploy time.
 *
 * The rules here mirror the CHECK constraints in the migration. The database is
 * the real enforcement boundary; this layer exists to return useful field-level
 * errors instead of a raw Postgres violation.
 */

export type FieldErrors = Record<string, string>;

export type Validated<T> =
  | { ok: true; value: T }
  | { ok: false; errors: FieldErrors };

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/;

/** Strip control characters that have no business in a form field. */
function clean(input: unknown): string {
  if (typeof input !== 'string') return '';
  // deno-lint-ignore no-control-regex
  return input.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').trim();
}

/** Must stay in sync with the <select> in ContactForm.tsx and the DB CHECK. */
export const SERVICES = [
  'Custom AI agent or chatbot',
  'Website development',
  'Save time with automation',
  'Dashboard or reports',
  'Custom business software',
  'Not sure yet',
] as const;

export type Service = (typeof SERVICES)[number];

export type ContactPayload = {
  name: string;
  company: string | null;
  email: string;
  phone: string;
  service: Service;
  message: string;
};

export function validateContact(body: unknown): Validated<ContactPayload> {
  const errors: FieldErrors = {};
  const b = (body ?? {}) as Record<string, unknown>;

  const name = clean(b.name);
  if (name.length < 1) errors.name = 'Please tell us your name.';
  else if (name.length > 120) errors.name = 'Name must be 120 characters or fewer.';

  const company = clean(b.company);
  if (company.length > 160) errors.company = 'Company must be 160 characters or fewer.';

  const email = clean(b.email).toLowerCase();
  if (email.length < 1) errors.email = 'Please enter your work email.';
  else if (email.length > 254 || !EMAIL_RE.test(email)) {
    errors.email = 'Please enter a valid email address.';
  }

  // Deliberately permissive: numbers are written many ways worldwide, so we
  // check length and character set rather than trying to parse a format.
  const phone = clean(b.phone);
  if (phone.length < 6) errors.phone = 'Please enter a phone number we can reach you on.';
  else if (phone.length > 24) errors.phone = 'Phone number must be 24 characters or fewer.';
  else if (!/^[+0-9][0-9\s()\-]{5,23}$/.test(phone)) {
    errors.phone = 'Please include the country code, for example +91 98765 43210.';
  }

  const service = clean(b.service);
  if (!service) errors.service = 'Please select an area of interest.';
  else if (!(SERVICES as readonly string[]).includes(service)) {
    errors.service = 'Please select a valid area of interest.';
  }

  const message = clean(b.message);
  if (message.length < 10) errors.message = 'Please give us at least 10 characters of context.';
  else if (message.length > 5000) errors.message = 'Message must be 5000 characters or fewer.';

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  return {
    ok: true,
    value: {
      name,
      company: company || null,
      email,
      phone,
      service: service as Service,
      message,
    },
  };
}

export function validateEmailOnly(body: unknown): Validated<{ email: string }> {
  const b = (body ?? {}) as Record<string, unknown>;
  const email = clean(b.email).toLowerCase();
  if (!email) return { ok: false, errors: { email: 'Please enter your email address.' } };
  if (email.length > 254 || !EMAIL_RE.test(email)) {
    return { ok: false, errors: { email: 'Please enter a valid email address.' } };
  }
  return { ok: true, value: { email } };
}

/**
 * Cheap bot checks that require no third-party service and no extra credentials.
 *
 * 1. Honeypot — a field hidden from humans via CSS. Any value means a bot that
 *    filled every input it found.
 * 2. Fill time — `startedAt` is stamped when the form mounts. A submission that
 *    arrives implausibly fast was not typed by a person.
 *
 * Returns a reason string when the submission looks automated. Callers should
 * respond with a normal success shape anyway, so bots get no signal to tune
 * against, while the row is stored as `spam` (or dropped).
 */
export function detectBot(body: unknown, minFillMs = 2500): string | null {
  const b = (body ?? {}) as Record<string, unknown>;

  const honeypot = clean(b.companyWebsite);
  if (honeypot.length > 0) return 'honeypot';

  const startedAt = Number(b.startedAt);
  if (Number.isFinite(startedAt) && startedAt > 0) {
    const elapsed = Date.now() - startedAt;
    // Negative elapsed means a skewed or forged clock — treat as suspicious.
    if (elapsed < minFillMs) return 'too-fast';
  }

  return null;
}

/** Guard against oversized bodies before parsing them. */
export async function readJson(req: Request, maxBytes = 32 * 1024): Promise<unknown> {
  const raw = await req.text();
  if (raw.length > maxBytes) throw new Error('payload-too-large');
  if (!raw) return {};
  return JSON.parse(raw);
}
