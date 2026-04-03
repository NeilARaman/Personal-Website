# Feature Landscape

**Domain:** Minimalist personal website (editorial/portfolio)
**Researched:** 2026-04-03
**Confidence:** HIGH -- this is a well-understood domain with clear conventions

## Table Stakes

Features users expect from a minimalist personal site. Missing any of these makes the site feel broken or unfinished.

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| **Landing page with identity statement** | Visitors need to know who you are in under 3 seconds. A name, 1-2 sentence bio, and current role/affiliation. | Low | Current site has this. New version: name + "Director of Foundry @ ScottyLabs, Scouting @ Mangusta, Building" or similar short tagline. |
| **Minimal navigation** | Users must be able to reach all 3 sections without hunting. A simple horizontal nav (Home, Articles, Tools) or equivalent. | Low | 3 items max. No hamburger menu needed at this scale -- even on mobile, 3 links fit inline. |
| **Articles listing page** | A chronological list of posts with title, date, and optionally a 1-line description. This is the "blog index." | Low | Currently only 1 article exists. Design should look good with 1 and scale gracefully to 50+. |
| **Individual article pages** | Markdown-rendered article pages with proper typography, readable line lengths (50-75 chars), and clear hierarchy. | Medium | Needs markdown rendering pipeline. Frontmatter (title, date, description) already exists in content. |
| **Tools/resources page** | Categorized list of external links with name + short description. Existing data has ~1300 lines of tools across categories. | Low | Straight render of existing `data/tools.js` structure: category headings with bulleted link lists. |
| **External link to LinkedIn** | Sole contact method per project scope. Must be visible -- footer or header. | Low | A single icon or text link. No form, no email API. |
| **Mobile responsive layout** | Over 50% of web traffic is mobile. A text-heavy editorial site must be readable on phones. | Low | Minimalist sites are inherently easier to make responsive. Single-column layout with good padding handles most of it. |
| **Meta tags / Open Graph** | When someone shares a link on LinkedIn/Twitter/Slack, it needs to show a title, description, and optionally an image. | Low | Current site already has OG tags. Carry over the pattern -- each page gets `og:title`, `og:description`, `og:url`. |
| **Semantic HTML** | Proper `<header>`, `<nav>`, `<main>`, `<article>`, `<footer>` elements. Affects accessibility, SEO, and reader-mode compatibility. | Low | Non-negotiable for a text-forward site. Screen readers and Safari Reader Mode depend on this. |
| **Fast page loads (<1s)** | Minimalist sites that load slowly betray their own aesthetic. Users expect near-instant rendering. | Low | A static site with no JS framework overhead, no animations, minimal CSS achieves this by default. |
| **RSS feed** | Readers of personal blogs expect RSS. Without it, people who want to follow the writing have no mechanism besides manually checking. | Low | Generate an RSS XML file at build time from the articles frontmatter. Standard for any blog. |

## Differentiators

Features that elevate the site from "functional" to "memorable." Not expected, but noticed when present.

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| **Distinctive serif typography** | Most developer/tech sites use system fonts or sans-serif. A well-chosen serif typeface (e.g., Newsreader, Lora, Playfair Display, or Freight Text) immediately signals "editorial" and "intentional." This is the single strongest differentiator for the redesign. | Low | One display serif for headings, one text serif for body. Self-host the fonts (no Google Fonts runtime dependency). 2 weights max to keep payload small. |
| **Generous whitespace and typographic scale** | Minimalism is not "small" -- it is "spacious." Large type sizes (18-20px body), wide margins, and breathing room between elements create a luxury editorial feel. Most personal sites cram content. | Low | Pure CSS concern. Modular scale (e.g., 1.25 ratio) for heading sizes. Line-height 1.5-1.6 for body text. |
| **Subtle visual identity element** | One distinctive non-text element that makes the site "Neil's." Could be a specific accent color, a horizontal rule style, a custom bullet character, or a particular layout cadence. Not a logo -- a texture. | Low | Examples from great minimalist sites: a colored dot, a thin colored line, a specific shade used consistently. Restraint is key -- one element, not five. |
| **Clean URL structure** | `/articles/introducing-foundry` not `/blog/2025/08/introducing-foundry-cmu.html`. Clean, permanent, human-readable URLs signal care. | Low | Already in place with current slug structure. Preserve it. |
| **Proper 404 page** | A minimal, on-brand 404 page with navigation back to home. Shows polish. | Low | One static page. Same typography and layout as the rest of the site. |
| **Sitemap + robots.txt** | Helps search engines index the site properly. Existing site has this. | Low | Generate at build time. Already configured in current setup. |
| **JSON-LD structured data** | Person schema markup helps Google understand who Neil is. Current site already has `getPersonJsonLd()`. | Low | Carry over. Adds a knowledge panel possibility in search results. |
| **Anchor links in article headings** | Lets readers link to specific sections of articles. Standard in good blog implementations. | Low | Auto-generate `id` attributes on `h2`/`h3` elements during markdown rendering. |
| **Print stylesheet** | An editorial site should print cleanly. Readers may want to print an article. | Low | `@media print` CSS: hide nav/footer, ensure readable font size, remove background colors. 15 minutes of work. |
| **Favicon and web manifest** | A branded browser tab icon. Missing favicons look unprofessional. | Low | Simple monogram or initial. Generate sizes from a single SVG. |

