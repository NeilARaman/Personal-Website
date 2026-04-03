# Project Research Summary

**Project:** neilraman.com Redesign
**Domain:** Minimalist personal website (editorial/portfolio, static deployment)
**Researched:** 2026-04-03
**Confidence:** HIGH

## Executive Summary

This is a framework migration from an over-engineered Next.js + React + Stitches stack (~30+ dependencies) to a purpose-built static site generator (Astro 6.x, ~5 dependencies) for a 3-page personal website. The domain is thoroughly understood: personal editorial sites are one of the most well-documented patterns in web development. The recommended approach is to use Astro with plain CSS, content collections for markdown articles, and zero client-side JavaScript. Every page is pre-rendered HTML served from Vercel's CDN. The existing content (1 markdown article, ~1300 lines of tools data, static images) carries over with minimal or no modification.

The primary risk is not technical complexity -- it is breaking the existing production site during migration. The current site has indexed URLs, shared article links, and SEO equity that must be preserved. Working on a feature branch, documenting all existing URLs, and setting up redirects for removed pages (/contact, /about, /projects) are non-negotiable first steps. The secondary risk is over-minimizing into blandness: typography and one deliberate design element are what make a minimal site feel intentional rather than generic. Font selection and spacing decisions should be made before any code is written.

The entire redesign should be measurable in days, not weeks. The dependency count drops from 30+ to 5. The CSS drops to ~200 lines. There is no JavaScript in the browser. The architecture has three layers (content, templates, styles) and nothing else. Scope creep is the enemy -- the PROJECT.md "Out of Scope" list must be enforced strictly.

## Key Findings

### Recommended Stack

Astro 6.x replaces the entire Next.js + React + Stitches stack. It ships zero JavaScript by default, has built-in markdown processing (the same gray-matter + remark pipeline the current site already uses), content collections with Zod schema validation, scoped CSS, and file-based routing. Deployment to Vercel requires zero configuration for a static site -- no adapter needed.

**Core technologies:**
- **Astro 6.x**: Static site framework -- purpose-built for content sites, zero JS by default, replaces Next.js entirely
- **Astro Content Collections**: Article management -- type-safe frontmatter schemas with Zod, replaces manual gray-matter pipeline
- **Plain CSS with Astro scoped styles**: All styling -- CSS custom properties for design tokens, replaces Stitches CSS-in-JS
- **Self-hosted serif font**: Editorial typography -- the single strongest visual differentiator (Lora, Playfair Display, or Source Serif 4)
- **@astrojs/sitemap + @astrojs/rss**: Build-time generation -- replaces next-sitemap, adds RSS for article subscribers

**What gets removed:** React, react-dom, Stitches, Framer Motion, kbar, Lottie, Resend, gray-matter, remark (standalone), next-seo, next-sitemap, DOMPurify, express-rate-limit, and 15+ other packages. Total production dependencies drop to 2.

### Expected Features

**Must have (table stakes):**
- Landing page with identity statement (name, tagline, LinkedIn link)
- Minimal 3-item navigation (Home, Articles, Tools) -- no hamburger menu needed
- Articles listing page (chronological, scales from 1 to 50+)
- Individual article pages with proper editorial typography (50-75 char line length)
- Tools/resources page rendering existing categorized data
- Mobile responsive layout (single-column, inherently simple for minimal sites)
- Meta tags / Open Graph for social sharing
- Semantic HTML (header, nav, main, article, footer)
- RSS feed
- Fast page loads (<1s -- achieved by default with static HTML)

**Should have (differentiators):**
- Distinctive serif typography (the primary design differentiator)
- Generous whitespace and typographic scale (18-20px body, 1.5-1.6 line-height)
- One subtle visual identity element (accent color, rule style, or spacing rhythm)
- Clean URL structure preserving existing patterns
- Custom 404 page, favicon, print stylesheet
- JSON-LD structured data (Person schema, already exists in current site)

**Defer (v2+):**
- Analytics (add Plausible post-launch if desired -- single script tag)
- Search/filter (only if article count exceeds 30)
- Tags/categories (only if readers request it)
- Dark mode, newsletter, comments, animations, image gallery

### Architecture Approach

A flat, build-time-only static site with exactly three layers: content (markdown files + tools data), templates (one layout shell + page templates), and styles (single CSS file with custom properties). No runtime, no API routes, no hydration, no client-side state. Data flows in one direction only: from files, through the build, to static HTML output on Vercel CDN. The current site's 6+ architectural layers collapse to 3.

**Major components:**
1. **Layout Shell** -- single shared component: nav, footer, head (meta tags, fonts, CSS). All pages use this one layout.
2. **Content Collection (Articles)** -- markdown files with Zod-validated frontmatter. Astro's built-in pipeline replaces the manual gray-matter + remark chain.
3. **CSS Styles** -- one global stylesheet (~200 lines) with custom properties for design tokens. Typography, layout, color, responsiveness. No component-level CSS files needed at this scale.
4. **Page Templates** -- 4 files: index (landing), articles/index (listing), [slug] (article detail), tools (tools listing). File-based routing, no configuration.

### Critical Pitfalls

