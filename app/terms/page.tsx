import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import { AFFILIATE_TAG, CONTACT_EMAIL, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Terms of Use',
  description: 'Terms for using GadgetZilla, including affiliate links and price snapshots.',
  alternates: { canonical: '/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="These terms apply to gadgetzilla.tech. If you do not agree, do not use the site."
    >
      <p>Last updated: September 14, 2026</p>
      <h2>The site</h2>
      <p>
        GadgetZilla (<a href={SITE_URL}>{SITE_URL}</a>) is an editorial catalog of gadgets with Amazon Associate links. We are not Amazon, not a retailer, and not the manufacturer of listed products. We do not take orders or payment on this site.
      </p>
      <h2>Affiliate links</h2>
      <p>
        Product links use Associate tag {AFFILIATE_TAG}. If you buy after clicking, we may earn a commission at no extra cost to you. See the{' '}
        <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
      </p>
      <h2>Prices and availability</h2>
      <p>
        Any price on this site is a snapshot, not a live Amazon quote and not an offer from us. Stock, shipping, and the price you pay are set on Amazon when you check out. We do not promise a deal, a discount, or that an item is in stock.
      </p>
      <h2>No warranty</h2>
      <p>
        The catalog is provided as-is for information. We do not warrant that descriptions, images, or listed prices are complete or current. Product notes are editorial, not a lab test of every item.
      </p>
      <h2>Acceptable use</h2>
      <p>
        Do not scrape the site in a way that burdens the host, impersonate GadgetZilla, or use our pages to mislead people about Amazon or our affiliate relationship.
      </p>
      <h2>Privacy</h2>
      <p>
        How we handle email and optional analytics is in the <Link href="/privacy">privacy policy</Link>.
      </p>
      <h2>Contact</h2>
      <p>
        Questions: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or the <Link href="/contact">contact page</Link>. Related: <Link href="/about">about</Link>.
      </p>
    </LegalPage>
  );
}
