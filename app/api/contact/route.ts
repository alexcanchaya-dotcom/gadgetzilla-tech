import { NextResponse } from 'next/server';
import { CONTACT_EMAIL } from '@/lib/site';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { name?: string; email?: string; message?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const name = String(body.name || '').trim().slice(0, 200);
  const email = String(body.email || '').trim().toLowerCase();
  const message = String(body.message || '').trim().slice(0, 5000);

  if (!name || !EMAIL_PATTERN.test(email) || message.length < 5) {
    return NextResponse.json({ error: 'Name, a valid email, and a short message are required.' }, { status: 400 });
  }

  const webhook = process.env.CONTACT_WEBHOOK_URL || process.env.NEWSLETTER_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, message, source: 'contact', site: 'gadgetzilla.tech' }),
    });
    if (!response.ok) {
      return NextResponse.json({ error: 'Could not deliver the message.' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(`GadgetZilla contact from ${name}`)}&body=${encodeURIComponent(`${message}\n\n— ${name} <${email}>`)}`;
  return NextResponse.json({ ok: false, reason: 'not_configured', mailto });
}
