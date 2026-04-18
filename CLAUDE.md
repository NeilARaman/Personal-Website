# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

Plain static HTML personal website for Neil Raman. A small Node build script generates pages from markdown articles and a JavaScript data file. No framework, no client-side bundler, no TypeScript. Only two runtime dependencies: `gray-matter` (markdown frontmatter) and `marked` (markdown → HTML).

The site is intentionally minimalist. Match that style when adding features: prefer vanilla JS, zero new dependencies, and small hand-written CSS over any framework.

## Commands

- `npm run build` — regenerate `/tools/index.html`, article pages, `sitemap.xml`, `robots.txt`, and `search-index.json`
- `npm run dev` — run `build`, then start the local dev server
- `npm run serve` — start the local dev server only (assumes you've already built)

No test suite and no linter are configured.

## Architecture

### Build pipeline (`build.js`)

`build.js` reads data and markdown, then writes HTML directly — no bundler, no templating engine. Flow:

1. Load `data/tools.js` via `new Function()` (safer than `eval`, avoids a runtime import).
2. Emit `/tools/index.html` — iterates categories → `<section id="{slug}">` with a 2-column `<ul>` of links. Each link has a `title` attr holding the tool's description (hover tooltip).
3. Emit `/{slug}/index.html` per article — `articles/*.md` processed by `gray-matter` + `marked`. A custom `marked` renderer forces external links to `target="_blank" rel="noopener"` and escapes link text to prevent XSS.
4. Emit `sitemap.xml` and `robots.txt`.
5. Emit `search-index.json` — feeds the command palette.

Hand-written pages (not generated): `index.html` (home), `articles/index.html` (article listing). If you add a new article, update `articles/index.html` manually — `build.js` does not regenerate the listing.

### HTML generation helpers

- `head({ title, description, path, type })` — returns full `<head>` with OG/Twitter tags, canonical URL, and `<script src="/palette.js" defer>`.
- `nav(currentPage)` — returns the shared nav (`/`, `/articles`, `/tools`) with `aria-current="page"` on the active link.
- `escapeHtml` / `escapeAttr` / `sanitizeUrl` — security helpers. `sanitizeUrl` blocks `javascript:`, `data:`, `vbscript:` protocols.

When generating HTML in `build.js`, always run user-controlled strings (tool names, article titles) through `escapeHtml` or `escapeAttr`.

### Data: `data/tools.js`

Single file, ~1800 lines. Exports a top-level `const tools = [...]` array. Each entry is `{ title: string, stack: [{ name, description, url }] }`. Categories are listed alphabetically by `title`. Within each category, tools are alphabetically by `name` (some entries drift — minor, don't aggressively sort unless the user asks).

Adding a tool: find the right category (or add a new category in alphabetical position), add `{ name, description, url }` in alphabetical order. Run `npm run build` to regenerate `/tools/index.html` and the search index.

### Articles

`articles/*.md` with YAML frontmatter:

```yaml
---
title: Article title
date: 2025-08-15
description: Short description for SEO
---
```

The slug is the filename (without `.md`). Article URL is `/{slug}`. When adding a new article, also update `articles/index.html` to add the listing entry.

### Command palette (`palette.js` + `search-index.json`)

- **Trigger**: `Cmd+K` on macOS, `Ctrl+K` elsewhere.
- **UI**: native `<dialog>` rendered via `showModal()` — IIFE in `palette.js` creates the DOM on first open.
- **Index**: `search-index.json` emitted by `build.js`. Entries are `{ t: title, h: href, k: kind, c?: category, d?: description }`. Kinds: `page`, `category`, `tool`, `article`. Fetched lazily on first palette open.
- **Scoring**: title exact (1000) > title prefix (500) > title substring (200) > category substring (50) > description substring (30). Top 40 shown.
- **Keyboard**: ↑/↓ navigate, Enter go, Esc close. External links (`http(s)://...`) open in a new tab; internal paths navigate in-place.

Global g-prefix hotkeys (also in `palette.js`): `gh` → `/`, `ga` → `/articles`, `gt` → `/tools`. Suppressed when the palette is open or when focus is in an editable element. 1-second timeout between `g` and the second key.

The palette is loaded on every page via `<script src="/palette.js" defer>` in the `head()` helper. Hand-written pages (`index.html`, `articles/index.html`) include it explicitly — keep that tag in sync if you edit those files.

### Styling (`style.css`)

Single stylesheet, ~330 lines, hand-written. Theme:
- Background `#faf8f5` (warm cream), text `#333`, accents `#000` / `#666`.
- Single `max-width: 600px` column centered with 20px padding.
- System font stack, 16px base.

Palette styles are at the bottom of `style.css`. Print styles hide `nav`, `.skip-link`, and `.palette`.

### Local dev server (`serve.js`)

Zero-dep Node HTTP server, ~80 lines. Binds to `127.0.0.1` only. Starts at port 3000 (or `PORT` env var) and walks upward until it finds a free port. Serves directory index files (e.g. `/tools` → `/tools/index.html`). Stops 100 ports above the start to avoid infinite loops.

## Deployment

Deployed to Vercel as a static site. Vercel serves the repo root directly — no build command needed on the platform because `/tools/`, `/{slug}/`, `sitemap.xml`, `robots.txt`, and `search-index.json` are committed to git after running `npm run build` locally. When adding content, run `npm run build` and commit the regenerated files along with your source changes.

## Conventions

- Categories and tools in `data/tools.js` are alphabetical. When adding, preserve ordering.
- Commit messages: `feat: add X and Y` style — see recent `git log` for examples.
- Don't add new runtime dependencies without a strong reason. The site is deliberately dependency-light.
- Don't introduce a framework or client-side bundler. Vanilla JS + hand-written HTML is the target.
