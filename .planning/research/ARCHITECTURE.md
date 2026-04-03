# Architecture Patterns

**Domain:** Minimalist personal website (3 pages, markdown content, static deployment)
**Researched:** 2026-04-03
**Confidence:** HIGH -- this is a well-trodden domain with clear best practices

## Recommended Architecture

A flat, build-time-only static site with no client-side JavaScript required. Three page routes, one content collection (articles), one data file (tools), and a shared layout shell.

```
[Markdown files] ---> [Build pipeline] ---> [Static HTML + CSS]
[Data files]     -/                    \--> [Deployed to Vercel CDN]
```

There is no runtime. No API routes. No hydration. No client-side state. Every page is a pre-rendered HTML file served from a CDN edge node. This is the defining architectural choice: **zero JavaScript in the browser** unless explicitly opted into later.

### Component Boundaries

| Component | Responsibility | Depends On | Communicates With |
|-----------|---------------|------------|-------------------|
| **Layout Shell** | Shared HTML structure: nav, footer, meta tags, font loading | CSS styles | Wraps all page templates |
| **Landing Page** | 1-2 sentence intro + LinkedIn link | Layout Shell | Nothing -- leaf node |
| **Articles List Page** | Reads all article frontmatter, renders sorted list | Layout Shell, Content Collection | Links to Article Detail pages |
| **Article Detail Pages** | Renders single markdown article as HTML | Layout Shell, Markdown Pipeline | Nothing -- leaf node |
| **Tools Page** | Renders categorized tools from data file | Layout Shell, Tools Data | Nothing -- leaf node |
| **Markdown Pipeline** | Parses frontmatter (gray-matter), converts MD to HTML (remark) | Content files in `articles/` | Feeds Article Detail and Articles List |
| **Tools Data** | Exports structured array of tool categories and items | `data/tools.js` file | Feeds Tools Page |
| **CSS Styles** | All visual presentation: typography, layout, color, responsiveness | Nothing | Consumed by Layout Shell and all pages |
| **Build Config** | Framework config, Vercel deployment settings | Nothing | Orchestrates entire build |

### Why These Boundaries

The current site has 6+ architectural layers (presentation, page, layout, data, utility, API). The new site needs exactly 3:

1. **Content layer** -- markdown files and tools data (already exists, carries over unchanged)
2. **Template layer** -- layout shell + page templates that consume content
3. **Style layer** -- CSS for typography, spacing, color

Everything else (API routes, error boundaries, command palette, animation system, CSS-in-JS runtime) is removed entirely. The architecture is deliberately boring.

## Data Flow

### Build-Time Only (No Runtime Data Flow)

```
1. Build starts (Vercel triggers on git push to main)
   |
2. Framework reads content sources:
   |-- articles/*.md --> gray-matter parses frontmatter
   |                 --> remark converts body to HTML
   |-- data/tools.js --> imported as JS module
   |
3. Framework applies templates:
   |-- Landing page: static HTML (no data needed beyond layout)
   |-- Articles list: sorted post metadata --> list template
   |-- Article detail: for each .md file --> article template
   |-- Tools page: tools data --> grouped list template
   |
4. Layout shell wraps each page:
   |-- Injects nav (3 links: home, articles, tools)
   |-- Injects footer (LinkedIn link)
   |-- Injects <head> (meta, fonts, CSS)
   |
5. Output: static HTML + CSS files
   |
6. Vercel serves from CDN edge
```

**Key insight:** Data flows in one direction only -- from files, through the build, to static output. There is no feedback loop, no state, no user input processing. This is the simplest possible web architecture.

### Content Schema

**Article frontmatter (existing, preserved):**
```yaml
---
title: "Article Title"
description: "Short description"
date: "2025-08-18"
image: "/static/images/photo.jpg"
---
```

**Tools data (existing, preserved):**
```javascript
// Grouped by category, each with name/description/url
{ title: "Category", stack: [{ name, description, url }] }
```

