export const SITE_NAME = 'GadgetZilla';
export const SITE_URL = 'https://gadgetzilla.tech';
export const AFFILIATE_TAG = 'gadgetzilla07-20';
export const CONTACT_EMAIL = 'hello@gadgetzilla.tech';

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
