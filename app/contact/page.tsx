import type { Metadata } from 'next';
import { LegalPage } from '@/components/LegalPage';
import { ContactForm } from '@/components/ContactForm';
import { CONTACT_EMAIL } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Contact GadgetZilla',
  description: 'Email GadgetZilla about catalog corrections, partnerships, or privacy requests.',
  alternates: { canonical: '/contact' },
};

export default function ContactPage() {
  return (
    <LegalPage
      title="Contact"
      intro="Product corrections, partnership questions, and privacy requests all go here. We read hello@gadgetzilla.tech."
    >
      <p>
        Fastest path: <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
      </p>
      <p>
        The form below posts to our contact endpoint. If a webhook is not configured, it opens your email app with the message filled in. Nothing is silently discarded.
      </p>
      <ContactForm />
    </LegalPage>
  );
}
