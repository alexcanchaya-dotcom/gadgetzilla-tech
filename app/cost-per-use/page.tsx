import type { Metadata } from 'next';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';
import { CostPerUseCalculator } from '@/components/CostPerUseCalculator';
import { BreadcrumbJsonLd } from '@/components/JsonLd';
import { SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Cost per use',
  description:
    'Free cost-per-use calculator. Type a price, how often you will use a gadget, and how long you will keep it. One decision number. No email wall.',
  alternates: { canonical: '/cost-per-use' },
};

export default function CostPerUsePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: 'Home', url: SITE_URL },
          { name: 'Cost per use', url: `${SITE_URL}/cost-per-use` },
        ]}
      />
      <CostPerUseFaqJsonLd />
      <SiteHeader />
      <main className="mx-auto max-w-6xl space-y-12 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-white/10 bg-night/70 p-6 sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-neonBlue">Free calculator</p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Cost per use</h1>
          <p className="mt-4 max-w-3xl text-base text-white/70">
            One named number after three free inputs: what it costs, how often you will use it, and how long you will
            keep it. Amazon links sit under the result only. We do not ask for email first.
          </p>
          <div className="mt-8">
            <CostPerUseCalculator />
          </div>
        </section>
        <Footer />
      </main>
    </>
  );
}

function CostPerUseFaqJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is cost per use on GadgetZilla?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Cost per use is the price you type divided by the number of uses you expect. It is arithmetic, not a review.',
        },
      },
      {
        '@type': 'Question',
        name: 'Do I need to give an email to see the number?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'No. The calculator is free and does not ask for email before showing cost per use.',
        },
      },
      {
        '@type': 'Question',
        name: 'Why are there Amazon links under the result?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'GadgetZilla is an Amazon Associate. Catalog items near the price you entered appear only after the number. We may earn a commission if you buy. Confirm price and stock on Amazon.',
        },
      },
    ],
  };

  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  );
}
