'use client';

import { useState } from 'react';

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

export function ContactForm() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState<SubmitState>('idle');
  const [feedback, setFeedback] = useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('loading');
    setFeedback('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, message }),
      });
      const data = (await response.json()) as {
        ok?: boolean;
        error?: string;
        reason?: string;
        mailto?: string;
      };

      if (data.ok) {
        setStatus('success');
        setFeedback('Message sent. We will reply from hello@gadgetzilla.tech.');
        setName('');
        setEmail('');
        setMessage('');
        return;
      }

      if (data.reason === 'not_configured' && data.mailto) {
        window.location.href = data.mailto;
        setStatus('success');
        setFeedback('Opening your email app with this message.');
        return;
      }

      setStatus('error');
      setFeedback(data.error || 'Could not send. Email hello@gadgetzilla.tech instead.');
    } catch {
      setStatus('error');
      setFeedback('Could not send. Email hello@gadgetzilla.tech instead.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mt-6 max-w-xl space-y-4">
      <div>
        <label htmlFor="contact-name" className="mb-1 block text-xs uppercase tracking-[0.16em] text-white/60">
          Name
        </label>
        <input
          id="contact-name"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-neonBlue"
        />
      </div>
      <div>
        <label htmlFor="contact-email" className="mb-1 block text-xs uppercase tracking-[0.16em] text-white/60">
          Email
        </label>
        <input
          id="contact-email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-neonBlue"
        />
      </div>
      <div>
        <label htmlFor="contact-message" className="mb-1 block text-xs uppercase tracking-[0.16em] text-white/60">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full rounded-2xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-neonBlue"
        />
      </div>
      <button
        type="submit"
        disabled={status === 'loading'}
        className="rounded-full border border-neonBlue/60 bg-gradient-to-r from-neonBlue to-cyberPurple px-6 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-night disabled:opacity-60"
      >
        {status === 'loading' ? 'Sending…' : 'Send message'}
      </button>
      {feedback ? (
        <p className={`text-sm ${status === 'error' ? 'text-hotPink' : 'text-limePulse'}`} role="status">
          {feedback}
        </p>
      ) : null}
    </form>
  );
}
