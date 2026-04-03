# Architecture

**Analysis Date:** 2026-04-03

## Pattern Overview

**Overall:** Multi-page static site with hybrid server-side rendering and client-side interactivity

**Key Characteristics:**
- Next.js 14 Pages Router (not App Router) for file-based routing
- Static generation (SSG) with `getStaticProps` and `getStaticPaths` for content pages
- Markdown-driven content via file system (articles directory)
- Stitches CSS-in-JS for type-safe styling with SSR support
- Framer Motion for animation and interactive elements
- Command palette (kbar) for navigation shortcuts
- Email API endpoint for contact form submissions
- Error boundaries and comprehensive error handling

## Layers

**Presentation (UI Components):**
- Purpose: Display-only components and interactive UI elements
- Location: `components/`
- Contains: Styled components, layout primitives (Navbar, Footer, Box, etc.), feature components (CommandBar, Toast)
- Depends on: Stitches config, Framer Motion, Radix UI
- Used by: Pages and Layouts

**Page Layer:**
- Purpose: Entry points for routes, data fetching, page metadata
- Location: `pages/`
- Contains: Route definitions using Pages Router convention (`index.js`, `[slug].js`, `articles.js`, etc.)
- Depends on: Layouts, components, lib utilities
- Used by: Next.js routing system

**Layout Layer:**
- Purpose: Composable page templates that provide structure and navigation
- Location: `layouts/`
- Contains: Base layout (for standard pages) and Blogpost layout (for article pages)
- Depends on: Components (Navbar, Footer), Stitches config
- Used by: Pages through `Component.Layout` property pattern

**Data Layer:**
- Purpose: Content and configuration data
- Location: `data/` (for static JSON/JS data), `articles/` (for Markdown content)
- Contains: Projects, tools, podcasts, investments, talks, uses configuration files and Markdown articles
- Depends on: Nothing
- Used by: Pages during static generation

**Utility Layer:**
- Purpose: Helper functions and middleware for common operations
- Location: `lib/`
- Contains: Blog utilities (markdown parsing), API middleware (rate limiting, validation), sanitization, JSON-LD generation
- Depends on: External libraries (gray-matter, remark, validator, dompurify)
- Used by: Pages and API routes

**API Layer:**
- Purpose: Server-side endpoint for form submissions
- Location: `pages/api/`
- Contains: Email endpoint with rate limiting and input validation
- Depends on: Resend (email service), API middleware utilities
- Used by: Frontend contact form

## Data Flow

**Static Page Generation:**

1. Build time: `getStaticProps` in pages fetches data from `data/` files and processes it
2. Build time: `getAllPosts()` reads Markdown files from `articles/`
3. Build time: Markdown converted to HTML via remark with Prism syntax highlighting
4. Build time: Stitches SSR extracts CSS in `_document.js` using `getCssText()`
5. Runtime: Pre-rendered HTML served from Vercel static hosting
6. Runtime: Client-side hydration activates interactive components (Navbar hover states, CommandBar, Framer Motion animations)

**Dynamic Article Rendering:**

1. Build time: `[slug].js` generates static paths for all articles using `getStaticPaths()`
2. Build time: Each article's Markdown front matter (title, date, image, description) extracted
3. Build time: Content converted to sanitized HTML (DOMPurify prevents XSS)
4. Runtime: Article layout applies header image styling, blog date formatting, canonical URL handling

**Form Submission:**

1. Frontend: Contact form validates fields locally (name, email, message length checks)
2. Frontend: Honeypot field (hidden from humans) catches bot submissions
3. Frontend: POST to `/api/email` with sanitized form data
4. Backend: Express rate limiter checks IP (5 requests per hour)
5. Backend: `validateEmailInput()` re-validates and sanitizes data server-side
6. Backend: Resend service sends email with React component template
7. Frontend: Toast notification displays success/error state

**State Management:**

- Local component state via `useState` for form validation, UI state (navbar hover, toast visibility)
- No global state management (Context API, Redux) needed for this site
- Layout-level state passed through props from page to Layout to components

## Key Abstractions

**Styled Components (Stitches):**
- Purpose: Type-safe, zero-runtime CSS-in-JS
- Examples: `PostMain`, `Header`, `NavLink`, `Input`, `Button` in various files
- Pattern: `styled('element', { css rules as objects })`
- Benefits: Autocomplete in IDE, dynamic styles via props, SSR extraction for zero FOUC

**Layout Component Pattern:**
- Purpose: Flexible layout composition without HOCs
- Examples: `Base` layout in `layouts/Base.js`, `Blogpost` layout in `layouts/Blogpost.js`
- Pattern: Page exports `Component.Layout = LayoutComponent`, consumed in `_app.js`
- Pattern: `_app.js` wraps page content: `<Layout><Component /></Layout>`
- Benefits: Each page can use different layout without prop drilling

**Post Container Primitives:**
- Purpose: Consistent responsive content spacing and typography
- Examples: `PostMain`, `PostContent`, `PostContainer` in `components/Post.js`
- Pattern: Styled components with breakpoint-responsive padding
- Benefits: Reusable across article pages and standard pages

