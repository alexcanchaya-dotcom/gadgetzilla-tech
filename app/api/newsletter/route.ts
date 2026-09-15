import { NextResponse } from 'next/server';
import { CONTACT_EMAIL } from '@/lib/site';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: { email?: string; source?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }

  const email = String(body.email || '').trim().toLowerCase();
  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'Please enter a valid email.' }, { status: 400 });
  }

  const webhook = process.env.NEWSLETTER_WEBHOOK_URL;
  if (webhook) {
    const response = await fetch(webhook, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source: body.source || 'gadgetzilla', site: 'gadgetzilla.tech' }),
    });
    if (!response.ok) {
      return NextResponse.json({ error: 'Signup failed. Try emailing us directly.' }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  }

  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('GadgetZilla newsletter signup')}&body=${encodeURIComponent(`Please add ${email} to the GadgetZilla deal list.`)}`;
  return NextResponse.json({ ok: false, reason: 'not_configured', mailto });
}
