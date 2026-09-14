'use client';

import { useState } from 'react';
import Link from 'next/link';

type NewsletterFormProps = {
  source?: 'footer' | 'popup';
  submitLabel?: string;
  className?: string;
};

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export function NewsletterForm({
  source = 'footer',
  submitLabel = 'Subscribe',
  className = '',
}: NewsletterFormProps) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<SubmitState>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setMessage('');

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, source }),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        reason?: string;
        mailto?: string;
      };

      if (data.ok) {
        setStatus('success');
        setMessage('Added. We will only use this for catalog notes.');
        setEmail('');
        return;
      }

      if (data.reason === 'not_configured' && data.mailto) {
        window.location.href = data.mailto;
        setStatus('success');
        setMessage('Opening your email app so you can write us.');
        return;
      }

      setStatus('error');
      setMessage(data.error || 'Could not subscribe. Email hello@gadgetzilla.tech.');
    } catch {
      setStatus('error');
      setMessage('Could not subscribe. Email hello@gadgetzilla.tech.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        <label className="sr-only" htmlFor={`newsletter-email-${source}`}>
          Email address
        </label>
        <input
          id={`newsletter-email-${source}`}
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="Email for occasional catalog notes"
          className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 transition focus:border-neonBlue sm:w-72"
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : submitLabel}
        </button>
      </div>
      {message ? (
        <p className={`mt-3 text-xs ${status === 'error' ? 'text-hotPink' : 'text-white/70'}`} role="status">
          {message}
        </p>
      ) : (
        <p className="mt-3 text-xs text-white/50">
          Optional. Read the <Link href="/privacy" className="text-neonBlue underline underline-offset-2">privacy policy</Link> before you send your email.
        </p>
      )}
    </form>
  );
}
