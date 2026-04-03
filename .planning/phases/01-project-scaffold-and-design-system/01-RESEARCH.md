# Phase 1: Project Scaffold and Design System - Research

**Researched:** 2026-04-03
**Domain:** Astro static site generator, CSS design systems, self-hosted typography
**Confidence:** HIGH

## Summary

This phase creates a new Astro project on a `redesign` branch, replacing the existing Next.js site. The project will be a static site deployed to Vercel with a complete CSS design system using custom properties for typography (Lora + Inter), color tokens (warm off-white + deep navy), spacing scale, and layout primitives.

Astro 6 is the current stable release (v6.1.x as of April 2026) and includes a built-in Fonts API for self-hosted fonts, eliminating the need for external font packages. The site is purely static -- no adapter needed for Vercel deployment. All styling uses plain CSS with scoped component styles and a global token file, satisfying TECH-02's "no CSS-in-JS runtime" requirement.

**Primary recommendation:** Use Astro 6 with its built-in Fonts API for local font hosting, a single global CSS tokens file imported by the base layout, and scoped `<style>` blocks in components. No CSS preprocessor, no Tailwind, no CSS-in-JS.

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions
- Heading font: Lora (serif, warm and balanced)
- Body font: Inter (sans-serif, crisp and modern)
- Base body size: 18px
- Self-hosted fonts (no Google Fonts runtime dependency)
- Two families, minimal weights to keep payload small
- Background: warm off-white (cream-ish, ~#fafaf7 range)
- Text: dark gray/near-black for body, black for headings
- Accent: deep blue / navy for links and interactive elements
- Signature element: small navy dot used as separator/bullet
- Content width: ~720px (~70 chars per line)
- Spacing: balanced, comfortable, spacious but not sparse
- Line-height: 1.5-1.6 for body text
- Modular type scale (e.g., 1.25 ratio) for heading sizes
- Navigation: links aligned to the right side of the header
- Feature branch: `redesign`
- Clean slate: remove old Next.js files, build new Astro project in repo root
- Preserve `articles/` directory and `data/tools.js`
- Deploy to Vercel preview URL from the redesign branch

### Claude's Discretion
- Exact hex values for colors (within warm off-white + deep blue direction)
- Specific font weights to include
- CSS custom property naming
- Exact spacing scale values
- Semantic HTML structure of the layout shell

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope.
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| TECH-01 | Built with Astro -- no React, no client-side JS framework | Astro 6 static site, zero JS by default |
| TECH-02 | Plain CSS with scoped styles -- no CSS-in-JS runtime | Astro scoped `<style>` blocks + global CSS tokens file |
| FOUN-04 | All pages use semantic HTML (`<header>`, `<nav>`, `<main>`, `<article>`, `<footer>`) | Base layout component with semantic shell |
| DESG-01 | Light color scheme with off-white background | CSS custom properties: `--color-bg` in warm off-white range |
| DESG-02 | Serif typography -- display serif for headings, text serif for body, self-hosted fonts | Lora (headings) + Inter (body) via Astro Fonts API or manual @font-face |
| DESG-03 | Generous whitespace -- modular type scale, 1.5-1.6 line-height, breathing room | 1.25 ratio type scale, spacing scale in CSS tokens |
| DESG-04 | At least one subtle visual identity element unique to Neil | Navy dot separator -- CSS pseudo-element or inline SVG |
</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| astro | ^6.1 | Static site generator | Current stable, built-in Fonts API, zero-JS output, Vite 7 under the hood |
| Node.js | 22.16.0 (installed) | Runtime | Required by Astro 6 (minimum 22.12.0) |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @fontsource-variable/inter | ^5.2 | Inter variable font files | FALLBACK only -- if Astro Fonts API proves problematic |
| @fontsource-variable/lora | ^5.x | Lora variable font files | FALLBACK only -- same as above |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Astro Fonts API | @fontsource packages | Fontsource works but Astro Fonts API is built-in and handles preloads automatically |
| Astro Fonts API | Manual @font-face in CSS | More control but miss out on automatic preload optimization |
| Plain CSS tokens | Tailwind CSS | Tailwind adds build complexity; plain CSS is simpler for a 3-page site and satisfies TECH-02 better |
| Astro 6 | Astro 5.x | Astro 5 still works but Fonts API is experimental there; 6 is stable and current |

**Installation:**
```bash
npm create astro@latest -- --template minimal
```

No additional packages needed beyond what Astro scaffolds. Fonts are handled by the built-in Fonts API with local font files.

## Architecture Patterns

### Recommended Project Structure
```
src/
  assets/
    fonts/          # .woff2 font files (Inter, Lora)
  components/
    NavyDot.astro   # Signature dot element
    Nav.astro        # Right-aligned navigation
  layouts/
    Base.astro       # Semantic HTML shell (<header>, <nav>, <main>, <footer>)
  pages/
    index.astro      # Placeholder landing page
  styles/
    tokens.css       # Design tokens (colors, typography, spacing)
    reset.css        # Minimal CSS reset
    global.css       # Global typography and base styles
public/
  (empty initially -- Astro copies font assets at build)
articles/            # Preserved from existing site (1 markdown file)
data/
  tools.js           # Preserved from existing site
astro.config.mjs     # Astro + Fonts API configuration
```

### Pattern 1: Global Design Tokens via CSS Custom Properties
**What:** A single `tokens.css` file defines all design primitives as CSS custom properties on `:root`.
**When to use:** Every page -- imported once in the base layout.
**Example:**
```css
/* src/styles/tokens.css */
:root {
  /* Colors */
  --color-bg: #fafaf7;
  --color-text: #2d2d2d;
  --color-heading: #1a1a1a;
  --color-accent: #1e3a5f;
  --color-accent-hover: #152d4a;
  --color-muted: #6b6b6b;
  --color-rule: #e0ddd8;

  /* Typography */
  --font-heading: 'Lora Variable', 'Georgia', serif;
  --font-body: 'Inter Variable', system-ui, sans-serif;
  --font-size-base: 1.125rem; /* 18px */

  /* Type scale (1.25 ratio -- Major Third) */
  --font-size-sm: 0.889rem;    /* ~14.2px */
  --font-size-base: 1.125rem;  /* 18px */
  --font-size-md: 1.406rem;    /* ~22.5px */
  --font-size-lg: 1.758rem;    /* ~28.1px */
  --font-size-xl: 2.197rem;    /* ~35.2px */
  --font-size-2xl: 2.747rem;   /* ~44px */

  /* Spacing (8px base, powers of 2 progression) */
  --space-xs: 0.25rem;   /* 4px */
  --space-sm: 0.5rem;    /* 8px */
  --space-md: 1rem;      /* 16px */
  --space-lg: 1.5rem;    /* 24px */
  --space-xl: 2rem;      /* 32px */
  --space-2xl: 3rem;     /* 48px */
  --space-3xl: 4rem;     /* 64px */
  --space-4xl: 6rem;     /* 96px */

  /* Layout */
  --content-width: 45rem; /* ~720px */
  --line-height-body: 1.6;
  --line-height-heading: 1.2;
}
```

### Pattern 2: Base Layout with Semantic HTML
**What:** A single layout component wraps all pages with the semantic HTML shell.
**When to use:** Every page uses this layout.
**Example:**
```astro
---
// src/layouts/Base.astro
import '../styles/tokens.css';
import '../styles/reset.css';
import '../styles/global.css';
import { Font } from 'astro:assets';
---
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Font cssVariable="--font-lora" />
    <Font cssVariable="--font-inter" />
    <title>{Astro.props.title ?? 'Neil Raman'}</title>
  </head>
  <body>
    <header>
      <nav>
        <a href="/" class="site-name">Neil Raman</a>
        <div class="nav-links">
          <a href="/articles">Articles</a>
          <a href="/tools">Tools</a>
        </div>
      </nav>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <!-- LinkedIn link and copyright -->
    </footer>
  </body>
</html>
```

### Pattern 3: Scoped Component Styles
**What:** Each `.astro` component uses a `<style>` block that is automatically scoped.
**When to use:** All component-specific styling. Reference global tokens via `var()`.
**Example:**
```astro
<!-- src/components/Nav.astro -->
<nav>
  <a href="/" class="site-name">Neil Raman</a>
  <div class="nav-links">
    <a href="/articles">Articles</a>
    <a href="/tools">Tools</a>
  </div>
</nav>

<style>
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: var(--content-width);
    margin: 0 auto;
    padding: var(--space-lg) var(--space-md);
  }
  .site-name {
    font-family: var(--font-heading);
    font-weight: 600;
    color: var(--color-heading);
    text-decoration: none;
  }
  .nav-links {
    display: flex;
    gap: var(--space-lg);
  }
  .nav-links a {
    color: var(--color-accent);
    text-decoration: none;
    font-size: var(--font-size-sm);
  }
</style>
```

### Pattern 4: Navy Dot Signature Element
**What:** A small navy circle used as visual separator, achievable with pure CSS.
**When to use:** Section separators, list markers, header accent.
**Example:**
```astro
<!-- src/components/NavyDot.astro -->
<span class="navy-dot" aria-hidden="true"></span>

<style>
  .navy-dot {
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background-color: var(--color-accent);
  }
</style>
```

### Anti-Patterns to Avoid
- **Importing CSS in every component:** Import tokens/global CSS once in the base layout, not in each component. Components access tokens via `var()`.
- **Using `<style is:global>` in components:** Reserve global styles for the layout. Components should use scoped styles.
- **Putting fonts in `public/`:** Astro docs explicitly warn against this -- it creates duplicated files. Keep fonts in `src/assets/fonts/`.
- **Using `define:vars` for static tokens:** `define:vars` is for dynamic JS-to-CSS values. Static design tokens belong in a CSS file.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Font loading & preloads | Custom `@font-face` + `<link rel="preload">` | Astro Fonts API (`fontProviders.local()`) | Handles preload injection, fallback generation, font-display automatically |
| CSS reset | Custom reset from scratch | Modern minimal reset (Josh Comeau's or Andy Bell's) | Battle-tested, covers edge cases like img display, box-sizing |
| Type scale calculation | Manual pixel values | CSS custom properties with calculated scale | One ratio change updates everything; the 1.25 major third ratio is well-established |

**Key insight:** For a 3-page static site, the build system should be invisible. Astro's defaults handle 95% of what's needed. Custom tooling adds maintenance burden with no benefit.

## Common Pitfalls

### Pitfall 1: Astro Fonts API Configuration Errors
**What goes wrong:** The Fonts API requires exact configuration in `astro.config.mjs` with proper variant specification. Missing weight or style fields cause silent failures.
**Why it happens:** The API is new in Astro 6 and docs may not cover all edge cases.
**How to avoid:** Test font rendering immediately after setup. If fonts don't render, check the browser dev tools Network tab for 404s on font files. Have a fallback plan using manual `@font-face` in `global.css`.
**Warning signs:** Fallback system fonts visible instead of Lora/Inter.

### Pitfall 2: Variable Font Weight Ranges
**What goes wrong:** Variable fonts use weight ranges (e.g., `100 900`) not single values. Using `font-weight: bold` may not work as expected.
**Why it happens:** Variable fonts are specified differently from static fonts in `@font-face`.
**How to avoid:** For manual `@font-face`, use `font-weight: 100 900` range syntax. Only include needed weights in the Astro Fonts API variant config.
**Warning signs:** All text appears at same weight despite different `font-weight` values.

### Pitfall 3: Clean Slate Approach Losing Git History
**What goes wrong:** Deleting all Next.js files on the redesign branch loses the ability to reference old code.
**Why it happens:** Eagerness to start fresh.
**How to avoid:** Create `redesign` branch FIRST from `main`, then remove old files in a single commit. Old code is always recoverable from `main` branch or earlier commits.
**Warning signs:** N/A -- just follow the process.

### Pitfall 4: Content Width vs Viewport Padding
**What goes wrong:** Setting `max-width: 720px` without horizontal padding causes text to touch screen edges on mobile.
**Why it happens:** Forgetting that `max-width` constrains maximum but doesn't add padding below that width.
**How to avoid:** Always pair `max-width` with horizontal padding: `max-width: var(--content-width); margin: 0 auto; padding: 0 var(--space-md);`
**Warning signs:** Text touching screen edges on mobile or narrow windows.

### Pitfall 5: Font File Format
**What goes wrong:** Including .ttf or .otf files instead of .woff2, bloating page weight.
**Why it happens:** Downloading fonts from Google Fonts gives multiple formats.
**How to avoid:** Use only `.woff2` files. All modern browsers support it. A variable .woff2 file for Inter is ~100KB and covers all weights.
**Warning signs:** Font files larger than 150KB each.

## Code Examples

### Astro Config with Fonts API
```javascript
// astro.config.mjs
import { defineConfig, fontProviders } from 'astro/config';

export default defineConfig({
  site: 'https://neilraman.com',
  fonts: [
    {
      provider: fontProviders.local(),
      name: 'Lora Variable',
      cssVariable: '--font-lora',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/Lora-Variable.woff2'],
            weight: '400 700',
            style: 'normal',
          },
          {
            src: ['./src/assets/fonts/Lora-Italic-Variable.woff2'],
            weight: '400 700',
            style: 'italic',
          },
        ],
      },
    },
    {
      provider: fontProviders.local(),
      name: 'Inter Variable',
      cssVariable: '--font-inter',
      options: {
        variants: [
          {
            src: ['./src/assets/fonts/InterVariable.woff2'],
            weight: '400 600',
            style: 'normal',
          },
        ],
      },
    },
  ],
});
```

### Minimal CSS Reset
```css
/* src/styles/reset.css */
*, *::before, *::after {
  box-sizing: border-box;
}

* {
  margin: 0;
}

html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

body {
  line-height: var(--line-height-body);
  -webkit-font-smoothing: antialiased;
}

img, picture, video, canvas, svg {
  display: block;
  max-width: 100%;
}

input, button, textarea, select {
  font: inherit;
}

p, h1, h2, h3, h4, h5, h6 {
  overflow-wrap: break-word;
}
```

### Global Typography Styles
```css
/* src/styles/global.css */
body {
  font-family: var(--font-body);
  font-size: var(--font-size-base);
  color: var(--color-text);
  background-color: var(--color-bg);
}

h1, h2, h3, h4 {
  font-family: var(--font-heading);
  color: var(--color-heading);
  line-height: var(--line-height-heading);
}

h1 { font-size: var(--font-size-2xl); }
h2 { font-size: var(--font-size-xl); }
h3 { font-size: var(--font-size-lg); }
h4 { font-size: var(--font-size-md); }

a {
  color: var(--color-accent);
  text-decoration-thickness: 1px;
  text-underline-offset: 0.15em;
}

a:hover {
  color: var(--color-accent-hover);
}
```

### Fallback: Manual @font-face (if Fonts API fails)
```css
/* Alternative approach in src/styles/fonts.css */
@font-face {
  font-family: 'Lora Variable';
  src: url('../assets/fonts/Lora-Variable.woff2') format('woff2');
  font-weight: 400 700;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'Inter Variable';
  src: url('../assets/fonts/InterVariable.woff2') format('woff2');
  font-weight: 400 600;
  font-style: normal;
  font-display: swap;
}
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| Astro 5 experimental fonts | Astro 6 stable Fonts API | March 2026 (Astro 6.0) | Built-in font optimization, no extra packages |
| Fontsource npm packages | Astro Fonts API local provider | March 2026 | Fewer dependencies, tighter integration |
| `Astro.glob()` for content | Content Layer API | Astro 5+ (required in 6) | Type-safe content loading |
| Vite 6 | Vite 7 (bundled with Astro 6) | March 2026 | Faster builds, no action needed |

**Deprecated/outdated:**
- `Astro.glob()`: Removed in Astro 6. Use Content Layer API for markdown.
- `<ViewTransitions />`: Replaced with new API in Astro 6.
- Node 18/20: Not supported by Astro 6. Node 22.12.0+ required.

## Open Questions

1. **Astro Fonts API exact configuration for variable fonts**
   - What we know: The API exists, supports local provider with variants
   - What's unclear: Whether the `Font` component from `astro:assets` is the correct import path in Astro 6 (docs showed this but the API was stabilized from experimental)
   - Recommendation: Try the Fonts API first. If it fails, fall back to manual `@font-face` in CSS (documented above). Both approaches work.

2. **Exact color hex values**
   - What we know: Warm off-white background (~#fafaf7), deep blue/navy accent
   - What's unclear: Exact values that feel "editorial and calm" -- this is subjective
   - Recommendation: Start with `#fafaf7` (bg), `#1e3a5f` (accent), `#2d2d2d` (text), `#1a1a1a` (headings). Adjust after visual review in browser.

3. **Font file sourcing**
   - What we know: Need .woff2 files for Inter and Lora variable fonts
   - What's unclear: Best source for the raw .woff2 files
   - Recommendation: Download from Google Fonts (fonts.google.com) which provides .woff2 variable font files, or extract from fontsource npm packages. Google Fonts download gives clean single-file variable fonts.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Manual verification (no test framework -- 3-page static site) |
| Config file | none -- Wave 0 will not add a test framework for this phase |
| Quick run command | `npm run build` (Astro build validates all pages compile) |
| Full suite command | `npm run build && npx astro check` (if TypeScript checking desired) |

### Phase Requirements to Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| TECH-01 | Site builds with Astro, zero client JS | smoke | `npm run build` -- check output has no JS bundles | Wave 0 |
| TECH-02 | No CSS-in-JS in dependencies | smoke | `grep -c "styled-components\|emotion\|stitches" package.json` returns 0 | Wave 0 |
| FOUN-04 | Semantic HTML elements present | manual | View source of built index.html, verify `<header>`, `<nav>`, `<main>`, `<footer>` | Manual |
| DESG-01 | Off-white background renders | manual | Visual check in browser | Manual |
| DESG-02 | Lora + Inter fonts load | smoke | `npm run build` -- check font files in dist output | Wave 0 |
| DESG-03 | Type scale and spacing applied | manual | Visual check -- headings are progressively larger, spacing is balanced | Manual |
| DESG-04 | Navy dot element present | manual | Visual check in browser | Manual |

### Sampling Rate
- **Per task commit:** `npm run build` (must succeed)
- **Per wave merge:** `npm run build` + visual check of dev server
- **Phase gate:** Full build + manual visual review of all design tokens rendering correctly

### Wave 0 Gaps
- [ ] Astro project must exist before any build command works (task 1 creates it)
- [ ] No automated test framework needed -- `npm run build` is the primary validation
- [ ] Font files must be downloaded and placed before font rendering can be verified

## Sources

### Primary (HIGH confidence)
- [Astro official docs - Project Structure](https://docs.astro.build/en/basics/project-structure/) - directory conventions, required directories
- [Astro official docs - Styles and CSS](https://docs.astro.build/en/guides/styling/) - scoped styles, global styles, CSS custom properties, `define:vars`
- [Astro official docs - Using Custom Fonts](https://docs.astro.build/en/guides/fonts/) - Fonts API, local provider, `<Font />` component
- [Astro official docs - Deploy to Vercel](https://docs.astro.build/en/guides/deploy/vercel/) - static deployment needs no adapter
- [Astro official docs - Install and Setup](https://docs.astro.build/en/install-and-setup/) - `npm create astro@latest`
- [Astro official docs - Upgrade to v6](https://docs.astro.build/en/guides/upgrade-to/v6/) - breaking changes, Node 22 requirement

### Secondary (MEDIUM confidence)
- [Fontsource - Inter](https://www.npmjs.com/package/@fontsource-variable/inter) - v5.2.8, variable font package (fallback option)
- [Fontsource - Lora](https://www.npmjs.com/package/@fontsource-variable/lora) - variable font package (fallback option)
- [Every Layout - Modular Scale](https://every-layout.dev/rudiments/modular-scale/) - 1.25 major third ratio reference

### Tertiary (LOW confidence)
- Astro Fonts API exact import path (`astro:assets` vs other) -- needs validation during implementation

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH - Astro 6 is current stable, verified via official docs and npm
- Architecture: HIGH - Project structure follows official Astro conventions
- Pitfalls: HIGH - Common CSS/font issues well-documented across community
- Fonts API details: MEDIUM - API is new in Astro 6, some configuration details may need adjustment during implementation

**Research date:** 2026-04-03
**Valid until:** 2026-05-03 (30 days -- Astro ecosystem is stable for static sites)