Neither schema needs modification. The new architecture consumes them as-is.

## Patterns to Follow

### Pattern 1: Single Layout Shell
**What:** One layout component wraps all pages. Not multiple layouts.
**When:** Always -- the site has 3 pages with identical chrome (nav + footer).
**Why:** The current site has Base layout and Blogpost layout. The new site should collapse these into one. Article pages get the same nav/footer; only the content area differs. A single layout with a content slot eliminates layout selection logic entirely.

```
<html>
  <head>...</head>
  <body>
    <nav>Neil Raman | Articles | Tools</nav>
    <main>{page content here}</main>
    <footer>LinkedIn link</footer>
  </body>
</html>
```

### Pattern 2: File-Based Routing (Convention Over Configuration)
**What:** Each page is a file. The URL structure mirrors the file structure.
**When:** Always -- this is how static site generators work.
**Why:** No routing configuration to maintain. Add a page = add a file.

```
pages/
  index.astro       --> /
  articles/
    index.astro     --> /articles
    [slug].astro    --> /articles/introducing-foundry
  tools.astro       --> /tools
```

### Pattern 3: Content Collections With Schema Validation
**What:** Declare content types (articles) with a schema, and the framework validates frontmatter at build time.
**When:** For any content-driven pages.
**Why:** Catches missing titles, bad dates, or malformed frontmatter during build rather than silently rendering broken pages. Astro has first-class support for this. If using another generator, gray-matter + manual validation achieves the same thing.

### Pattern 4: CSS-Only Styling (No JS Runtime)
**What:** Plain CSS (or a single CSS file) for all styling. No CSS-in-JS, no Tailwind, no build-time CSS framework.
**When:** For a site this small (3 pages, minimal components).
**Why:** Stitches is being removed. The replacement should be the simplest possible thing: a single CSS file with custom properties for the design tokens (colors, fonts, spacing). ~200 lines of CSS can style this entire site. Custom properties provide the theming/variable layer that Stitches was providing.

```css
:root {
  --font-serif: 'Georgia', 'Times New Roman', serif;
  --color-text: #1a1a1a;
  --color-bg: #fafafa;
  --color-link: #2a5db0;
  --spacing-base: 1rem;
  --max-width: 640px;
}
```

### Pattern 5: Minimal Navigation as Plain HTML
**What:** Navigation is a static list of 3 links, not a component with state.
**When:** When you have 3 or fewer pages.
**Why:** The current nav has hover states, mobile hamburger logic, and kbar integration. The new nav is 3 anchor tags in a `<nav>` element. No JavaScript needed for navigation on a 3-page site. Mobile responsiveness is handled by CSS (flex-wrap or a simple media query), not JS.

## Anti-Patterns to Avoid

### Anti-Pattern 1: Over-Engineering the Build
**What:** Adding TypeScript, linting, testing, CI pipelines, bundle analysis for a 3-page personal site.
**Why bad:** The current site has `analyze` scripts, SWC config, and complex Next.js config. This overhead has zero payoff for a static personal site with no team, no tests to run, and no bundle to optimize (there is no JS bundle).
**Instead:** Single config file for the static site generator. Vercel handles deployment. That is the entire build system.

### Anti-Pattern 2: Component Granularity
**What:** Breaking the UI into many small reusable components (PostContainer, PostMain, PostContent, Box, etc.)
**Why bad:** Reusable components pay off when you have many pages reusing them. With 3 pages, each with distinct content, there are at most 2 shared elements (nav and footer). Everything else is page-specific HTML.
**Instead:** Layout shell (nav + footer + head) and page templates. No component library.

### Anti-Pattern 3: Client-Side Anything
**What:** Adding client-side JavaScript for interactions (hover effects, mobile nav toggle, smooth scrolling, analytics).
**Why bad:** Every byte of JS is complexity that must be maintained, can break, and slows page load. The inspiration site (abhayvenkatesh.com) achieves its aesthetic with zero JS.
**Instead:** CSS hover effects. CSS-only responsive nav. Native browser smooth scrolling (`scroll-behavior: smooth`). If analytics are needed later, add a single script tag -- do not architect around it.

