import type { Metadata } from 'next';
import Link from 'next/link';
import { CostPerUseCalculator } from '@/components/CostPerUseCalculator';
import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: 'Cost per use',
  description:
    'Free cost-per-use number for a gadget you already own or might buy. No email wall. Amazon catalog picks sit under the result only.',
  alternates: { canonical: '/cost-per-use' },
};

export default function CostPerUsePage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl space-y-12 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <section className="rounded-3xl border border-white/10 bg-night/70 p-6 shadow-glow sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-neonBlue">Free decision number</p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">Cost per use</h1>
          <p className="mt-4 max-w-3xl text-base text-white/70">
            Type what a gadget costs, how often you use it, and how long you will keep it. You get one named
            number: cost per use. No email, no score, no “experts recommend.” Use it to decide whether to keep
            what you have or pay for an upgrade.
          </p>
          <p className="mt-3 max-w-3xl text-sm text-white/55">
            The math is price ÷ (uses per week × months × 52/12). Catalog prices are snapshots.{' '}
            <Link href="/affiliate-disclosure" className="text-neonBlue underline underline-offset-4">
              Affiliate disclosure
            </Link>
            .
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
