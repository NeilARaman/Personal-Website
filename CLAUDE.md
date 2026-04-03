# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — start dev server at localhost:3000
- `npm run build` — production build (runs `next build`, then `next-sitemap` via postbuild)
- `npm run lint` — ESLint with auto-fix (`next lint --fix`)
- `npm run lint:check` — ESLint without fixing
- `npm run deploy` — deploy to Vercel (`vercel --prod`)
- `npm run analyze` — bundle analysis with `ANALYZE=true`

No test suite exists (`npm test` is a no-op).

## Architecture

Next.js 14 (Pages Router) personal website deployed on Vercel. JavaScript only — no TypeScript.

### Styling: Stitches CSS-in-JS

All styling uses `@stitches/react` configured in `stitches.config.js`. Import `styled`, `css`, `keyframes`, etc. from that file — never from `@stitches/react` directly. The config defines the theme (colors, fonts, spacing, breakpoints) and global styles. Stitches is externalized on the server in `next.config.js` webpack config for SSR compatibility.

Breakpoints: `bp1` (425px+), `bp2` (760px+), `bp3` (max 780px), `bp4` (max 1024px).

### Page Layout System

Pages assign a layout via `PageComponent.Layout = LayoutComponent` (see `_app.js`). Two layouts exist:
- `layouts/Base.js` — standard pages with gradient title, navbar, footer
- `layouts/Blogpost.js` — article pages with reading time, blog date, back link

### Blog / Articles

Markdown files in `articles/` are processed by `lib/blog.js` (gray-matter + remark + remark-prism). The dynamic route `pages/[slug].js` renders them with `getStaticProps`/`getStaticPaths` (ISR with 60s revalidate, blocking fallback). HTML output is sanitized via `lib/sanitize.js` (isomorphic-dompurify).

### Data Files

Static content lives in `data/*.js` — projects, investments, talks, podcasts, tools, uses, about. Each exports arrays/objects consumed by their corresponding page.

### Route Blocking

`middleware.js` rewrites certain routes (`/uses`, `/podcasts`, `/reminder`, `/talks`, `/working-remotely`) to 404. These pages exist in code but are intentionally hidden.

### API

Single API route: `pages/api/email.js` — contact form using Resend. Rate-limited and input-validated via `lib/api-middleware.js`.

### Key Libraries

- **kbar** — command palette (Cmd+K), configured in `components/CommandBar.js`
- **framer-motion** — page/component animations
- **lottie-react / lottie-web** — animated icons (JSON files in `public/static/icons/`)
- **next-seo** — structured data (JSON-LD)
- **remixicon** — icon font

### Environment Variables

- `RESEND_API_KEY` — Resend email service key
- `RESEND_DESTINATION_EMAIL` — recipient for contact form
