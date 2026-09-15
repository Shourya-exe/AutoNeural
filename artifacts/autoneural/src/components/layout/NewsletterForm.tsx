import { useRef, useState, type FormEvent } from 'react';
import { Loader2 } from 'lucide-react';

import { subscribeNewsletter } from '@/lib/api';

type Status = 'idle' | 'submitting' | 'success' | 'error';

/**
 * Footer newsletter signup. Markup and classes are unchanged from the original
 * static form; only state, the honeypot and the result message are new.
 */
export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [honeypot, setHoneypot] = useState('');
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');

  const startedAt = useRef(Date.now());
  const submitting = status === 'submitting';

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submitting) return;

    setStatus('submitting');
    setMessage('');

    const result = await subscribeNewsletter({
      email,
      companyWebsite: honeypot,
      startedAt: startedAt.current,
    });

    if (result.ok) {
      setStatus('success');
      setMessage(result.message);
      setEmail('');
      startedAt.current = Date.now();
    } else {
      setStatus('error');
      setMessage(result.fields?.email ?? result.message);
    }
  }

  return (
    <form
      className="flex flex-col gap-3"
      data-testid="form-newsletter"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* Honeypot — off-screen, never shown to real users. */}
      <div className="absolute left-[-9999px] top-0 h-px w-px overflow-hidden" aria-hidden="true">
        <label htmlFor="newsletter-company-website">Do not fill this in</label>
        <input
          id="newsletter-company-website"
          type="text"
          name="companyWebsite"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      <label htmlFor="newsletter-email" className="sr-only">
        Work email address
      </label>
      <input
        id="newsletter-email"
        placeholder="Work email address"
        className="rounded-lg border border-border bg-muted px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20"
        data-testid="input-newsletter-email"
        required
        type="email"
        name="email"
        autoComplete="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={submitting}
      />
      <button
        type="submit"
        disabled={submitting}
        className="flex items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary disabled:opacity-70"
        data-testid="button-newsletter-submit"
      >
        {submitting && <Loader2 size={14} className="animate-spin" />}
        {submitting ? 'Subscribing…' : 'Subscribe'}
      </button>

      <div aria-live="polite">
        {status === 'success' && (
          <p className="text-sm text-primary" data-testid="newsletter-success">
            {message}
          </p>
        )}
        {status === 'error' && message && (
          <p className="text-sm text-red-600" data-testid="newsletter-error" role="alert">
            {message}
          </p>
        )}
      </div>
    </form>
  );
}
