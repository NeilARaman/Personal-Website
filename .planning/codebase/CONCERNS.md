# Codebase Concerns

**Analysis Date:** 2026-04-03

## Tech Debt

**Markdown sanitization without rehype-sanitize integration:**
- Issue: `lib/blog.js` uses `remark-html` with `sanitize: false` flag, relying solely on `lib/sanitize.js` DOMPurify for security
- Files: `lib/blog.js` (line 51), `pages/[slug].js` (line 50)
- Impact: If DOMPurify config is bypassed or updated incompatibly, XSS vulnerabilities could be introduced in blog post rendering
- Fix approach: Either enable remark's built-in rehype-sanitize plugin or audit DOMPurify config quarterly; consider moving sanitization to build-time

**Duplicate email validation logic:**
- Issue: Email validation is duplicated across client-side (`pages/contact.js` lines 76-105) and server-side (`lib/api-middleware.js` lines 26-83)
- Files: `pages/contact.js`, `lib/api-middleware.js`
- Impact: Maintenance burden; inconsistencies between client/server validation could allow invalid submissions
- Fix approach: Extract shared validation schema to `lib/validators.js` and import in both locations

**Excessive suppressHydrationWarning usage:**
- Issue: Multiple `suppressHydrationWarning` flags used to mask SSR/client mismatch issues rather than fixing root cause
- Files: `pages/about.js`, `pages/[slug].js`, `pages/_document.js`, `components/BlogDate.js`
- Impact: Masks potential SSR bugs; makes hydration issues harder to debug in future
- Fix approach: Audit each instance - most should be fixable (e.g., BlogDate timezone handling)

**Error boundary without error reporting:**
- Issue: `pages/_app.js` ErrorBoundary catches and logs errors but provides no way to report them to monitoring service
- Files: `pages/_app.js` (lines 14-64)
- Impact: Production errors are silently lost; no visibility into what's breaking for users
- Fix approach: Integrate with Sentry or similar error tracking service

## Known Bugs

**Rate limiter IP detection fragility:**
- Symptoms: Email form submissions may fail for users behind certain proxy configurations
- Files: `lib/api-middleware.js` (lines 15-22)
- Trigger: Users with multiple X-Forwarded-For headers, ISPs with non-standard IP headers, or Vercel edge deployments
- Workaround: None; users must use different IP or wait for rate limit window to reset
- Fix approach: Test rate limiter against various IP header scenarios; consider using `request-ip` package

**Blog post sort order with identical dates:**
- Symptoms: Article order unpredictable when multiple posts share same `date` in frontmatter
- Files: `lib/blog.js` (lines 39-45)
- Trigger: When `post1.date === post2.date`, comparison returns string '-1' or '1' rather than boolean, causing unstable sort
- Workaround: Ensure all articles have unique dates or include time component in date field
- Fix approach: Fix sort comparison: `.sort((a, b) => new Date(b.date) - new Date(a.date))`

**Resend API failure response handling:**
- Symptoms: Error message sent to client is object (e.message) when rate-limited, but no structured error format
- Files: `pages/api/email.js` (lines 71-73)
- Trigger: Hit Resend API rate limits before express-rate-limit kicks in
- Workaround: Contact form silently fails; user gets generic error
- Fix approach: Validate Resend error type and return consistent error structure like other endpoints

## Security Considerations

**Unvalidated Resend API key initialization:**
- Risk: `process.env.RESEND_API_KEY` could be undefined or invalid at runtime, but errors surface only when email sent
- Files: `pages/api/email.js` (line 2)
- Current mitigation: None; API key checked implicitly by Resend SDK
- Recommendations: Add explicit validation in api endpoint; fail fast at server startup

