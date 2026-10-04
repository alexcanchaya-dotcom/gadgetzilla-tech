import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Page not found',
  description: 'This page does not exist on GadgetZilla.',
  // Next.js already adds <meta name="robots" content="noindex"> to every 404.
  // null stops the layout's "index, follow" from also being inherited here,
  // so the page carries exactly one robots tag: noindex.
  robots: null,
  alternates: { canonical: null },
};

export default function NotFound() {
  return (
    <LegalPage
      eyebrow="404"
      title="Page not found"
      intro="The page you were looking for doesn't exist or has moved."
    >
      <h2>Try one of these</h2>
      <ul>
        <li><Link href="/">Gadget catalog (home)</Link></li>
        <li><Link href="/cost-per-use">Cost-per-use calculator</Link></li>
        <li><Link href="/about">About GadgetZilla</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>
      <h2>Legal</h2>
      <ul>
        <li><Link href="/privacy">Privacy policy</Link></li>
        <li><Link href="/terms">Terms of use</Link></li>
        <li><Link href="/affiliate-disclosure">Affiliate disclosure</Link></li>
      </ul>
    </LegalPage>
  );
}
