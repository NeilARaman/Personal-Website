# Coding Conventions

**Analysis Date:** 2026-04-03

## Naming Patterns

**Files:**
- PascalCase for component files: `ButtonPrimary.js`, `CommandBar.js`, `ErrorMessage.js`
- camelCase for utility/library files: `api-middleware.js`, `blog.js`, `sanitize.js`, `strip-html.js`, `json-ld.js`
- Pages use lowercase: `index.js`, `contact.js`, `about.js`, `articles.js`
- API routes in nested folders: `pages/api/email.js`
- Layouts in `layouts/` directory with PascalCase: `Base.js`

**Functions:**
- camelCase for all functions: `getPostSlugs()`, `getPostBySlug()`, `validateEmailInput()`, `convertMarkdownToHtml()`
- Handler functions descriptive with `on` prefix for event handlers: `onSendEmail()`, `onHoverStart()`, `onHoverEnd()`
- Validation functions start with `validate`: `validateField()`, `validateForm()`, `validateEmailInput()`
- Factory/getter functions start with `get`: `getPostSlugs()`, `getPostBySlug()`, `getAllPosts()`, `getPersonJsonLd()`
- Custom hooks start with `use`: `useRouter()`, `useKBar()` (from kbar library)

**Variables:**
- camelCase for all variables: `postsDirectory`, `showToast`, `fieldErrors`, `messageLength`
- State variables use React naming: `const [isLoading, setIsLoading] = useState(false)`
- Refs use `Ref` suffix: `copyLinkRef`, `emailRef`, `sourceRef`, `homeRef`, `aboutRef`
- Error variables: `e` for caught errors, `error` for variable names
- Configuration objects in camelCase: `formData`, `validation`, `meta`

**Types:**
- Component prop validation done via inline checks (no TypeScript, no PropTypes enforced)
- Stitches theme tokens prefixed with `$`: `$primary`, `$secondary`, `$background`, `$hover`, `$cyan`
- Media query breakpoints prefixed with `@` and `bp` numeric: `@bp1`, `@bp2`, `@bp3`, `@bp4`

**Constants:**
- Colors defined in theme: UPPERCASE color names at Stitches config level
- Magic numbers avoided in favor of theme tokens
- Regex patterns defined as variables for clarity: `spamPatterns`, `emailPattern`

## Code Style

**Formatting:**
- Prettier with configured settings (from `.prettierrc.json`):
  - `arrowParens: "avoid"` - omit parens in single-argument arrow functions
  - `bracketSpacing: true` - space between object braces
  - `semi: false` - no semicolons at line ends
  - `singleQuote: true` - single quotes for strings
  - `tabWidth: 2` - 2-space indentation
  - `trailingComma: "es5"` - trailing commas where valid in ES5
  - `useTabs: false` - spaces, not tabs

**Linting:**
- ESLint with Next.js recommended rules (from `.eslintrc.json`):
  - Extends: `next/core-web-vitals`, `eslint:recommended`, `prettier`
  - `no-console` warning with allow list: `["warn", "error"]` - only console.warn/error allowed
  - `no-unused-vars` error with underscore pattern: arguments prefixed with `_` are ignored
  - `no-debugger` error - debugger statements forbidden
  - `prefer-const` error - use const instead of let when possible
  - React rules disabled: `react/jsx-uses-react`, `react/react-in-jsx-scope`, `react/prop-types`, `react/display-name`
  - Environment: browser, node, es6

**Import Order:**
1. Next.js imports: `import Head from 'next/head'`, `import Router from 'next/router'`, `import dynamic from 'next/dynamic'`
2. Third-party library imports: `import React`, `import { styled }`, Radix UI, framer-motion, kbar
3. Local component imports: relative paths like `import Box from './Box'`, `import Navbar from '../components/Navbar'`
4. Style imports: CSS imports like `import '../public/static/css/prism.css'`
5. Icon imports: Remix Icon fonts

**Path Aliases:**
- No aliases configured - relative paths used throughout: `../components/`, `../../lib/`

## Error Handling

**Patterns:**
- Try-catch blocks for async operations (email API, promise handling): `try { } catch (e) { }`
- Error logging with `console.error()`: `console.error('API error:', e.message)`
- Specific error type checking: `if (e.statusCode === 429)` for rate limit detection
- Client-side validation before API calls to reduce errors
- Global error handlers in `_app.js`:
  - Error boundary class component catches render errors
  - `window.addEventListener('unhandledrejection')` for promise rejections
  - `window.addEventListener('error')` for global errors
  - Router error handler: `Router.events.on('routeChangeError')`
