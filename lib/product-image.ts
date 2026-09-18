const ASIN_PATTERN = /^[A-Z0-9]{10}$/;

export function amazonImageUrl(asin?: string): string {
  const normalized = String(asin || '').trim().toUpperCase();
  if (!ASIN_PATTERN.test(normalized)) return '';
  return `https://m.media-amazon.com/images/P/${normalized}.01.LZZZZZZZ.jpg`;
}

export function resolveProductImageSrc(src?: string, asin?: string): string {
  const current = String(src || '').trim();
  if (!current) return '';
  if (!current.includes('unsplash.com')) return current;
  return amazonImageUrl(asin);
}
