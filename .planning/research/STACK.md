# Technology Stack

**Project:** neilraman.com Redesign
**Researched:** 2026-04-03

## Recommended Stack

### Core Framework

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Astro | 6.1 | Static site framework | Purpose-built for content sites. Ships zero JS by default. Native markdown/MDX support via content collections. Built-in scoped CSS. First-class Vercel deployment (zero-config). Replaces Next.js 14 which is massive overkill for a 3-page static site. | HIGH (verified via astro.build/blog, docs.astro.build) |

**Why Astro over alternatives:**

- **vs. Next.js (current):** Next.js ships a React runtime, hydration layer, and client-side router for every page. For a static site with no interactivity, this is pure waste. Astro outputs plain HTML/CSS with zero JavaScript by default.
- **vs. 11ty/Eleventy:** 11ty is viable but Astro has better DX (component-based templating, built-in scoped CSS, TypeScript-first content collections with Zod validation). 11ty uses template languages (Nunjucks/Liquid) which feel dated.
- **vs. Hugo:** Extremely fast builds but Go templating is awkward. Astro's component model is more intuitive for someone coming from React/Next.js.
- **vs. Plain HTML/CSS:** Would work for 3 pages but loses markdown rendering, sitemap generation, and any future extensibility. Astro adds almost no overhead while providing real tooling.

### Content System

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Astro Content Collections | Built-in (Astro 6.x) | Markdown article management | Type-safe schemas with Zod, `getCollection()`/`getEntry()` APIs, automatic frontmatter parsing, built-in caching. Replaces manual gray-matter + remark pipeline. Existing `articles/*.md` files with frontmatter slot directly into this system. | HIGH (verified via docs.astro.build/en/guides/content-collections) |
| Astro Markdown Processing | Built-in (Astro 6.x) | Markdown to HTML | GitHub-flavored Markdown + SmartyPants built in. Supports remark/rehype plugins. Auto-generates heading IDs via github-slugger. No need for separate gray-matter, remark, remark-html packages. | HIGH (verified via docs.astro.build/en/guides/markdown-content) |

### Styling

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Plain CSS (Astro scoped styles) | Built-in | Component styling | Astro scopes `<style>` tags to components automatically. No CSS-in-JS runtime, no build-time extraction complexity. For a 3-page site with editorial typography, plain CSS in scoped style tags is the simplest correct answer. Global styles via `<style is:global>` or imported `.css` files for typography/reset. | HIGH (verified via docs.astro.build/en/guides/styling) |
| CSS custom properties | Native | Theming/design tokens | Replace Stitches theme tokens with CSS custom properties (variables). Zero runtime cost. Universal browser support. Define once in a global stylesheet, use everywhere. | HIGH |

**Do NOT use:**
- **Tailwind CSS:** Overkill for a 3-page editorial site. Utility classes fight against the clean, minimal HTML that editorial typography demands. The site needs maybe 200 lines of CSS total.
- **Sass/SCSS:** Unnecessary complexity. CSS custom properties + Astro's scoped styles handle everything needed. Sass nesting is now native CSS.
- **Any CSS-in-JS:** The whole point of this redesign is escaping Stitches. No styled-components, Emotion, Panda, vanilla-extract. Plain CSS.

### Typography

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Google Fonts (self-hosted via fontsource or manual download) | N/A | Serif editorial typeface | Self-hosting avoids Google Fonts render-blocking request and privacy concerns. Download the font files, place in `public/fonts/`, reference via `@font-face` in global CSS. | MEDIUM (standard practice, not Astro-specific) |

**Font recommendation:** Use a serif typeface for body/headings to achieve the editorial feel. Strong candidates:
- **Lora** -- Elegant, highly readable serif with good screen rendering. Available in 400/500/600/700 weights with italics.
- **Playfair Display** -- More dramatic/editorial. Best for headings paired with a clean sans-serif body.
- **Source Serif 4** -- Adobe's open-source serif. Excellent for long-form reading.

Pair with a system sans-serif stack (`system-ui, -apple-system, sans-serif`) for UI elements (nav, meta text) to keep font payload minimal.

**Final font choice is a design decision, not a stack decision.** Any of these works. Pick one serif, self-host it, done.

### Integrations

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| @astrojs/sitemap | latest (Astro 6.x compatible) | Sitemap generation | Drop-in replacement for next-sitemap. Auto-generates sitemap.xml from all pages. | HIGH (official Astro integration) |
| @astrojs/rss | latest (Astro 6.x compatible) | RSS feed | Nice-to-have for an articles site. Simple `rss()` helper function creates XML feed from content collections. | HIGH (verified via docs.astro.build/en/guides/rss) |

**Do NOT install a Vercel adapter** -- for a fully static site, Astro deploys to Vercel with zero config. No adapter needed. The adapter is only required for server-side rendering (SSR), which this site does not need.

### SEO

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Native `<head>` in Astro layouts | Built-in | SEO meta tags | Astro components render HTML directly. Just write `<meta>`, `<title>`, `<meta property="og:...">` tags in a layout component. No need for next-seo or any SEO library. | HIGH |

### Dev Tooling

| Technology | Version | Purpose | Why | Confidence |
|------------|---------|---------|-----|------------|
| Prettier | latest | Code formatting | Keep existing formatting habits. Astro has an official Prettier plugin (`prettier-plugin-astro`). | HIGH |
| TypeScript | Built-in (Astro 6.x) | Type safety for content schemas | Astro includes TypeScript support. Content collection schemas use Zod for validation, giving type-safe queries. Use `.astro` files (not `.tsx`) for components. | HIGH |

