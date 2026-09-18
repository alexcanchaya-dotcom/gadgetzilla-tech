'use client';

import { useState } from 'react';
import { resolveProductImageSrc } from '@/lib/product-image';

type ProductImageProps = {
  src: string;
  alt: string;
  asin?: string;
  className?: string;
};

function isTinyPlaceholder(img: HTMLImageElement) {
  return img.naturalWidth < 24 || img.naturalHeight < 24;
}

export function ProductImage({ src, alt, asin, className = '' }: ProductImageProps) {
  const resolved = resolveProductImageSrc(src, asin);
  const [failedFor, setFailedFor] = useState<string | null>(null);
  const failed = !resolved || failedFor === resolved;

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-slate-100 px-3 text-center text-sm font-semibold leading-snug text-slate-700 ${className}`}
      >
        <span className="line-clamp-3">{alt || 'Product'}</span>
      </div>
    );
  }

  return (
    // Regular img avoids optimizer blanks on hotlinked Amazon URLs.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={resolved}
      alt={alt}
      referrerPolicy="no-referrer"
      className={`object-contain bg-white ${className}`}
      onError={() => setFailedFor(resolved)}
      onLoad={(event) => {
        if (isTinyPlaceholder(event.currentTarget)) setFailedFor(resolved);
      }}
    />
  );
}
