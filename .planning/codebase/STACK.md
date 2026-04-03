# Technology Stack

**Analysis Date:** 2026-04-03

## Languages

**Primary:**
- JavaScript (ES6+) - Pages Router components, API routes, utility functions
- JSX - React component development for UI
- CSS-in-JS - Stitches for component styling

**Secondary:**
- Markdown - Article/blog content in `/articles` directory
- Shell/Bash - Build and deployment scripts

## Runtime

**Environment:**
- Node.js (version managed via `.nvmrc`, minimum 18.x implied by Next.js 14)

**Package Manager:**
- npm (primary, also supports bun as evidenced by `bun.lock`)
- Lockfile: `package-lock.json` and `bun.lock` present

## Frameworks

**Core:**
- Next.js 14.2.35 - Server-side rendering, Pages Router, API routes, middleware
- React 18.2.0 - Component framework and state management
- React DOM 18.2.0 - DOM rendering

**UI & Styling:**
- @stitches/react 1.2.6 - CSS-in-JS library with SSR support, theme system at `stitches.config.js`
- Framer Motion 10.18.0 - Animation library for interactive transitions
- Remixicon 2.5.0 - Icon library for consistent iconography
- @radix-ui/react-toast 1.2.14 - Accessible toast notification component

**Content & SEO:**
- next-seo 5.1.0 - SEO metadata and structured data management
- gray-matter 4.0.3 - Markdown frontmatter parsing for blog articles
- remark 14.0.1 - Markdown processor
- remark-html 15.0.0 - Convert markdown to HTML
- remark-prism 1.3.6 - Syntax highlighting for code blocks
- reading-time 1.5.0 - Calculate article reading time

**Email:**
- resend 4.6.0 - Email delivery service for contact form integration

**Animation:**
- lottie-react 2.4.1 - React wrapper for Lottie animations
- lottie-web 5.13.0 - Lottie animation rendering engine

**Utilities:**
- date-fns 3.6.0 - Date/time manipulation and formatting
- validator 13.15.22 - Email and input validation
- dompurify 3.2.6 - HTML sanitization for security
- isomorphic-dompurify 2.26.0 - Isomorphic version for SSR compatibility
- rehype-sanitize 6.0.0 - HTML sanitization for markdown output
- kbar 0.1.0-beta.45 - Command palette/shortcuts interface
- web-vitals 5.0.3 - Core Web Vitals monitoring
- @react-email/html 0.0.11 - Email template HTML component for Resend
- @types/dompurify 3.0.5 - TypeScript types for DOMPurify
- express-rate-limit 8.0.1 - Rate limiting middleware for API endpoints

**Testing & Quality:**
- eslint 8.9.0 - JavaScript linting
- eslint-config-next 13.5.6 - Next.js ESLint configuration
- eslint-config-prettier 8.3.0 - Prettier integration to avoid conflicts

**Build & Development:**
- @next/bundle-analyzer 14.2.30 - Bundle size analysis tool
- @swc/cli 0.7.7 - SWC command-line compiler
- @swc/core 1.12.1 - SWC Rust-based compiler for faster builds
- cross-env 7.0.3 - Cross-platform environment variable management
- next-sitemap 4.2.3 - Automatic sitemap and robots.txt generation

## Configuration

**Environment:**
- `.env` file present (contains secrets - see INTEGRATIONS.md for details)
- Configuration via environment variables for Resend API key and destination email
- Site URL configurable via `SITE_URL` env var (defaults to `https://neilraman.com`)

**Build:**
- `next.config.js` - Core Next.js configuration with:
  - React Strict Mode enabled
  - SWC minification enabled
  - Image optimization (AVIF, WebP formats with 1-year cache TTL)
  - Security headers configuration
  - Webpack customization for SSR Stitches compatibility
  - Performance optimizations for package imports
- `next-sitemap.config.js` - Sitemap generation configuration
- `stitches.config.js` - Design tokens and theme configuration
- `.prettierrc.json` - Code formatting (2-space tabs, single quotes, no semicolons)
- `.eslintrc.json` - Linting rules extending Next.js recommended config
- `tsconfig.json` - TypeScript configuration (if present)
- `vercel.json` - Vercel deployment headers and rewrites configuration

## Platform Requirements

**Development:**
- Node.js 18.x or later (as required by Next.js 14)
- npm or bun package manager
- POSIX-compatible shell for development scripts

**Production:**
- Vercel (primary deployment platform)
- HTTPS enabled (enforced via Strict-Transport-Security header)
- Environment variables: `RESEND_API_KEY`, `RESEND_DESTINATION_EMAIL`, `SITE_URL` (optional)

**Build Process:**
- `npm run build` - Compiles Next.js application, generates sitemap via post-build hook
- `npm run build:prod` - Production build with NODE_ENV=production
- `npm run build:fast` - Alias for build (for optimization during CI)
- `npm run dev` - Development server on `localhost:3000`
- `npm run start` - Production server
- `npm run lint` - ESLint with auto-fix
- `npm run deploy` - Deploy to Vercel production
- `npm run analyze` - Bundle analysis with ANALYZE=true flag

---

*Stack analysis: 2026-04-03*