## What Gets Removed (and Why)

| Current Package | Why Removed |
|----------------|-------------|
| next 14.2.35 | Entire React/Next.js runtime replaced by Astro |
| react 18.2.0 / react-dom 18.2.0 | No React needed. Astro components are not React components. |
| @stitches/react 1.2.6 | CSS-in-JS replaced by plain CSS with Astro scoped styles |
| framer-motion 10.18.0 | No animations in minimal redesign |
| kbar 0.1.0-beta.45 | No command palette in 3-page site |
| lottie-react 2.4.1 / lottie-web 5.13.0 | No Lottie animations |
| resend 4.6.0 | No contact form; LinkedIn link instead |
| gray-matter 4.0.3 | Built into Astro content collections |
| remark 14.0.1 / remark-html 15.0.0 / remark-prism 1.3.6 | Built into Astro markdown processing |
| next-seo 5.1.0 | Native HTML `<head>` in Astro layouts |
| next-sitemap 4.2.3 | Replaced by @astrojs/sitemap |
| reading-time 1.5.0 | Can add as remark plugin if desired, but optional |
| date-fns 3.6.0 | For formatting one date field, use `Intl.DateTimeFormat` (built into JS) |
| dompurify / isomorphic-dompurify / rehype-sanitize | Not needed -- Astro's markdown pipeline is server-only, no XSS vector from user input |
| validator 13.15.22 | No forms, no input validation needed |
| @radix-ui/react-toast 1.2.14 | No toast notifications |
| express-rate-limit 8.0.1 | No API routes |
| web-vitals 5.0.3 | Vercel Analytics provides this if desired |
| @next/bundle-analyzer, @swc/cli, @swc/core | Next.js build tooling, not needed |
| eslint / eslint-config-next / eslint-config-prettier | Can add ESLint back later but not critical for 3-page site |

## Alternatives Considered

| Category | Recommended | Alternative | Why Not Alternative |
|----------|-------------|-------------|---------------------|
| Framework | Astro 6.x | Next.js 15 (static export) | Still ships React runtime. `next export` has quirks. Astro is purpose-built for this. |
| Framework | Astro 6.x | 11ty 3.x | Template languages (Nunjucks) feel dated. No built-in scoped CSS. Weaker TypeScript story. |
| Framework | Astro 6.x | Hugo | Go templates are awkward. Migration path harder for JS developer. |
| Framework | Astro 6.x | Plain HTML/CSS | No markdown rendering, no content collections, no sitemap generation. Fine for 1 page, painful for blog. |
| Styling | Plain CSS | Tailwind CSS | 200 lines of CSS doesn't justify a utility framework. Editorial typography needs custom CSS anyway. |
| Styling | Plain CSS | Open Props | Interesting but adds a dependency for something achievable with 20 CSS custom properties. |
| Content | Content Collections | MDX | The articles don't use JSX components inside markdown. Plain `.md` is simpler and sufficient. |

## Installation

```bash
# Create new Astro project (or init in existing directory)
npm create astro@latest

# Add integrations
npx astro add sitemap

# Add RSS (manual install)
npm install @astrojs/rss

# Add Prettier plugin for .astro files
npm install -D prettier prettier-plugin-astro

# Self-host fonts: download font files to public/fonts/
# No npm package needed -- use @font-face in global CSS
```

## Project Structure

```
src/
  content/
    config.ts          # Content collection schemas (Zod)
    articles/           # Move existing .md files here
  data/
    tools.ts            # Convert tools.js to TypeScript
  layouts/
    Base.astro          # HTML shell: <head>, <body>, nav, footer
  pages/
    index.astro         # Landing page
    articles/
      index.astro       # Articles listing
      [...slug].astro   # Dynamic article pages
    tools.astro         # Tools listing
    rss.xml.ts          # RSS feed endpoint
  styles/
    global.css          # CSS custom properties, typography, reset
public/
  fonts/                # Self-hosted font files
  static/               # Existing images (e.g., CMU_Photo.jpg)
astro.config.mjs        # Astro config with sitemap integration
```

## Migration Path for Existing Content

### Articles (`articles/*.md`)
Existing markdown files use standard frontmatter (title, description, date, image). These move directly to `src/content/articles/` with zero changes. Define a Zod schema in `content/config.ts` matching the frontmatter shape.

### Tools (`data/tools.js`)
The tools data is a JS array of objects with `title` and `stack` arrays. Convert to TypeScript (`data/tools.ts`) or keep as JS. Import directly in the tools page component. No framework-specific changes needed.

### Images (`public/static/images/`)
Static assets in `public/` are served as-is by Astro, same as Next.js. No migration needed.

## Total Dependency Count

**Production:** 2 packages (astro, @astrojs/rss)
**Integration:** 1 (@astrojs/sitemap -- added via `astro add`)
**Dev:** 2 packages (prettier, prettier-plugin-astro)

**Total: ~5 packages** vs. current **~30+ packages**. This is the entire point of the redesign.

## Sources

- Astro 6.1 release: https://astro.build/blog/ (verified 2026-04-03)
- Content Collections: https://docs.astro.build/en/guides/content-collections/
- Markdown handling: https://docs.astro.build/en/guides/markdown-content/
- Styling: https://docs.astro.build/en/guides/styling/
- Vercel deployment: https://docs.astro.build/en/guides/deploy/vercel/
- RSS: https://docs.astro.build/en/guides/rss/
