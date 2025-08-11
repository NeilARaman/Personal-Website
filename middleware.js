import { NextResponse } from 'next/server'

export function middleware(request) {
  // Minimal CSP to support lottie-web animations
  const csp = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline';
    style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
    font-src 'self' https://fonts.gstatic.com;
    img-src 'self' data: https: blob:;
    connect-src 'self';
  `.replace(/\s{2,}/g, ' ').trim()

  // Blocklisted routes (exist but not publicly accessible)
  const { pathname } = new URL(request.url)
  const blocked = /^(?:\/uses\/?$|\/podcasts\/?$|\/reminder\/?$|\/talks\/?$|\/working-remotely\/?$)/i

  if (blocked.test(pathname)) {
    const notFound = NextResponse.rewrite(new URL('/404', request.url))
    notFound.headers.set('Content-Security-Policy', csp)
    return notFound
  }

  const response = NextResponse.next()
  response.headers.set('Content-Security-Policy', csp)
  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - static files
     */
    {
      source: '/((?!api|_next/static|_next/image|favicon.ico|static).*)',
      missing: [
        { type: 'header', key: 'next-router-prefetch' },
        { type: 'header', key: 'purpose', value: 'prefetch' },
      ],
    },
  ],
} 