'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

type NewsletterFormProps = {
  source?: 'footer' | 'popup';
  submitLabel?: string;
  className?: string;
};

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export function NewsletterForm({
  source = 'footer',
  submitLabel = 'Join the Squad',
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
        setMessage('You are on the list. We will only send gadget drops.');
        setEmail('');
        if (source === 'popup') localStorage.setItem('gadgetzilla-subscribed', 'true');
        return;
      }

      if (data.reason === 'not_configured' && data.mailto) {
        window.location.href = data.mailto;
        setStatus('success');
        setMessage('Opening your email app so we can add you to the list.');
        if (source === 'popup') localStorage.setItem('gadgetzilla-subscribed', 'true');
        return;
      }

      setStatus('error');
      setMessage(data.error || 'Could not subscribe right now. Email hello@gadgetzilla.tech.');
    } catch {
      setStatus('error');
      setMessage('Could not subscribe right now. Email hello@gadgetzilla.tech.');
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
          placeholder="Enter your email for gadget drops"
          className="w-full rounded-full border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none ring-0 transition focus:border-neonBlue focus:shadow-glow sm:w-72"
        />
        <motion.button
          type="submit"
          disabled={status === 'loading'}
          whileHover={{ scale: 1.05, boxShadow: '0 0 18px rgba(0, 217, 255, 0.6)' }}
          whileTap={{ scale: 0.96 }}
          className="rounded-full border border-neonBlue/60 bg-gradient-to-r from-neonBlue to-cyberPurple px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-night disabled:opacity-60"
        >
          {status === 'loading' ? 'Sending…' : submitLabel}
        </motion.button>
      </div>
      {message ? (
        <p className={`mt-3 text-xs ${status === 'error' ? 'text-hotPink' : 'text-limePulse'}`} role="status">
          {message}
        </p>
      ) : (
        <p className="mt-3 text-xs text-white/50">No fake signup. If the list is not configured yet, this opens email to hello@gadgetzilla.tech.</p>
      )}
    </form>
  );
}