**DOMPurify configuration overly permissive for blog posts:**
- Risk: `sanitizeMarkdownHTML()` allows `iframe`, `video`, `source` tags which could be vectors for embedded malware
- Files: `lib/sanitize.js` (lines 33-47)
- Current mitigation: URL regexp restricts `data:` URIs but doesn't validate iframe `src` domains
- Recommendations: Whitelist specific allowed domains for iframes (YouTube, Vimeo); remove `video`/`source` unless actively needed

**Honeypot implementation visible to sophisticated bots:**
- Risk: Honeypot field is easily detected by DOM inspection; doesn't protect against API-level attacks
- Files: `pages/contact.js` (lines 185-193)
- Current mitigation: Field hidden with CSS; form silently rejects if filled
- Recommendations: Consider additional rate limiting factors (user-agent, fingerprinting); add CSRF token

**Email input sanitization discrepancy:**
- Risk: `validateEmailInput()` in `lib/api-middleware.js` uses `validator.escape()` on email field, but emails contain special chars that should not be HTML-escaped
- Files: `lib/api-middleware.js` (line 79)
- Current mitigation: Escaped email sent only in replyTo header, not in user-visible content
- Recommendations: Remove escape from email field; use `validator.normalizeEmail()` only

## Performance Bottlenecks

**CommandBar component at 419 lines:**
- Problem: Largest component; complex kbar integration with many nested action definitions
- Files: `components/CommandBar.js` (419 lines)
- Cause: Single component handles icon loading, action routing, toast notifications, and keyboard shortcuts
- Improvement path: Extract action definitions to `lib/commandbar-actions.js`; extract Toast into separate concern

**Blog post SSR conversion synchronous:**
- Problem: `convertMarkdownToHtml()` runs at request time during `getStaticProps`, blocking page generation
- Files: `pages/[slug].js` (line 68), `lib/blog.js` (lines 48-54)
- Cause: remark + prism plugins process entire post synchronously
- Improvement path: Pre-convert markdown to HTML at build time; store in static files or use incremental static regeneration

**LottieIcon dynamic import without preload:**
- Problem: Lottie animations stutter on first load due to runtime `import('lottie-web')`
- Files: `components/LottieIcon.js` (line 21)
- Cause: Large library loaded on first interaction, not preloaded
- Improvement path: Consider static import with code-splitting or preload in _document.js

**Image optimization disabled for Stitches compatibility:**
- Problem: `optimizeCss: true` disabled in next.config.js due to Stitches SSR concerns
- Files: `next.config.js` (line 12)
- Cause: Stitches CSS-in-JS conflicts with Next.js experimental CSS optimization
- Improvement path: Upgrade to Stitches v2 if available; otherwise accept CSS size trade-off

## Fragile Areas

**API email endpoint without input length pre-check:**
- Files: `pages/api/email.js`
- Why fragile: Accepts 5000-char message, runs full markdown to HTML conversion, then sends via Resend - no early exit for obviously bad input
- Safe modification: Add fast pre-validation before Resend call (length, format checks)
- Test coverage: Integration tests only - no unit tests for validation layer

**Blog slug generation from filesystem:**
- Files: `lib/blog.js`, `pages/[slug].js`
- Why fragile: Assumes all `.md` files in `articles/` are valid posts; no schema validation of frontmatter
- Safe modification: Add schema validation (e.g., zod) for required frontmatter fields
- Test coverage: Missing - only 1 article in repo for testing

**Stitches SSR extraction in _document.js:**
- Files: `pages/_document.js` (lines 6-44)
- Why fragile: Try-catch silently falls back to empty CSS string on error; site renders without styling
- Safe modification: Log CSS extraction errors; validate CSS output is non-empty before rendering
- Test coverage: Manual only - no tests for SSR failure scenarios

## Scaling Limits

**Email rate limit per IP (5/hour):**
- Current capacity: 5 requests per IP per hour = 120 requests/day per unique IP
- Limit: Users behind shared proxy (corporate, school) all counted as single IP; legitimate users rate-limited together
- Scaling path: Implement user-level rate limiting (session-based) in addition to IP-based; use fingerprinting library

