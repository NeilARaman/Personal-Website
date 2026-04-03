# Testing Patterns

**Analysis Date:** 2026-04-03

## Test Framework

**Status:**
- No automated testing framework configured
- `"test": "echo 'No tests specified'"` in `package.json`
- No Jest, Vitest, or other test runner dependencies installed
- No test files found in codebase (excluding node_modules)

**Run Commands:**
```bash
npm test                 # Outputs "No tests specified"
npm run lint:check      # Linting - only quality check available
npm run lint            # Auto-fix linting issues
```

## Test Coverage & Strategy

**Current State:**
- **No automated test coverage** - Zero percent coverage
- **Manual testing only** - verification through dev server and preview builds
- **No test infrastructure** - testing framework explicitly disabled in package.json

**Risk Assessment:**
- Critical features lack automated validation:
  - Email API endpoint validation (`pages/api/email.js`) - handles input validation, rate limiting, sanitization
  - Form validation logic (`pages/contact.js`) - client-side field validation, spam detection, honeypot
  - Blog post parsing (`lib/blog.js`) - file system operations, markdown to HTML conversion
  - Security headers and middleware (`lib/api-middleware.js`) - rate limiting, input sanitization, spam patterns

## Quality Assurance Approaches

**Input Validation (Client & Server):**

**Server-side validation** in `pages/api/email.js`:
```javascript
const validation = validateEmailInput(req.body)

if (!validation.isValid) {
  return res.status(400).json({ 
    message: 'Validation failed',
    errors: validation.errors,
    code: 'VALIDATION_ERROR'
  })
}
```

**Validation function** in `lib/api-middleware.js`:
- Name validation: type check, trim, length bounds (0-100), regex pattern `^[a-zA-Z\s'-]+$`
- Email validation: type check, format via `validator.isEmail()`, length (0-254)
- Message validation: type check, trim, length bounds (0-5000)
- Spam detection via regex patterns: viagra/casino terms, URL patterns, repeated characters
- Returns object: `{ isValid, errors, sanitizedData }`
- Sanitization: `validator.escape()`, `validator.normalizeEmail()`

**Client-side validation** in `pages/contact.js`:
- Per-field validation function `validateField(name, value)`:
  - Updates `fieldErrors` state for real-time feedback
  - Same rules as server
  - Provides immediate user feedback
- Form-level validation `validateForm(formData)`:
  - Returns array of error strings
  - Runs before API call
- Character counter tracks message length against 5000 limit

**Pattern Matching for Spam Detection:**
```javascript
const spamPatterns = [
  /\b(viagra|cialis|casino|lottery|winner|congratulations)\b/i,
  /\b(click here|free money|make money fast)\b/i,
  /(http[s]?:\/\/[^\s]+){3,}/i,  // Multiple URLs
  /(.)\1{10,}/,                  // Repeated characters
]
```

**Middleware & Rate Limiting:**

Rate limiter in `lib/api-middleware.js`:
```javascript
export const emailRateLimit = rateLimit({
  windowMs: 60 * 60 * 1000,  // 1 hour window
  max: 5,                     // 5 requests per hour per IP
  keyGenerator: (req) => {
    return req.ip || 
           req.connection?.remoteAddress || 
           req.socket?.remoteAddress ||
           req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
           req.headers['x-real-ip'] ||
           'unknown'
  }
})
```

**Security Headers:**
```javascript
export function setSecurityHeaders(res) {
  res.setHeader('X-Content-Type-Options', 'nosniff')
  res.setHeader('X-Frame-Options', 'DENY')
  res.setHeader('X-XSS-Protection', '1; mode=block')
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin')
}
```

## Error Handling Testing

**Global Error Boundary** in `pages/_app.js`:
- Class component catches render-phase errors
- Displays fallback UI on error
- Logs errors: `console.error('App Error:', error, errorInfo)`
- Button to reload page

**Promise Rejection Handling** in `pages/_app.js`:
```javascript
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason)
})

window.addEventListener('error', (event) => {
  console.error('Global error:', event.error)
})
```

**Router Error Handling** in `pages/_app.js`:
```javascript
Router.events.on('routeChangeError', (err) => {
  console.error('Route change error:', err)
})
```

