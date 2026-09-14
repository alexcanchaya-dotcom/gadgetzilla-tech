import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import { AFFILIATE_TAG, CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Affiliate Disclosure',
  description: 'GadgetZilla is an Amazon Associate. We may earn from qualifying purchases.',
  alternates: { canonical: '/affiliate-disclosure' },
};

export default function AffiliateDisclosurePage() {
  return (
    <LegalPage
      title="Affiliate disclosure"
      intro="GadgetZilla participates in the Amazon Services LLC Associates Program. We may earn a commission if you buy through our links, at no extra cost to you."
    >
      <h2>Amazon Associates</h2>
      <p>
        As an Amazon Associate we earn from qualifying purchases. Product links on this site use our Associate tag{' '}
        <strong>{AFFILIATE_TAG}</strong> so Amazon can credit a referral. Amazon and the Amazon logo are trademarks of Amazon.com, Inc. or its affiliates.
      </p>
      <h2>What that means for you</h2>
      <ul>
        <li>The price you pay is Amazon&apos;s price. We do not add a fee on top.</li>
        <li>Prices, stock, and shipping change on Amazon. Treat our listed price as a snapshot from the last catalog refresh.</li>
        <li>We may receive a commission if you click through and buy, including related items Amazon shows you.</li>
      </ul>
      <h2>How we pick products</h2>
      <p>
        Picks are editorial. We keep them in a public catalog file and refresh that file with a script, not by scraping Amazon in your browser. A commission does not change the listed hype score.
      </p>
      <h2>Other disclosures</h2>
      <p>
        If we ever run a paid placement that is not a standard Associate link, we will mark it as sponsored. Display ads only appear if a real AdSense publisher ID is configured.
      </p>
      <p>
        Questions: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Related: <Link href="/privacy">privacy policy</Link> and{' '}
        <Link href="/about">about</Link>.
      </p>
    </LegalPage>
  );
}