**Single Resend email account:**
- Current capacity: Resend free tier = 100 emails/day; paid tier scales to thousands
- Limit: No load balancing across multiple email services; single point of failure
- Scaling path: Add fallback email service (e.g., SendGrid); implement circuit breaker pattern

**Blog articles directory on filesystem:**
- Current capacity: Works fine up to ~1000 articles
- Limit: `getAllPosts()` reads entire directory on every build; getStaticPaths blocks on all posts
- Scaling path: Migrate to CMS or database; implement pagination

## Dependencies at Risk

**Stitches CSS-in-JS maintenance:**
- Risk: `@stitches/react` v1.2.6 is mature but minimal updates; v2 not yet stable
- Impact: TypeScript support gaps; SSR quirks require next.config.js workarounds
- Migration plan: Monitor Stitches v2 release; consider switching to Tailwind CSS + CSS Modules (requires styling refactor)

**Remark/rehype plugin chain complexity:**
- Risk: Multiple plugins (`remark`, `remark-html`, `remark-prism`) with varying maintenance levels
- Impact: Breaking changes in prism integration or HTML generation could break blog rendering
- Migration plan: Consolidate to MDX pipeline; migrate blog to MDX for better component support

**express-rate-limit without TypeScript:**
- Risk: Library receives minimal updates; no TypeScript definitions
- Impact: Difficult to extend with custom rate limit strategies; errors at runtime
- Migration plan: Evaluate `upstash-ratelimit` or implement custom rate limiting with Redis

## Missing Critical Features

**No error tracking/monitoring:**
- Problem: Production errors in API, components, or SSR are invisible
- Blocks: Can't diagnose user issues; can't prioritize bug fixes
- Priority: High - add Sentry or similar before scaling user base

**No form submission logging:**
- Problem: Contact form submissions have no audit trail; can't track spam patterns or legitimate submissions
- Blocks: Can't debug why users' emails aren't being received; can't improve spam detection
- Priority: Medium - add structured logging to API endpoint

**No performance monitoring (Web Vitals collection):**
- Problem: `components/WebVitals.js` logs to console only; no aggregation
- Blocks: Can't identify performance regressions or user experience issues
- Priority: Medium - integrate with analytics service (Vercel Analytics, Datadog, etc.)

**No content versioning for blog posts:**
- Problem: Markdown files change without history; can't revert bad edits or track modifications
- Blocks: Can't maintain editorial integrity or provide "updated" date to readers
- Priority: Low - migrate articles to git history or add CMS with versioning

## Test Coverage Gaps

**No tests for API email endpoint:**
- What's not tested: Rate limiting behavior, validation edge cases, Resend SDK interaction
- Files: `pages/api/email.js`
- Risk: Broken email submissions won't be caught until production; rate limiter IP logic untested
- Priority: High

**No tests for blog markdown rendering:**
- What's not tested: Markdown to HTML conversion, XSS prevention via sanitization, prism code highlighting
- Files: `lib/blog.js`, `pages/[slug].js`
- Risk: Malformed markdown or XSS payloads reach production silently
- Priority: High

**No tests for form validation:**
- What's not tested: Client-side validation (contact.js), server-side validation (api-middleware.js), mismatches
- Files: `pages/contact.js`, `lib/api-middleware.js`
- Risk: Invalid data accepted by one layer but rejected by other; inconsistent UX
- Priority: Medium

**No tests for Stitches SSR:**
- What's not tested: CSS extraction in _document.js, hydration warnings, style consistency
- Files: `pages/_document.js`
- Risk: SSR CSS extraction fails silently, users see unstyled site
- Priority: Medium

**No tests for ErrorBoundary:**
- What's not tested: Error catching, fallback UI render, event listener cleanup
- Files: `pages/_app.js`
- Risk: Fallback UI never tested; event listener leak possible
- Priority: Low

---

*Concerns audit: 2026-04-03*
