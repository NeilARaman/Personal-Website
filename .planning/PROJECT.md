# neilraman.com Redesign

## What This Is

A complete redesign of Neil Raman's personal website — stripping it down from a feature-heavy Next.js site to a minimal, editorial-style static site. The new site has three things: a short intro (1-2 sentences), articles, and a tools page. Light color scheme, serif typography, clean and distinctive. Inspired by the minimalist aesthetic of abhayvenkatesh.com but uniquely Neil's.

## Core Value

A clean, fast personal site that communicates who Neil is in seconds and gives readers easy access to his writing and recommended tools — nothing more.

## Requirements

### Validated

- [x] Articles system with markdown content — existing `articles/` directory with frontmatter
- [x] Tools/resources data — existing `data/tools.js` with curated list
- [x] Vercel deployment pipeline — existing setup

### Active

- [ ] Minimal landing page with 1-2 sentence intro
- [ ] Minimal navigation (landing + /articles + /tools)
- [ ] Articles listing page
- [ ] Individual article pages with markdown rendering
- [ ] Tools listing page (same data as current)
- [ ] Light color scheme
- [ ] Serif/editorial typography — elegant, classic feel
- [ ] LinkedIn link as contact method
- [ ] Simpler tech stack — move away from Next.js/Stitches to something lighter
- [ ] Unique visual identity — inspired by minimalism but distinctly Neil's
- [ ] Mobile responsive
- [ ] Deployed and live on neilraman.com

### Out of Scope

- Contact form / Resend email integration — replaced by LinkedIn link
- Command bar (kbar) — unnecessary for 3-page site
- Lottie animated icons — too heavy for minimal aesthetic
- Framer Motion animations — simplicity over motion
- Projects page — not included in new scope
- Investing page — not included in new scope
- Talks page — already hidden, removing entirely
- Podcasts page — already hidden, removing entirely
- Uses page — already hidden, removing entirely
- Reminder page — already hidden, removing entirely
- Dark mode — light only
- CSS-in-JS (Stitches) — moving to plain CSS or minimal alternative

## Context

This is a brownfield redesign — the existing site has content (articles, tools data) that carries over, but the presentation layer, framework, and most components are being replaced. The `articles/` markdown files and `data/tools.js` are the primary assets to preserve.

Current site uses Next.js 14 (Pages Router), Stitches CSS-in-JS, Framer Motion, kbar, Lottie, and Resend. All of these are being removed or replaced in favor of a much simpler stack.

The site deploys to Vercel from the main branch.

## Constraints

- **Deployment**: Must continue deploying to Vercel on neilraman.com
- **Content**: Existing markdown articles and tools data must carry over
- **Stack**: Simpler than current — framework TBD during research (candidates: Astro, plain HTML/CSS, or minimal static generator)
- **Design**: Light scheme, serif typography, editorial feel — unique to Neil, not a clone

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Drop Next.js for simpler stack | 3-page site doesn't need SSR framework overhead | -- Pending |
| Light color scheme only | Minimalist sites benefit from clean white space | -- Pending |
| Serif/editorial typography | Distinctive, literary feel matches personal brand | -- Pending |
| LinkedIn as sole contact | Removes need for email API, keeps things simple | -- Pending |
| Keep articles + tools only | Everything else is clutter for the minimal vision | -- Pending |

---
*Last updated: 2026-04-03 after initialization*
