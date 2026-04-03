# Phase 1: Project Scaffold and Design System - Context

**Gathered:** 2026-04-03
**Status:** Ready for planning

<domain>
## Phase Boundary

A deployable Astro project on a `redesign` feature branch with the complete design system — typography, color tokens, spacing scale, and layout primitives — ready for pages to consume. Clean slate approach: remove old Next.js files, start fresh in repo root.

</domain>

<decisions>
## Implementation Decisions

### Typography
- Heading font: Lora (serif, warm and balanced)
- Body font: Inter (sans-serif, crisp and modern)
- Base body size: 18px
- Self-hosted fonts (no Google Fonts runtime dependency)
- Two families, minimal weights to keep payload small

### Color & Identity
- Background: warm off-white (cream-ish, ~#fafaf7 range)
- Text: dark gray/near-black for body, black for headings
- Accent: deep blue / navy for links and interactive elements
- Signature element: small navy dot used as separator/bullet — minimal but recognizable

### Layout & Spacing
- Content width: ~720px (medium, ~70 chars per line)
- Spacing: balanced — comfortable, spacious but not sparse
- Line-height: 1.5-1.6 for body text
- Modular type scale (e.g., 1.25 ratio) for heading sizes
- Navigation: links aligned to the right side of the header

### Astro Setup
- Feature branch: `redesign`
- Clean slate: remove old Next.js files, build new Astro project in repo root
- Preserve `articles/` directory and `data/tools.js` — these carry over
- Deploy to Vercel preview URL from the redesign branch

### Claude's Discretion
- Exact hex values for colors (within warm off-white + deep blue direction)
- Specific font weights to include
- CSS custom property naming
- Exact spacing scale values
- Semantic HTML structure of the layout shell

</decisions>

<specifics>
## Specific Ideas

- Inspired by abhayvenkatesh.com aesthetic but unique to Neil — not a clone
- The navy dot is the signature element — use it consistently as a section separator or list marker
- Editorial, literary feel — the site should feel considered and calm
- "Typography and whitespace are the product" — research finding to carry through

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- `articles/` directory: Markdown files with gray-matter frontmatter (title, date, description, image) — carries over directly
- `data/tools.js`: Tool categories with names, descriptions, links — carries over directly
- `stitches.config.js`: Current design tokens (colors, fonts, breakpoints) — reference for what to replace, not reuse

### Established Patterns
- Current theme uses Biotif (body), Neuzeit Grotesk Bold (headings), Fira Code (code) — all being replaced
- Current breakpoints: 425px, 760px, 780px, 1024px — will need new breakpoints for Astro
- Dark background (#08070b) with light text — inverting to light scheme

### Integration Points
- Vercel deployment: currently auto-deploys from main — redesign branch gets preview URL
- `articles/*.md` frontmatter shape: title, description, date, image, canonical_url, lang, slug
- `data/tools.js` export structure: array of category objects with tool arrays

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-project-scaffold-and-design-system*
*Context gathered: 2026-04-03*
