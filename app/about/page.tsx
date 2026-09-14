import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About GadgetZilla',
  description: 'Why GadgetZilla exists, how we pick gadgets, and how the catalog stays current.',
  alternates: { canonical: '/about' },
};

export default function AboutPage() {
  return (
    <LegalPage
      title="About GadgetZilla"
      intro="GadgetZilla is a curated catalog of gaming gear, audio, wearables, smart home, and PC parts. We publish picks with Amazon Associate links so you can check current prices yourself."
    >
      <h2>What this site is</h2>
      <p>
        This is an independent gadget list, not an Amazon storefront and not a manufacturer. Every product on the homepage lives in a versioned catalog file in the repo. We do not scrape Amazon from your browser.
      </p>
      <h2>How we update the list</h2>
      <p>
        The homepage shows the catalog&apos;s last refresh date. New items from that refresh are marked <strong>New</strong>. Al (or anyone with repo access) can refresh prices and add products with <code>npm run refresh-gadgets</code> using Amazon Product Advertising API keys, a manual <code>gadgets.input.json</code> file, or an RSS/YouTube feed that already contains real Amazon ASINs.
      </p>
      <h2>How we make money</h2>
      <p>
        If you buy through our links, we may earn an Amazon Associate commission at no extra cost to you. Details are on the{' '}
        <Link href="/affiliate-disclosure">affiliate disclosure</Link> page.
      </p>
      <h2>Contact</h2>
      <p>
        Questions, corrections, or takedown requests: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> or the{' '}
        <Link href="/contact">contact form</Link>.
      </p>
    </LegalPage>
  );
}