## Anti-Features

Features to deliberately NOT build. Each was considered and rejected for specific reasons.

| Anti-Feature | Why Avoid | What to Do Instead |
|--------------|-----------|-------------------|
| **Dark mode toggle** | Adds UI complexity (toggle, state persistence, flash-of-wrong-theme). A single well-designed light scheme is more distinctive and simpler. The PROJECT.md explicitly scopes this out. | Commit to light. Use off-white background (#fafaf9 or similar) to reduce harshness. |
| **Contact form** | Requires server-side email handling (Resend, SendGrid, etc.), spam prevention, and a backend. LinkedIn link achieves the same goal with zero maintenance. | LinkedIn link in footer/header. |
| **Command palette / search** | A 3-page site with <50 articles does not need search. kbar is 40KB+ of JS for a problem that doesn't exist. | If the article list grows beyond 30+, consider a simple client-side filter (no JS framework needed). Until then, a chronological list is scannable. |
| **Animations / transitions** | Framer Motion, CSS transitions on page load, fade-ins -- all add perceived complexity and JS weight. Minimalism means instant, not animated. | Let content appear immediately. Speed is the animation. |
| **Newsletter signup / email capture** | Adds a form, requires an email service (Buttondown, Substack, etc.), and creates an ongoing obligation. If Neil wants a newsletter later, Substack is a better venue than a personal site widget. | RSS feed serves the "follow my writing" use case without infrastructure. |
| **Analytics dashboard / tracking** | Google Analytics, Plausible, Fathom -- all add scripts, privacy concerns, and cookie banners. For a personal site, the ROI is near zero. | If analytics are desired later, add Plausible (1 script tag, no cookies, GDPR-compliant) as a post-launch enhancement. Do not include in initial build. |
| **Comments system** | Disqus, Giscus, or custom comments add significant complexity and moderation burden. Personal blogs increasingly move discussion to Twitter/LinkedIn. | Link to LinkedIn or Twitter for discussion. |
| **Image gallery / hero images** | The current article has an image field in frontmatter, but hero images add visual weight and require image optimization infrastructure. An editorial minimalist site leads with text. | Support inline images within markdown articles (they'll render naturally). Do not build a hero image system or image optimization pipeline. |
| **Projects / portfolio page** | Explicitly out of scope per PROJECT.md. The site is about writing and resource curation, not project showcasing. | If Neil wants to reference a project, he writes an article about it. |
| **Multi-language / i18n** | Single-language site for a single author. i18n infrastructure is pure overhead. | English only. |
| **Tags / categories for articles** | With <10 articles, taxonomy is premature. Tags add URL structure, filtering UI, and template complexity for no user benefit at this scale. | Revisit only if article count exceeds 30 and readers request filtering. |
| **Table of contents for articles** | Adds JS or build-time complexity. At current article lengths, scrolling is sufficient. | If articles consistently exceed 3000 words, reconsider. For now, skip. |

## Feature Dependencies

```
Semantic HTML ─── required by ──→ RSS Feed (needs well-structured content to generate)
Semantic HTML ─── required by ──→ Article pages (content hierarchy)
Markdown rendering pipeline ──→ Individual article pages ──→ Articles listing page
Articles frontmatter ──→ Meta tags / Open Graph (per-article)
Articles frontmatter ──→ RSS feed generation
Typography system (fonts) ──→ All pages (must be decided before any page is built)
Navigation ──→ All pages (shared component)
tools.js data ──→ Tools page
```

## MVP Recommendation

**Build in this order:**

1. **Typography and layout system first** -- Choose fonts, set type scale, define spacing. This is the design foundation. Every page depends on it looking right.
2. **Landing page** -- Name, tagline, LinkedIn link, navigation. The simplest page, validates the visual identity.
3. **Articles listing + individual article pages** -- Markdown rendering pipeline, frontmatter parsing, chronological list. This is the core content.
4. **Tools page** -- Render existing `data/tools.js`. Straightforward once the layout system exists.
5. **RSS feed, sitemap, robots.txt, OG tags** -- Build-time generation. Polish layer.
6. **404 page, favicon, print styles** -- Final polish.

**Defer entirely:**
- Analytics: Add post-launch if desired (Plausible, single script tag)
- Search/filter: Only if article count exceeds 30
- Tags/categories: Only if readers request it
- Newsletter: Use Substack separately if desired

## Key Insight

The entire feature set for this site is intentionally small. The differentiator is not what the site *does* -- it is how it *feels*. Typography, whitespace, and speed are the product. Every feature decision should be filtered through: "Does this make the site feel more considered and calm, or does it add noise?"

## Sources

- Existing codebase analysis (pages/, data/tools.js, articles/, next-sitemap.config.js)
- Reference site: abhayvenkatesh.com -- single-page, text-forward, minimal nav, content-focused
- Domain knowledge: minimalist personal site conventions (HIGH confidence -- well-established patterns)
