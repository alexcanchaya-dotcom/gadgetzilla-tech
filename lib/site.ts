export const SITE_NAME = 'GadgetZilla';
export const CANONICAL_HOST = 'gadgetzilla.tech';
export const WWW_HOST = 'www.gadgetzilla.tech';
export const SITE_URL = `https://${CANONICAL_HOST}`;
export const AFFILIATE_TAG = 'gadgetzilla07-20';
export const CONTACT_EMAIL = 'hello@gadgetzilla.tech';

/** Hostname only, no port. Apex is never redirected. */
export function shouldRedirectWwwToApex(hostHeader: string | null | undefined) {
  const hostname = hostHeader?.split(':')[0]?.toLowerCase();
  return hostname === WWW_HOST;
}

export const navLinks = [
  { href: '/about', label: 'About' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/affiliate-disclosure', label: 'Disclosure' },
] as const;

export const legalLinks = [
  { href: '/about', label: 'About' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/affiliate-disclosure', label: 'Affiliate disclosure' },
  { href: '/contact', label: 'Contact' },
] as const;

export function absoluteUrl(path = '/') {
  if (path.startsWith('http')) return path;
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`;
}
