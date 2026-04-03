# External Integrations

**Analysis Date:** 2026-04-03

## APIs & External Services

**Email Delivery:**
- Resend - Email service for sending contact form messages
  - SDK/Client: `resend` 4.6.0
  - Auth: `RESEND_API_KEY` environment variable
  - Endpoint: `POST /api/email` (at `pages/api/email.js`)
  - Implementation: Uses React Email template component (`components/EmailTemplate`)
  - From address: `website@neilraman.com`
  - Rate limited to 5 emails per IP address per hour

## Data Storage

**Databases:**
- None - Static site with file-based content

**File Storage:**
- Local filesystem only
- Articles stored as Markdown files in `articles/` directory
- Static assets (fonts, CSS, images) in `public/static/` directory
- Sitemaps and robots.txt generated to `public/` during build

**Caching:**
- Vercel Edge Cache for static assets
- Font files cached for 1 year (31536000 seconds) via `vercel.json` headers
- Image optimization with aggressive caching via `next.config.js`

## Authentication & Identity

**Auth Provider:**
- None - Public website with no user authentication
- Contact form uses optional email field for reply-to functionality
- No API authentication required (endpoints are public)

## Monitoring & Observability

**Error Tracking:**
- None detected in codebase
- Internal error responses via API middleware (`lib/api-middleware.js`)

**Logs:**
- Console logging for errors and warnings
- Allowed console methods: `warn`, `error` (per `.eslintrc.json`)
- Email sending success logged to stdout via API handler
- SSR warnings logged to console

**Performance Monitoring:**
- Core Web Vitals collection via `web-vitals` 5.0.3
- WebVitals component imported dynamically at `components/WebVitals` (lazy-loaded, non-SSR)

## CI/CD & Deployment

**Hosting:**
- Vercel (primary deployment platform)
- Automatic deployments from git pushes
- Environment variables configured in Vercel project settings

**CI Pipeline:**
- Vercel CI/CD (no GitHub Actions detected)
- Pre-commit hook: `npm run lint:check` (linting without auto-fix)
- Post-build hook: `next-sitemap` generates `sitemap.xml` and `robots.txt`
- Deployment script: `npm run deploy` triggers `vercel --prod`

## Environment Configuration

**Required env vars:**
- `RESEND_API_KEY` - API key for Resend email service (required for contact form)
- `RESEND_DESTINATION_EMAIL` - Email address to receive contact form submissions (required for contact form)

**Optional env vars:**
- `SITE_URL` - Base URL for sitemap generation (defaults to `https://neilraman.com`)
- `ANALYZE` - Set to `true` to enable bundle analysis during build
- `BUNDLE_ANALYZE` - Set to `server` or `browser` for component-specific bundle analysis
- `NODE_ENV` - Environment mode (development/production)

**Secrets location:**
- `.env` file in project root (listed in `.gitignore`, contains local secrets)
- Vercel environment variables dashboard for production secrets
- Resend API key stored as secret in Vercel project

**Environment file handling:**
- `.env` file present but not committed to git (per `.gitignore`)
- Vercel automatically injects environment variables at build time

## Webhooks & Callbacks

**Incoming:**
- Contact form submission endpoint: `POST /api/email`
  - Accepts JSON: `{ name: string, email: string, message: string }`
  - Returns: `{ message: string, code: string }`
  - Rate limited to 5 requests per IP per hour
  - Validates input before processing
  - Security headers applied to response

**Outgoing:**
- Email delivery via Resend API
  - Sends HTML email template with contact form message
  - Uses `from` address: `website@neilraman.com`
  - Reply-to set to user-provided email address
  - Subject: `{name} - via neilraman.com`

## Security & Privacy

**Security Headers (set via next.config.js and vercel.json):**
- `X-Content-Type-Options: nosniff` - Prevent MIME type sniffing
- `X-Frame-Options: DENY` - Prevent clickjacking
- `X-XSS-Protection: 1; mode=block` - Legacy XSS protection
- `Referrer-Policy: strict-origin-when-cross-origin` - Referrer control
- `Strict-Transport-Security: max-age=31536000; includeSubDomains; preload` - HSTS enabled
- `Permissions-Policy: camera=(), microphone=(), geolocation=(), interest-cohort=()` - Disable permissions

**Content Security Policy (CSP):**
- Applied via middleware (`middleware.js`)
- Allows:
  - `default-src 'self'`
  - `script-src 'self' 'unsafe-eval' 'unsafe-inline'` (required for Lottie animations)
  - `style-src 'self' 'unsafe-inline' https://fonts.googleapis.com`
  - `font-src 'self' https://fonts.gstatic.com`
  - `img-src 'self' data: https: blob:`
  - `connect-src 'self'`

**Input Validation:**
- Email contact form validation in `lib/api-middleware.js`:
  - Name: required, 1-100 characters, alphanumeric with spaces/hyphens/apostrophes
  - Email: RFC-compliant email validation via `validator` library
  - Message: required, 1-5000 characters
  - Spam pattern detection (Viagra, casino, multiple URLs, repeated characters)
  - XSS prevention: input escaped via `validator.escape()`
  - Email normalization via `validator.normalizeEmail()`

**Output Sanitization:**
- HTML sanitization in `lib/sanitize.js` for markdown content
- DOMPurify and isomorphic-dompurify for XSS prevention in blog posts
- Rehype-sanitize for markdown HTML output

**Third-party Integrations:**
- Resend: Email delivery only, no data stored with provider
- Google Fonts: Font delivery (loaded via HTTPS with strict CSP)
- Remixicon: Icon library (self-hosted)

---

*Integration audit: 2026-04-03*