- API response status checking: `if (response.ok)` before processing success
- Silent fallback handling for non-critical features: clipboard copy tries multiple APIs and shows toast regardless
- Security header validation in middleware: `setSecurityHeaders(res)` sets X-Content-Type-Options, X-Frame-Options, etc.

## Logging

**Framework:** Native console object

**Patterns:**
- `console.error()` for errors: `console.error('App Error:', error, errorInfo)`
- `console.warn()` for warnings allowed by linter
- Informational logs use `console.log()` with `// eslint-disable-line no-console` comment
- Log context included: `console.error('Failed to copy to clipboard:', err)`
- Async operations log completion: `console.log('Email sent successfully')`
- Error details logged: message + additional context
- SSR-safe logging: `if (typeof window !== 'undefined')` check before window logs

## Comments

**When to Comment:**
- Complex logic that isn't self-explanatory: `// Honeypot field - invisible to humans, catches bots`
- Workarounds and special cases: `// Check if it's a rate limit error`
- Lazy loading reasoning: `// Lazy load WebVitals for performance monitoring`
- Browser compatibility notes: `// Fallback for older browsers`
- Disabled code with explanation: `// import talksIcon from '../public/static/icons/talks.json'`
- Inline implementation notes: `// Ensure we're in a browser environment`

**JSDoc/TSDoc:**
- Not used - codebase is JavaScript without JSDoc conventions
- Function documentation done inline with comments above implementation

## Function Design

**Size:** 
- Smaller functions preferred: most components 30-150 lines
- Larger components (CommandBar 420 lines, Navbar 200 lines) break concerns into smaller helper functions
- Middleware functions extracted into `lib/api-middleware.js` for reuse

**Parameters:**
- Destructuring used for component props: `function Toast({ title, description, isSuccess, showToast, setShowToast, children })`
- API handlers destructure request: `const { name, email, message } = validation.sanitizedData`
- Optional parameters use default values: `fields = []` in `getPostBySlug(slug, fields = [])`
- Event handlers pass full event object when needed: `const honeypot = e.target.website.value`

**Return Values:**
- Objects with consistent shapes for validation: `{ isValid, errors, sanitizedData }`
- Promise-based async functions: `export async function convertMarkdownToHtml(markdown)`
- Conditional returns for early exit on errors: `if (errors.length > 0) return res.status(400).json(...)`
- React components return JSX elements
- Utility functions return simple values or objects: `return fs.readdirSync(postsDirectory)`

## Module Design

**Exports:**
- Named exports for utilities: `export function getPostSlugs()`, `export const emailRateLimit = rateLimit(...)`
- Default exports for React components: `export default function Contact(props)`
- Mixed exports when appropriate: library files export both named (functions) and default doesn't apply
- Barrel files not used - imports are direct

**Barrel Files:**
- Not used in this codebase - components imported directly: `import Navbar from '../components/Navbar'`

**Component Exports:**
- Layout pattern: components export with Layout assigned: `Contact.Layout = Base`
- Dynamic imports for client-only components: `const WebVitals = dynamic(() => import('../components/WebVitals'), { ssr: false })`
- Stitches styled components exported directly: `export const Box = styled('div')`

## Styled Components (Stitches)

**Pattern:**
- All styling uses Stitches CSS-in-JS in `stitches.config.js`
- Theme tokens centralized in config
- Global styles applied once via `applyGlobalStyles()` function
- Component-specific styles defined inline with `styled()` calls
- Media queries use named breakpoints: `'@bp2': { width: 800 }`
- Transitions use theme duration: `transition: 'background $duration ease-in-out'`
- Variant styling using css prop: `css={getResultStyle(active)}`
- Hover/focus states defined inline: `'&:hover': { background: '$hover', color: '$primary' }`

## Development Workflow

**Type Checking:**
- No TypeScript or type checking: `"type-check": "echo 'No TypeScript files to check'"`
- Plain JavaScript throughout

**Pre-commit:**
- `npm run lint:check` runs on precommit (configured in package.json)
- Auto-fixes available via `npm run lint`

---

*Convention analysis: 2026-04-03*
