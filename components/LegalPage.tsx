import { Footer } from '@/components/Footer';
import { SiteHeader } from '@/components/SiteHeader';

type LegalPageProps = {
  eyebrow?: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
};

export function LegalPage({ eyebrow = 'GadgetZilla', title, intro, children }: LegalPageProps) {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-6xl space-y-12 px-4 pb-16 pt-10 sm:px-6 lg:px-8">
        <article className="rounded-3xl border border-white/10 bg-night/70 p-6 shadow-glow sm:p-10">
          <p className="text-xs uppercase tracking-[0.2em] text-neonBlue">{eyebrow}</p>
          <h1 className="mt-2 text-3xl font-bold text-white sm:text-4xl">{title}</h1>
          {intro ? <p className="mt-4 max-w-3xl text-base text-white/70">{intro}</p> : null}
          <div className="prose-legal mt-8 space-y-5 text-sm leading-7 text-white/75 [&_a]:text-neonBlue [&_a]:underline [&_h2]:pt-2 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-white [&_li]:ml-5 [&_li]:list-disc [&_strong]:text-white">
            {children}
          </div>
        </article>
        <Footer />
      </main>
    </>
  );
}