### Anti-Pattern 4: Multiple CSS Files Per Component
**What:** Co-locating styles with components (CSS modules, styled components, scoped styles).
**Why bad:** With ~200 lines of total CSS, splitting across files adds navigation overhead without organizational benefit.
**Instead:** Single `styles.css` (or `global.css`) with logical sections separated by comments. Custom properties at the top for design tokens.

## Suggested Build Order (Dependencies)

This is the critical output for roadmap phasing. Components have clear dependencies:

```
Phase 1: Foundation (no dependencies)
  CSS Styles (design tokens, typography, layout primitives)
  Layout Shell (nav + footer + head)
  Landing Page (just HTML in the layout shell)
  --> Deployable: site is live with landing page

Phase 2: Content (depends on Phase 1)
  Markdown Pipeline (gray-matter + remark, port from lib/blog.js)
  Articles List Page (depends on pipeline for frontmatter)
  Article Detail Pages (depends on pipeline for full rendering)
  --> Deployable: articles work

Phase 3: Data (depends on Phase 1)
  Tools Page (imports data/tools.js, renders in template)
  --> Deployable: full site

Phase 4: Polish (depends on Phases 1-3)
  SEO metadata (open graph, structured data)
  Favicon and social image
  Final typography and spacing refinement
  Old route redirects (if keeping /introducing-foundry URL vs /articles/introducing-foundry)
```

**Why this order:**
- Phase 1 has zero dependencies and produces a deployable result immediately
- Phase 2 is the most complex part (markdown pipeline) and benefits from having the layout already working
- Phase 3 is trivial (render a JS array) and can be done in parallel with Phase 2 if desired
- Phase 4 is polish that should not block launch

**Critical dependency:** The markdown pipeline is the only non-trivial piece of engineering. Everything else is template HTML + CSS. The pipeline from `lib/blog.js` (gray-matter + remark + remark-prism + remark-html) carries over almost directly -- the logic is framework-agnostic, only the integration point changes.

## Scalability Considerations

| Concern | At 1-10 articles | At 50 articles | At 500+ articles |
|---------|-------------------|----------------|-------------------|
| Build time | Instant (<5s) | Fast (<15s) | May need incremental builds |
| Navigation | No pagination needed | Consider pagination on list page | Pagination + search |
| File organization | Flat `articles/` dir | Still fine flat | Subdirectories by year |
| CSS size | ~200 lines | ~200 lines (content doesn't grow CSS) | Same |

**For this project:** The site has 1 article. Scalability is not a concern. The architecture supports growth to ~100 articles with zero changes. Beyond that is a problem for a different year.

## Framework Recommendation (Architecture Implication)

The architecture described above is **framework-agnostic** -- it works with Astro, Eleventy, Hugo, or even hand-written HTML. However, the build order and component boundaries map most naturally to **Astro** because:

1. **Content Collections** are a first-class feature (validates article frontmatter at build time)
2. **Layout components** use a `<slot />` pattern that matches the single-shell design
3. **Zero JS by default** -- no hydration, no client runtime unless explicitly added
4. **File-based routing** matches the URL structure exactly
5. **Markdown support** is built in (gray-matter + remark are Astro's default pipeline -- the exact same libraries the current site uses)

This means the markdown pipeline port (Phase 2) is essentially configuration rather than code if Astro is chosen. The `lib/blog.js` logic becomes declarative config.

## Sources

- Current codebase analysis (`lib/blog.js`, `data/tools.js`, `articles/`, `pages/`, `layouts/`)
- Current architecture document (`.planning/codebase/ARCHITECTURE.md`)
- Project requirements (`.planning/PROJECT.md`)
- Training data on static site architecture patterns (MEDIUM confidence -- well-established domain with stable best practices)
