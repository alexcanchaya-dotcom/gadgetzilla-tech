'use client';

import { useState } from 'react';

type ProductImageProps = {
  src: string;
  alt: string;
  className?: string;
};

function isTinyPlaceholder(img: HTMLImageElement) {
  return img.naturalWidth < 24 || img.naturalHeight < 24;
}

export function ProductImage({ src, alt, className = '' }: ProductImageProps) {
  const [failed, setFailed] = useState(false);
  const initials = alt
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] || '')
    .join('')
    .toUpperCase();

  if (failed || !src) {
    return (
      <div className={`flex items-center justify-center bg-white/10 text-sm font-semibold tracking-wide text-white/70 ${className}`}>
        {initials || 'GZ'}
      </div>
    );
  }

  return (
    // Regular img avoids Vercel/Next optimizer blanks on hotlinked Unsplash URLs.
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      className={`object-contain bg-white ${className}`}
      onError={() => setFailed(true)}
      onLoad={(event) => {
        if (isTinyPlaceholder(event.currentTarget)) setFailed(true);
      }}
    />
  );
}
