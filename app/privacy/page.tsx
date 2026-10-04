import type { Metadata } from 'next';
import Link from 'next/link';
import { LegalPage } from '@/components/LegalPage';
import { CONTACT_EMAIL, SITE_URL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How GadgetZilla handles emails, analytics, ads, and Amazon affiliate cookies.',
  alternates: { canonical: '/privacy' },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy covers gadgetzilla.tech. We keep collection small: the site is a public catalog. We count anonymous page views with cookieless Vercel Web Analytics. Google Analytics or ads only run if those IDs are actually configured."
    >
      <p>Last updated: October 4, 2026</p>
      <h2>Who we are</h2>
      <p>
        GadgetZilla is operated at <a href={SITE_URL}>{SITE_URL}</a>. Contact: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
      <h2>What we collect</h2>
      <ul>
        <li>
          <strong>Newsletter or contact email.</strong> If you submit a form, we receive the address and message you typed. If a newsletter webhook is configured, the email is forwarded to that provider. If it is not configured, the form opens your email app so you can write us directly. We do not pretend a signup succeeded when nothing was stored.
        </li>
        <li>
          <strong>Server logs.</strong> Our host (Vercel) may log standard request data such as IP address, user agent, and the page requested.
        </li>
        <li>
          <strong>Vercel Web Analytics.</strong> We use Vercel Web Analytics to count page views. It is cookieless and anonymous: it sets no cookies, does not identify you, and only gives us aggregated numbers such as page views, referring sites, country, and device type.
        </li>
        <li>
          <strong>Optional Google Analytics.</strong> Google Analytics loads only when a real measurement ID is set in the environment. Placeholder IDs are not used.
        </li>
        <li>
          <strong>Optional ads.</strong> Google AdSense loads only when a real publisher ID is set. Otherwise no AdSense script runs.
        </li>
        <li>
          <strong>Amazon.</strong> Clicking a product link takes you to Amazon, which sets its own cookies and processes the purchase. We do not see your Amazon account.
        </li>
      </ul>
      <h2>What we do not do</h2>
      <ul>
        <li>We do not sell your email or browsing data.</li>
        <li>We do not scrape Amazon from your browser.</li>
        <li>We do not require an account to browse the catalog.</li>
        <li>We do not send cost-per-use inputs to a server. That number is calculated in your browser.</li>
      </ul>
      <h2>Cookies</h2>
      <p>
        The site itself does not set cookies, and Vercel Web Analytics is cookieless. Third-party cookies appear only if you use Amazon, or if Google Analytics or AdSense IDs are configured.
      </p>
      <h2>Retention and requests</h2>
      <p>
        Email us at <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a> to ask what we have or to request deletion of a newsletter signup. Host logs follow Vercel&apos;s retention.
      </p>
      <h2>Children</h2>
      <p>This site is not directed at children under 13. We do not knowingly collect their personal information.</p>
      <h2>Changes</h2>
      <p>
        We will update this page when the collection practices change. The date at the top is the latest revision. See also our{' '}
        <Link href="/terms">terms</Link> and <Link href="/affiliate-disclosure">affiliate disclosure</Link>.
      </p>
    </LegalPage>
  );
}