**API Error Responses** in `pages/api/email.js`:
- 405 for wrong HTTP method: `{ message: 'Method not allowed', code: 'METHOD_NOT_ALLOWED' }`
- 400 for validation failure: `{ message: 'Validation failed', errors: [...], code: 'VALIDATION_ERROR' }`
- 429 for rate limit: `{ error: 'Too many email requests...', code: 'RATE_LIMIT_EXCEEDED' }`
- 400 for email send failure: `{ message: 'Failed to send email', code: 'EMAIL_SEND_FAILED' }`
- 500 for server error: `{ message: 'Internal server error', code: 'INTERNAL_ERROR' }`

## Feature-Specific Testing Approaches

**Blog Post Rendering** (`lib/blog.js`, `pages/[slug].js`):
- No automated tests
- Manual verification: articles render without errors
- Dependencies: `gray-matter` (frontmatter parsing), `remark` (markdown processing)
- Conversion pipeline: markdown → remark plugins (prism) → HTML

**Clipboard Copy Fallback** (`components/CommandBar.js`):
- Multi-tiered approach without tests:
  1. Try modern Clipboard API: `navigator.clipboard.writeText()`
  2. Fallback to `document.execCommand('copy')`
  3. Silent graceful degradation on failure
  4. Toast always shown regardless of success/failure
- Error suppressed: `catch (err) { console.error(...) }`

**Toast Notifications** (`components/Toast.js`):
- Radix UI Toast Primitive used
- Hydration safety: state check `useEffect(() => setIsClient(true))`
- Automatic animation on state: `animation: '100ms ease-in forwards ${slideUpAndFade}'`
- Not tested - visual component relying on Radix UI stability

**Honeypot Spam Detection** (`pages/contact.js`):
- Hidden form field catches bots: `<input type="text" name="website" style={{ position: 'absolute', left: '-9999px', ... }}`
- Check on submit: `const honeypot = e.target.website.value`
- Silently reject if filled: shows error toast without revealing detection

## Browser Compatibility Testing

**Manual approach:**
- SSR safety checks: `if (typeof window !== 'undefined')`
- Feature detection patterns:
  ```javascript
  if (navigator.clipboard && navigator.clipboard.writeText) {
    // Modern API
  } else if (document && document.execCommand) {
    // Fallback
  }
  ```
- Graceful degradation: features fail safely without breaking page

## Testing Gaps & Recommendations

**Critical Untested Areas:**

1. **API Email Endpoint** (`pages/api/email.js`)
   - No tests for: rate limiting effectiveness, input validation edge cases, Resend API integration
   - Risk: Invalid emails sent, rate limits bypassed, spam emails leak through
   - Fix approach: Add Jest/Vitest integration tests

2. **Blog Post Processing** (`lib/blog.js`)
   - No tests for: markdown parsing, HTML sanitization, file system errors
   - Risk: Malformed articles crash page, XSS vulnerabilities
   - Fix approach: Add unit tests for each parsing function

3. **Form Validation** (`pages/contact.js`)
   - No tests for: regex patterns, length constraints, field error states
   - Risk: Invalid data reaches API, user confusion on error messages
   - Fix approach: Add React component tests via React Testing Library

4. **Security Validations**
   - No tests for: spam pattern regex accuracy, header injection attempts, double-encoding
   - Risk: Spam bypasses detection, security headers fail
   - Fix approach: Add security-focused unit tests

## Linting & Code Quality

**ESLint Configuration** (`.eslintrc.json`):
- Extends: `next/core-web-vitals`, `eslint:recommended`, `prettier`
- Rules enforced:
  - `no-console` warning (allow warn/error)
  - `no-unused-vars` error
  - `no-debugger` error
  - `prefer-const` error
  - React rules disabled (JSX doesn't require React import in Next.js)

**Prettier Configuration** (`.prettierrc.json`):
- Enforces consistent code style (2-space indent, no semicolons, single quotes)
- Auto-fixes formatting issues

**Commands:**
```bash
npm run lint:check      # Check for linting issues (pre-commit)
npm run lint            # Fix linting issues automatically
```

---

*Testing analysis: 2026-04-03*