1. **Breaking existing URLs without redirects** -- The current site has indexed URLs at /about, /contact, /projects, /investing, /talks, etc. that are being removed, plus article slugs at root level (/<slug>). Document all URLs before migration, set up redirects in vercel.json for removed pages, and preserve root-level article routing.
2. **Article slug routing mismatch** -- Current articles live at /<slug> (root level). Astro's natural pattern is /articles/<slug>. Must explicitly use src/pages/[slug].astro or add redirects. This is easy to get wrong silently.
3. **Deploying over production prematurely** -- Vercel auto-deploys main. Work on a feature branch for the entire migration. Merge to main only when fully tested.
4. **Losing markdown rendering fidelity** -- Different pipeline (Shiki vs Prism for syntax highlighting), different HTML passthrough rules. Render the existing article through the new pipeline early and compare visually.
5. **Over-minimizing into blandness** -- Define 2-3 distinctive design elements (font, accent, spacing) before writing any code. Typography is the design.

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Project Setup and Foundation

**Rationale:** Zero dependencies. Establishes the branch strategy that prevents production breakage (Pitfall 4) and the design system that prevents blandness (Pitfall 6). Everything else depends on this.
**Delivers:** Astro project scaffold on a feature branch, global CSS with design tokens and typography, layout shell (nav + footer + head), deployable landing page on Vercel preview.
**Addresses:** Landing page, navigation, mobile responsive layout, semantic HTML, font loading
**Avoids:** Deploying over production (P4), over-minimizing (P6), font loading issues (P11), tooling regression (P10)

### Phase 2: Article System

**Rationale:** The most complex piece of the migration -- the markdown pipeline. Benefits from having the layout and typography already working. Must use real content (introducing-foundry.md), not placeholders, to catch rendering fidelity issues early.
**Delivers:** Content collection with Zod schema, article listing page, individual article pages with proper typography and syntax highlighting.
**Uses:** Astro Content Collections, built-in markdown processing (Shiki for syntax highlighting)
**Implements:** Content layer, markdown pipeline, dynamic routing
**Avoids:** Markdown fidelity loss (P3), slug routing mismatch (P2), static asset breakage (P5), blog sort bug (carry-forward fix)

### Phase 3: Tools Page and Data Migration

**Rationale:** Trivially simple once the layout exists -- just render an array of objects. Can run in parallel with Phase 2 if desired. Convert tools.js from CommonJS to ESM.
**Delivers:** Tools/resources page with categorized listings.
**Avoids:** tools.js format incompatibility (P8)

### Phase 4: SEO, Polish, and Launch

**Rationale:** Polish layer that must not block implementation but must be complete before production cutover. This is where URL preservation and redirects get tested.
**Delivers:** Open Graph tags, JSON-LD structured data, sitemap.xml, robots.txt, RSS feed, 404 page, favicon, print stylesheet, vercel.json redirects for removed pages.
**Addresses:** Meta tags, RSS feed, sitemap, 404 page, favicon, structured data, print stylesheet
**Avoids:** SEO metadata loss (P7), broken URLs (P1), missing 404 (P9)

### Phase Ordering Rationale

- Phase 1 must come first because every page depends on the layout shell and typography system. The branch strategy must be established before any code changes.
- Phase 2 before Phase 3 because the article system is the only non-trivial engineering work. Tools page is a simple data render that can be done quickly after or alongside articles.
- Phase 4 is last because SEO/polish must not block core implementation, but URL redirects and meta tags must be verified before the main branch merge.
- The entire sequence has a "flag day" cutover at the end: merge the complete redesign to main in one PR.

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 2 (Article System):** Astro content collection configuration specifics, Shiki theme selection, and root-level dynamic routing ([slug].astro at pages root) need verification during implementation. The slug routing pattern is non-standard for Astro.

Phases with standard patterns (skip research-phase):
- **Phase 1 (Foundation):** Well-documented Astro scaffolding, standard CSS custom properties, standard layout patterns.
- **Phase 3 (Tools Page):** Trivial data rendering, no research needed.
- **Phase 4 (SEO/Polish):** Standard @astrojs/sitemap and @astrojs/rss usage, well-documented meta tag patterns.

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Astro 6.x docs verified, all recommendations align with official documentation |
| Features | HIGH | Well-understood domain with clear conventions, feature list derived from codebase analysis |
| Architecture | HIGH | Static site architecture is the simplest and most well-established web pattern |
| Pitfalls | MEDIUM | Patterns from Next.js migration experience are well-established, but specific Astro 6.x edge cases (root-level dynamic routing) would benefit from hands-on verification |

**Overall confidence:** HIGH

### Gaps to Address

- **Root-level article routing in Astro:** Verify that placing [slug].astro at src/pages/ root works correctly alongside index.astro, articles/, and tools.astro without route conflicts. This is the one non-obvious Astro configuration.
- **Font selection:** The specific serif typeface is a design decision that cannot be resolved through research alone. Must be decided by visual evaluation during Phase 1.
- **Existing URL inventory:** The full list of URLs currently served needs to be scraped from the live site and sitemap before migration begins. Research identified the pattern but not the exhaustive list.
- **Syntax highlighting theme:** Shiki replaces Prism. The visual appearance of code blocks will change. Need to pick a Shiki theme that matches the editorial aesthetic.

## Sources

### Primary (HIGH confidence)
- Astro 6.x official documentation (docs.astro.build) -- content collections, markdown, styling, deployment, RSS
- Astro blog (astro.build/blog) -- version 6.1 release notes
- Current codebase analysis -- pages/, data/tools.js, articles/, lib/blog.js, layouts/, next-sitemap.config.js

### Secondary (MEDIUM confidence)
- Static site architecture patterns -- well-established domain best practices
- Next.js to Astro migration patterns -- community experience
- abhayvenkatesh.com reference site -- design direction for minimalist editorial aesthetic

---
*Research completed: 2026-04-03*
*Ready for roadmap: yes*
