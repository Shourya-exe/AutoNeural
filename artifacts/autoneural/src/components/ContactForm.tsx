import { useRef, useState, type FormEvent } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';

import { submitContact, type FieldErrors } from '@/lib/api';

/**
 * The enquiry form. Rendered on every page that has a contact panel, so the
 * markup lives here once rather than being duplicated eight times.
 *
 * Classes match the original static markup exactly — only state, the honeypot
 * and the result messaging are added.
 */

const EMPTY = {
  name: '',
  company: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

type FormState = typeof EMPTY;
type Status = 'idle' | 'submitting' | 'success' | 'error';

const INPUT_CLASS =
  'w-full rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-4 py-3 text-white transition-all placeholder:text-gray-500 focus:border-primary focus:bg-white/[0.09] focus:outline-none focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(107,30,50,0.35)]';
const LABEL_CLASS = 'mb-2 block text-sm font-medium text-gray-400';

export function ContactForm() {
  const [form, setForm] = useState<FormState>(EMPTY);
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  // Stamped on mount. The Edge Function rejects submissions that arrive faster
  // than a person could plausibly type them.
  const startedAt = useRef(Date.now());
  const submitting = status === 'submitting';

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
    setFieldErrors((prev) => {
      if (!(key in prev)) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    setStatus('submitting');
    setMessage('');
    setFieldErrors({});

    const result = await submitContact({
      ...form,
      companyWebsite: honeypot,
      startedAt: startedAt.current,
    });

    if (result.ok) {
      setStatus('success');
      setMessage(result.message);
      setForm(EMPTY);
      startedAt.current = Date.now();
    } else {
      setStatus('error');
      setMessage(result.message);
      setFieldErrors(result.fields ?? {});
    }
  }

  const fieldError = (name: string) =>
    fieldErrors[name] ? (
      <p className="mt-2 text-sm text-red-400" role="alert">
        {fieldErrors[name]}
      </p>
    ) : null;

  return (
    <form className="space-y-5" data-testid="contact-form" onSubmit={handleSubmit} noValidate>
      {/* Honeypot: off-screen rather than display:none, which more headless
          bots know to skip. Never shown to real users. */}
      <div className="absolute left-[-9999px] top-0 h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="contact-company-website">Do not fill this in</label>
        <input
          id="contact-company-website"
          type="text"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={LABEL_CLASS}>Name</label>
          <input
            id="contact-name"
            className={INPUT_CLASS}
            placeholder="Your name"
            type="text"
            name="name"
            autoComplete="name"
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            disabled={submitting}
            aria-invalid={Boolean(fieldErrors.name)}
            data-testid="input-contact-name"
          />
          {fieldError('name')}
        </div>
        <div>
          <label htmlFor="contact-company" className={LABEL_CLASS}>Company</label>
          <input
            id="contact-company"
            className={INPUT_CLASS}
            placeholder="Business name"
            type="text"
            name="company"
            autoComplete="organization"
            value={form.company}
            onChange={(e) => update('company', e.target.value)}
            disabled={submitting}
            aria-invalid={Boolean(fieldErrors.company)}
            data-testid="input-contact-company"
          />
          {fieldError('company')}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <div>
          <label htmlFor="contact-email" className={LABEL_CLASS}>Email</label>
          <input
            id="contact-email"
            className={INPUT_CLASS}
            placeholder="you@company.com"
            type="email"
            name="email"
            autoComplete="email"
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            disabled={submitting}
            aria-invalid={Boolean(fieldErrors.email)}
            data-testid="input-contact-email"
          />
          {fieldError('email')}
        </div>
        <div>
          <label htmlFor="contact-phone" className={LABEL_CLASS}>Phone number</label>
          <input
            id="contact-phone"
            title="Include the country code, for example +91 98765 43210"
            className={INPUT_CLASS}
            placeholder="+91 98765 43210"
            data-testid="input-phone"
            type="tel"
            name="phone"
            autoComplete="tel"
            value={form.phone}
            onChange={(e) => update('phone', e.target.value)}
            disabled={submitting}
            aria-invalid={Boolean(fieldErrors.phone)}
          />
          {fieldError('phone')}
        </div>
      </div>

      <div>
        <label htmlFor="contact-service" className={LABEL_CLASS}>What do you need?</label>
        <select
          id="contact-service"
          name="service"
          className="w-full appearance-none rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-4 py-3 text-white transition-all focus:border-primary focus:bg-white/[0.09] focus:outline-none focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(107,30,50,0.35)]"
          value={form.service}
          onChange={(e) => update('service', e.target.value)}
          disabled={submitting}
          aria-invalid={Boolean(fieldErrors.service)}
          data-testid="select-contact-service"
        >
          <option value="" disabled className="text-black">Choose one</option>
          <option value="Custom AI agent or chatbot" className="text-black">Custom AI agent or chatbot</option>
          <option value="Website development" className="text-black">Website development</option>
          <option value="Save time with automation" className="text-black">Save time with automation</option>
          <option value="Dashboard or reports" className="text-black">Dashboard or reports</option>
          <option value="Custom business software" className="text-black">Custom business software</option>
          <option value="Not sure yet" className="text-black">Not sure yet</option>
        </select>
        {fieldError('service')}
      </div>

      <div>
        <label htmlFor="contact-message" className={LABEL_CLASS}>Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={4}
          className="w-full resize-none rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-sm px-4 py-3 text-white transition-all placeholder:text-gray-500 focus:border-primary focus:bg-white/[0.09] focus:outline-none focus:ring-1 focus:ring-primary focus:shadow-[0_0_15px_rgba(107,30,50,0.35)]"
          placeholder="Example: We spend 3 hours every day copying order details into spreadsheets..."
          value={form.message}
          onChange={(e) => update('message', e.target.value)}
          disabled={submitting}
          aria-invalid={Boolean(fieldErrors.message)}
          data-testid="input-contact-message"
        />
        {fieldError('message')}
      </div>

      {/* aria-live announces the result without moving focus off the form. */}
      <div aria-live="polite">
        {status === 'success' && (
          <div
            className="flex items-start gap-3 rounded-lg border border-primary/40 bg-primary/10 px-4 py-3 text-sm text-white"
            data-testid="contact-success"
          >
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-primary" />
            <span>{message}</span>
          </div>
        )}
        {status === 'error' && message && (
          <div
            className="flex items-start gap-3 rounded-lg border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200"
            data-testid="contact-error"
          >
            <AlertCircle size={18} className="mt-0.5 shrink-0 text-red-400" />
            <span>{message}</span>
          </div>
        )}
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="mt-3 flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#8B3048] via-[#6B1E32] to-[#451323] py-3.5 text-base font-semibold text-white border border-white/20 shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.4),0_8px_24px_-4px_rgba(107,30,50,0.4)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.6),0_14px_30px_-4px_rgba(107,30,50,0.55)] disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0"
        data-testid="button-submit-enquiry"
      >
        {submitting && <Loader2 size={18} className="animate-spin" />}
        {submitting ? 'Sending…' : 'Send enquiry'}
      </button>
      <p className="text-center text-xs leading-5 text-gray-500">
        We reply within one working day. Your details are never shared or sold.
      </p>
    </form>
  );
}
