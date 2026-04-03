# Roadmap: neilraman.com Redesign

## Overview

This roadmap delivers a complete redesign of neilraman.com -- migrating from an over-engineered Next.js stack to a minimal Astro static site with editorial typography. Work proceeds on a feature branch to protect the live site. The journey moves from scaffold and design system, through the site shell and content pages, to SEO polish and production launch. Typography and whitespace are the primary design differentiators -- they get established first and carry through every phase.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Project Scaffold and Design System** - Astro project on feature branch with typography, color, and layout foundations
- [ ] **Phase 2: Landing Page and Site Shell** - Navigable site shell with landing page, responsive layout, and contact link
- [ ] **Phase 3: Content Pages** - Articles listing, article detail, and tools page with all existing content migrated
- [ ] **Phase 4: SEO and URL Preservation** - Open Graph tags, sitemap, and redirects for removed pages
- [ ] **Phase 5: Final Polish and Launch** - 404 page, favicon, print styles, performance verification, and production deploy

## Phase Details

### Phase 1: Project Scaffold and Design System
**Goal**: A deployable Astro project exists on a feature branch with the complete design system -- typography, color tokens, spacing scale, and layout primitives -- ready for pages to consume
**Depends on**: Nothing (first phase)
**Requirements**: TECH-01, TECH-02, FOUN-04, DESG-01, DESG-02, DESG-03, DESG-04
**Success Criteria** (what must be TRUE):
  1. Astro project builds and deploys to a Vercel preview URL from a feature branch (not main)
  2. A test page renders with the chosen serif typeface for headings and body, self-hosted fonts loading correctly
  3. CSS custom properties define the complete design token set (colors, type scale, spacing, line-height) with no CSS-in-JS runtime
  4. The test page uses semantic HTML elements (header, nav, main, footer) and the layout responds correctly on mobile viewports
  5. At least one distinctive visual identity element (accent color, rule style, or spacing rhythm) is visible and intentional
**Plans**: 3 plans

Plans:
- [ ] 01-01-PLAN.md -- Scaffold Astro 6 project on redesign branch, remove old Next.js files
- [ ] 01-02-PLAN.md -- Design tokens, self-hosted fonts, CSS reset, and global typography
- [ ] 01-03-PLAN.md -- Base layout with semantic HTML, navigation, navy dot, and design system test page

### Phase 2: Landing Page and Site Shell
**Goal**: Visitors land on a complete home page with Neil's intro and can navigate to all three sections of the site on any device
**Depends on**: Phase 1
**Requirements**: FOUN-01, FOUN-02, FOUN-03, FOUN-06
**Success Criteria** (what must be TRUE):
  1. Landing page displays Neil's name and a 1-2 sentence intro that communicates who he is
  2. Navigation with Home, Articles, and Tools links is visible on every page and works across the site
  3. LinkedIn link is visible in the header or footer as the sole contact method
  4. The entire site shell renders correctly on mobile (single-column layout, readable text, tappable links)
**Plans**: TBD

Plans:
- [ ] 02-01: TBD
- [ ] 02-02: TBD

### Phase 3: Content Pages
**Goal**: All existing content is accessible -- articles display with proper editorial typography and tools render with categories, descriptions, and links
**Depends on**: Phase 2
**Requirements**: CONT-01, CONT-02, CONT-03, CONT-04, TECH-04
**Success Criteria** (what must be TRUE):
  1. Articles listing page shows all posts in reverse chronological order with title and date
  2. Individual article pages render markdown with proper typography (50-75 character line length, correct heading hierarchy, code blocks)
  3. The existing article (introducing-foundry.md) renders identically in content to the current site -- zero content loss
  4. Existing article URLs work at their current root-level paths (e.g., /introducing-foundry)
  5. Tools page displays all categories from tools.js with names, descriptions, and working external links
**Plans**: TBD

Plans:
- [ ] 03-01: TBD
- [ ] 03-02: TBD
- [ ] 03-03: TBD

### Phase 4: SEO and URL Preservation
**Goal**: The site preserves its search engine equity -- every page has proper meta tags, a sitemap exists, and removed pages handle gracefully
**Depends on**: Phase 3
**Requirements**: POLS-01, POLS-02, TECH-05
**Success Criteria** (what must be TRUE):
  1. Every page has Open Graph meta tags (title, description, URL) that render correctly in social media link previews
  2. An XML sitemap is generated at build time and accessible at /sitemap.xml
  3. Removed pages (/about, /contact, /projects, /investing) return a 404 or redirect rather than a broken page
**Plans**: TBD

Plans:
- [ ] 04-01: TBD
- [ ] 04-02: TBD

### Phase 5: Final Polish and Launch
**Goal**: The site is production-ready and live on neilraman.com -- polished, fast, and complete
**Depends on**: Phase 4
**Requirements**: POLS-03, POLS-04, POLS-05, TECH-03, FOUN-05
**Success Criteria** (what must be TRUE):
  1. A custom 404 page matching the site design is shown for unknown URLs, with navigation back to the home page
  2. A favicon (monogram or initial) appears in the browser tab
  3. Articles print cleanly from the browser -- nav and footer hidden, readable font size
  4. Every page loads in under 1 second on a standard connection (verified via Lighthouse or equivalent)
  5. The redesigned site is live on neilraman.com, deployed from main branch on Vercel
**Plans**: TBD

Plans:
- [ ] 05-01: TBD
- [ ] 05-02: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 -> 2 -> 3 -> 4 -> 5

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Project Scaffold and Design System | 0/3 | Planned | - |
| 2. Landing Page and Site Shell | 0/2 | Not started | - |
| 3. Content Pages | 0/3 | Not started | - |
| 4. SEO and URL Preservation | 0/2 | Not started | - |
| 5. Final Polish and Launch | 0/2 | Not started | - |