**Error Handling:**
- Purpose: Graceful degradation for SSR and client errors
- Examples: ErrorBoundary in `_app.js`, try-catch in `[slug].js` returning `errorCode: 404`
- Pattern: Render fallback UI when error state is detected
- Benefits: Prevents white-screen-of-death, provides user feedback

**Markdown-to-HTML Pipeline:**
- Purpose: Transform article content with syntax highlighting and sanitization
- Examples: `blog.js` exposes `convertMarkdownToHtml()` and `getAllPosts()`
- Pattern: gray-matter (frontmatter parsing) → remark (processing) → remark-prism (syntax highlight) → remark-html (HTML output) → DOMPurify (sanitization)
- Benefits: Separates content from code, enables server-side processing, prevents XSS

**Command Palette Integration (kbar):**
- Purpose: Keyboard navigation and search
- Examples: `CommandBar` component wrapping content in `_app.js`
- Pattern: `useKBar()` hook provides `query.toggle()` method
- Benefits: Accessible navigation, familiar UX pattern (Cmd+K)

## Entry Points

**Home Page (`pages/index.js`):**
- Location: `pages/index.js`
- Triggers: Navigate to `/` or domain root
- Responsibilities: Hero landing page with intro text, uses static props (title, description, image)

**Article List (`pages/articles.js`):**
- Location: `pages/articles.js`
- Triggers: Navigate to `/articles`
- Responsibilities: Displays featured articles (hardcoded list) and all articles (from filesystem), uses dynamic import for LayoutGroup

**Article Detail (`pages/[slug].js`):**
- Location: `pages/[slug].js`
- Triggers: Navigate to `/{article-slug}/`
- Responsibilities: Renders individual article with metadata, handles 404 fallback, applies Blogpost layout

**Static Pages (`pages/about.js`, `pages/projects.js`, etc.):**
- Location: `pages/{about,projects,investing,tools,talks,podcasts,uses,contact,reminder}.js`
- Triggers: Navigate to corresponding route
- Responsibilities: Display curated content from `data/` files, use Base layout

**Contact Form API (`pages/api/email.js`):**
- Location: `pages/api/email.js`
- Triggers: POST request from `/contact` form submission
- Responsibilities: Validate input, check rate limit, send email via Resend service

**Application Root (`pages/_app.js`):**
- Location: `pages/_app.js`
- Triggers: Every page load (by Next.js)
- Responsibilities: Global error boundary, command palette wrapper, dynamic WebVitals, error event listeners

**Document Root (`pages/_document.js`):**
- Location: `pages/_document.js`
- Triggers: Every page load (by Next.js)
- Responsibilities: Extract Stitches CSS for SSR, inject global Head tags, preload fonts

## Error Handling

**Strategy:** Multi-layer approach combining error boundaries, middleware validation, and graceful fallbacks

**Patterns:**

- **Component-level errors:** ErrorBoundary in `_app.js` catches React component crashes, displays fallback UI
- **Route not found:** `[slug].js` returns `{ props: { errorCode: 404 } }` and displays `ErrorMessage` component
- **API errors:** `pages/api/email.js` catches middleware errors (rate limit, validation) and network errors, returns appropriate HTTP status codes
- **Input validation:** Client-side validation in Contact form, server-side re-validation in API endpoint
- **Markdown parsing failures:** try-catch in `[slug].js` during `getStaticProps`, returns 404 on parse failure
- **SSR CSS extraction:** try-catch fallback in `_document.js` for Stitches SSR issues (suppressHydrationWarning prevents warnings)
- **Global unhandled errors:** Event listeners in `_app.js` catch `unhandledrejection` and `error` events, logs to console

## Cross-Cutting Concerns

**Logging:** 
- Console logging in API endpoint for debugging (email sent, errors)
- Console logging in error handlers and error boundaries
- In production, logs visible via Vercel dashboard

**Validation:**
- Client-side: HTML5 attributes (required, maxLength, minLength, type="email") + custom validation functions
- Server-side: `validateEmailInput()` middleware with regex patterns, spam detection, XSS escaping
- Markdown meta validation: `getPostBySlug()` ensures fields exist before returning

**Authentication:**
- No authentication system (public portfolio)
- Rate limiting on email API as anti-abuse measure
- Honeypot field catches simple bots

**Security:**
- Next.js config applies security headers (X-Frame-Options, X-Content-Type-Options, Strict-Transport-Security)
- DOMPurify sanitization on user-submitted content (contact form) and generated HTML (markdown)
- Validator library escapes and normalizes user input
- CSP and permission policy headers in `next.config.js`

**Styling:**
- Stitches theme defines colors, fonts, spacing, media breakpoints
- Responsive design via `@bp1`, `@bp2`, `@bp3`, `@bp4` media queries
- Global styles applied in `stitches.config.js` with font-face declarations
- CSS extraction during SSR to prevent FOUC

**SEO:**
- `next-seo` library (next-seo package) for ArticleJsonLd structured data
- Manual Head tags in pages for open graph, Twitter card metadata
- Sitemap generation via `next-sitemap` package (post-build)
- Canonical URLs in article frontmatter for cross-posting

**Performance:**
- Static site generation (SSG) reduces server load
- Image optimization via Next.js Image (formats: avif, webp; 1-year cache TTL)
- Lazy loading components (WebVitals) with `dynamic` import
- Bundle analysis scripts available
- SWC minification enabled
