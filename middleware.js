import { NextRequest, NextResponse } from 'next/server'

export function middleware(request) {
  // Generate a random nonce for this request
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  
  // Determine if we're in development or production
  const isDevelopment = process.env.NODE_ENV === 'development'
  
  // Create CSP header - more permissive in development
  const cspHeader = isDevelopment
    ? `
      default-src 'self';
      script-src 'self' 'unsafe-eval' 'unsafe-inline' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https: blob:;
      connect-src 'self' https://www.google-analytics.com;
      frame-ancestors 'none';
      base-uri 'self';
      form-action 'self';
    `
    : `
      default-src 'self';
      script-src 'self' 'unsafe-inline' 'nonce-${nonce}' https://www.googletagmanager.com https://www.google-analytics.com;
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
      font-src 'self' https://fonts.gstatic.com;
      img-src 'self' data: https: blob:;
      connect-src 'self' https://www.google-analytics.com;
      frame-ancestors 'none';
      base-uri 'self';
      form-action 'self';
    `

  // Replace newline characters and spaces
  const contentSecurityPolicyHeaderValue = cspHeader
    .replace(/\s{2,}/g, ' ')
    .trim()

  // Clone the request headers
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-nonce', nonce)

  // Create the response
  const response = NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  })

  // Set CSP header on the response
  response.headers.set('Content-Security-Policy', contentSecurityPolicyHeaderValue)

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