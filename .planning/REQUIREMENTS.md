# Requirements: neilraman.com Redesign

**Defined:** 2026-04-03
**Core Value:** A clean, fast personal site that communicates who Neil is in seconds and gives readers easy access to his writing and recommended tools.

## v1 Requirements

Requirements for initial release. Each maps to roadmap phases.

### Foundation

- [ ] **FOUN-01**: Landing page displays Neil's name and 1-2 sentence intro
- [ ] **FOUN-02**: Minimal navigation with Home, Articles, and Tools links visible on all pages
- [ ] **FOUN-03**: Site is mobile responsive — single-column layout on small screens, readable on all devices
- [ ] **FOUN-04**: All pages use semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`)
- [ ] **FOUN-05**: Every page loads in under 1 second on a standard connection
- [ ] **FOUN-06**: LinkedIn link visible in header or footer as sole contact method

### Content

- [ ] **CONT-01**: Articles listing page shows all posts in reverse chronological order with title and date
- [ ] **CONT-02**: Individual article pages render markdown with proper typography (readable line length 50-75 chars)
- [ ] **CONT-03**: Existing markdown articles from `articles/` directory carry over with zero content changes
- [ ] **CONT-04**: Tools page renders existing `data/tools.js` categories with names, descriptions, and links

### Design

- [ ] **DESG-01**: Light color scheme with off-white background
- [ ] **DESG-02**: Serif typography — display serif for headings, text serif for body, self-hosted fonts
- [ ] **DESG-03**: Generous whitespace — modular type scale, 1.5-1.6 line-height, breathing room between elements
- [ ] **DESG-04**: At least one subtle visual identity element unique to Neil (accent color, rule style, or layout cadence)

### Technical

- [ ] **TECH-01**: Built with Astro (or equivalent simple static generator) — no React, no client-side JS framework
- [ ] **TECH-02**: Plain CSS with scoped styles — no CSS-in-JS runtime
- [ ] **TECH-03**: Deploys to Vercel on neilraman.com from main branch
- [ ] **TECH-04**: Existing article URLs preserved (root-level slugs like `/introducing-foundry`)
- [ ] **TECH-05**: Removed pages (`/about`, `/contact`, `/projects`, `/investing`) redirect or 404 gracefully

### Polish

- [ ] **POLS-01**: Open Graph meta tags on every page (title, description, URL)
- [ ] **POLS-02**: XML sitemap generated at build time
- [ ] **POLS-03**: Custom 404 page matching site design with navigation home
- [ ] **POLS-04**: Favicon (monogram or initial, generated from SVG)
- [ ] **POLS-05**: Print stylesheet — articles print cleanly (hide nav/footer, readable font size)

## v2 Requirements

Deferred to future release. Tracked but not in current roadmap.

### Content Enhancements

- **CONT-05**: RSS feed for articles (XML, generated at build time)
- **CONT-06**: Anchor links auto-generated on article `h2`/`h3` headings
- **CONT-07**: Reading time displayed on article pages

### Infrastructure

- **INFR-01**: JSON-LD structured data (Person schema)
- **INFR-02**: robots.txt
- **INFR-03**: Analytics (Plausible, single script tag, no cookies)

## Out of Scope

| Feature | Reason |
|---------|--------|
| Dark mode | Light-only is more distinctive and simpler — no toggle, no state, no flash-of-wrong-theme |
| Contact form | LinkedIn link replaces email API — zero maintenance |
| Command palette (kbar) | 3-page site doesn't need keyboard navigation |
| Animations / Framer Motion | Speed is the animation — instant content appearance |
| Newsletter signup | Use Substack separately if desired |
| Comments system | Discussion happens on LinkedIn/Twitter |
| Projects page | Not in scope — write articles about projects instead |
| Investing page | Not in scope |
| Tags / categories | Premature with <10 articles — revisit at 30+ |
| Search / filtering | Chronological list is scannable at current scale |
| Image gallery / hero images | Editorial minimalism leads with text |

## Traceability

| Requirement | Phase | Status |
|-------------|-------|--------|
| FOUN-01 | — | Pending |
| FOUN-02 | — | Pending |
| FOUN-03 | — | Pending |
| FOUN-04 | — | Pending |
| FOUN-05 | — | Pending |
| FOUN-06 | — | Pending |
| CONT-01 | — | Pending |
| CONT-02 | — | Pending |
| CONT-03 | — | Pending |
| CONT-04 | — | Pending |
| DESG-01 | — | Pending |
| DESG-02 | — | Pending |
| DESG-03 | — | Pending |
| DESG-04 | — | Pending |
| TECH-01 | — | Pending |
| TECH-02 | — | Pending |
| TECH-03 | — | Pending |
| TECH-04 | — | Pending |
| TECH-05 | — | Pending |
| POLS-01 | — | Pending |
| POLS-02 | — | Pending |
| POLS-03 | — | Pending |
| POLS-04 | — | Pending |
| POLS-05 | — | Pending |

**Coverage:**
- v1 requirements: 24 total
- Mapped to phases: 0
- Unmapped: 24

---
*Requirements defined: 2026-04-03*
*Last updated: 2026-04-03 after initial definition*
