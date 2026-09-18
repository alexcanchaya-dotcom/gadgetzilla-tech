import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About GadgetZilla',
  description: 'What GadgetZilla is, how we are paid, and where to read the legal pages.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <LegalPage
      title="About GadgetZilla"
      intro="GadgetZilla is an independent list of gaming and tech products. We are not a store. Amazon handles checkout."
    >
      <h2>Read these first</h2>
      <ul>
        <li><Link href="/privacy">Privacy policy</Link></li>
        <li><Link href="/terms">Terms of use</Link></li>
        <li><Link href="/affiliate-disclosure">Affiliate disclosure</Link></li>
      </ul>
      <h2>What this site is</h2>
      <p>
        A curated catalog of gaming gear, audio, wearables, smart home, and PC parts. Listings live in a public file in the repo. We do not scrape Amazon from your browser, and we do not invent live “hot deals” or hype scores.
      </p>
      <h2>Cost per use</h2>
      <p>
        The <Link href="/cost-per-use">cost-per-use calculator</Link> is free and does not ask for email. It divides the price you type by the uses you expect. Amazon catalog links appear under that number only, with the usual Associate disclosure.
      </p>
      <h2>How we make money</h2>
      <p>
        If you buy through our links, we may earn an Amazon Associate commission at no extra cost to you. Details are on the{' '}
        <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
      </p>
      <h2>Prices</h2>
      <p>
        A listed price is a snapshot from the last time the catalog file was edited. Confirm the current price on Amazon before you buy.
      </p>
      <h2>Contact</h2>
      <p>
        Questions, corrections, or takedown requests: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or the{' '}
        <Link href="/contact">contact form</Link>.
      </p>
    </LegalPage>
  );
}
