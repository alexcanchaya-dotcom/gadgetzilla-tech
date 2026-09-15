import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { CANONICAL_HOST, shouldRedirectWwwToApex } from '@/lib/site';

/**
 * One-way host canonicalization: www → apex.
 * Never send gadgetzilla.tech to www — that is what caused the live redirect loop
 * when Vercel’s primary domain was www (307) and this app sent www back (308).
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? request.nextUrl.host;

  if (!shouldRedirectWwwToApex(host)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.protocol = 'https:';
  url.hostname = CANONICAL_HOST;
  url.port = '';
  return NextResponse.redirect(url, 308);
}

export const config = {
  matcher: ['/((?!_next/static|_next/image).*)']
};
