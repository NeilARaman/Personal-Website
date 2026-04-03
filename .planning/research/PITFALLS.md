# Domain Pitfalls

**Domain:** Minimalist personal website redesign (complex-to-simple stack migration)
**Researched:** 2026-04-03
**Confidence:** MEDIUM (based on training data patterns from Next.js migrations and static site redesigns; WebSearch unavailable for verification)

## Critical Pitfalls

Mistakes that cause rewrites, lost traffic, or significant rework.

### Pitfall 1: Breaking Existing URLs Without Redirects

**What goes wrong:** The current site serves pages at `/about`, `/articles`, `/contact`, `/investing`, `/projects`, `/talks`, `/tools`, `/uses`, `/podcasts`, `/reminder`, and article slugs at `/<slug>` (e.g., `/introducing-foundry`). A framework migration changes routing entirely, and old URLs return 404s. Google deindexes the site. Any external links (LinkedIn, CMU communities, shared article links) break permanently.

**Why it happens:** Developers focus on the new site and forget that the old URL structure is a contract with the outside world. The current site has a sitemap at `sitemap.xml` that Google has already indexed. Article URLs live at the root level (`/introducing-foundry`), not under `/articles/introducing-foundry` -- this is easy to accidentally change.

**Consequences:** Lost SEO equity (even for a personal site, Google ranking for your name matters). Broken links from anywhere the article was shared. Professional embarrassment if a recruiter or collaborator clicks a dead link.

**Prevention:**
1. Document every URL the current site serves before touching anything (scrape the sitemap, enumerate pages)
2. Maintain identical URL patterns in the new site, especially `/<article-slug>` at the root level
3. Add explicit redirects in Vercel config (`vercel.json`) for any removed pages (e.g., `/contact` -> `/`, `/about` -> `/`, `/projects` -> `/`)
4. Test every old URL against the new deployment before going live

**Detection:** Run `curl -s -o /dev/null -w "%{http_code}"` against every known URL after deployment. Any non-200/301 response is a broken link.

**Phase mapping:** Must be addressed in the very first migration phase, before any deployment.

---

### Pitfall 2: Article Slug Routing Mismatch

**What goes wrong:** The current site routes articles at `/<slug>` (root level, handled by `pages/[slug].js`). Many static site generators default to `/blog/<slug>` or `/articles/<slug>`. If the new framework uses a different convention, every article link breaks.

**Why it happens:** The current `[slug].js` catch-all at root level is a Next.js Pages Router pattern. Astro, 11ty, and other SSGs typically organize content in subdirectories that map to URL paths. The natural Astro approach would be `src/content/articles/` which generates `/articles/<slug>`.

**Consequences:** The one published article (`/introducing-foundry`) loses its URL. Any future articles shared from the old site break. This is especially insidious because it looks like the site works (articles page loads fine) but individual article links are dead.

**Prevention:**
1. Explicitly configure the new framework to serve articles at `/<slug>`, not `/articles/<slug>`
2. In Astro, this means using `src/pages/[slug].astro` with dynamic routing, not relying on content collection default paths
3. If the team decides to change the URL pattern (e.g., move to `/articles/<slug>`), add redirects from old paths

**Detection:** After building, check that `/introducing-foundry` resolves correctly. Automate this check for all article slugs.

**Phase mapping:** Core routing phase -- must be correct before content migration is considered complete.

---

### Pitfall 3: Losing Markdown Rendering Fidelity

**What goes wrong:** The article renders differently in the new stack. Code blocks lose syntax highlighting. HTML embedded in markdown breaks. Frontmatter fields are parsed differently. The article looks broken or ugly.

**Why it happens:** The current pipeline is `gray-matter` + `remark` + `remark-prism` + `remark-html` with DOMPurify sanitization. A new stack (e.g., Astro's built-in markdown) uses a different pipeline (typically `unified`/`rehype` based). Plugin behavior differs -- Prism themes, HTML passthrough rules, and sanitization all behave differently between pipelines.

**Consequences:** Published content looks broken. Code examples in articles lose highlighting or formatting. Any raw HTML in markdown files may be stripped or rendered as text.

**Prevention:**
1. Render the existing article (`introducing-foundry.md`) through the new pipeline early -- in the first build, not after migration is "done"
2. Compare output visually side-by-side with the current site
3. Ensure the new markdown pipeline supports: frontmatter parsing, code syntax highlighting (Prism or Shiki), and HTML passthrough for any raw HTML in markdown
4. Astro uses Shiki by default (not Prism) -- the syntax highlighting theme will look different; pick a theme explicitly

**Detection:** Visual diff of rendered article output. Check that `<code>` blocks have syntax classes applied.

**Phase mapping:** Article system implementation phase. Test with real content, not placeholder markdown.

---

### Pitfall 4: Deploying Over Production Before the New Site is Ready

**What goes wrong:** The redesign is done on the `main` branch, and Vercel auto-deploys from `main`. A half-finished redesign goes live. The professional personal site is broken for days or weeks during development.

**Why it happens:** The current Vercel setup auto-deploys `main`. Developers start working on `main` because "it's just a redesign" and don't protect the production site.

**Consequences:** neilraman.com shows a broken, half-built site to anyone who visits. If Neil is job-searching or networking, this is directly harmful.

**Prevention:**
1. Work on a feature branch (e.g., `redesign`) for the entire migration
2. Use Vercel preview deployments on the branch to test
3. Only merge to `main` when the new site is fully functional and tested
4. Consider a "flag day" cutover: merge the complete redesign in one PR

**Detection:** Check Vercel dashboard -- if `main` has auto-deploy enabled, any push deploys immediately.

**Phase mapping:** Project setup phase (phase 0). Branch strategy must be established before any code changes.

---

### Pitfall 5: Static Asset Path Breakage

**What goes wrong:** The article references `/static/images/CMU_Photo.jpg`. The new framework uses a different public/static directory structure. Images referenced in markdown frontmatter or body return 404.

**Why it happens:** Next.js serves files from `public/` at the root -- so `public/static/images/CMU_Photo.jpg` is served at `/static/images/CMU_Photo.jpg`. Different frameworks handle static assets differently. Astro uses `public/` the same way, but if directory structure changes during cleanup, image paths break. Other SSGs may use `assets/` or different conventions.

**Consequences:** Article hero images and any inline images break. The tools page may also reference images. The site looks incomplete.

**Prevention:**
1. Copy the entire `public/` directory structure as-is to the new site
2. Verify that the new framework serves `public/` contents at the same paths
3. Do NOT reorganize or rename the `public/static/` directory during migration -- do that in a separate follow-up if needed
4. Grep all markdown files and data files for path references and verify each one resolves

**Detection:** After build, check that `/static/images/CMU_Photo.jpg` returns 200. Scan markdown for image references and test each.

**Phase mapping:** Content migration phase. Verify alongside article rendering.

## Moderate Pitfalls

### Pitfall 6: Over-Minimizing Into Blandness

**What goes wrong:** In pursuit of minimalism, the site becomes generic -- white background, black text, no personality. It looks like every other "minimal personal site" template. The redesign loses the goal of being "uniquely Neil's."

**Why it happens:** Minimalism is harder to execute with personality than maximalism. Removing elements is easy; making what remains distinctive is hard. Developers default to "just remove things" instead of "make fewer things excellent."

**Prevention:**
1. Define 2-3 distinctive design elements before building (e.g., a specific serif font pairing, a signature accent color, unique spacing rhythm)
2. Reference the inspiration site (abhayvenkatesh.com) for tone but do not clone it
3. Typography IS the design in a minimal site -- invest time in font selection, sizing, line-height, and letter-spacing
4. One deliberate design flourish (e.g., a distinctive header treatment, a subtle hover effect) prevents blandness without adding clutter

**Detection:** Show the site to someone who doesn't know it's yours. If they can't distinguish it from a default template, it needs more personality.

**Phase mapping:** Design/styling phase. Address before implementation, not after.

---

### Pitfall 7: Forgetting SEO Metadata During Migration

**What goes wrong:** The current site uses `next-seo` for Open Graph tags, meta descriptions, and structured data. The new site launches without any of this. Social shares show no preview image or description. Google results show generic or missing descriptions.

**Why it happens:** SEO metadata is invisible during development. The site looks fine in the browser, so developers think it's done. But the `<head>` is missing critical meta tags that were previously handled by `next-seo`.

**Consequences:** Social media shares (LinkedIn, Twitter) show a blank preview. Google search results degrade. For a personal/professional site, this directly impacts how the site appears when shared.

**Prevention:**
1. Extract current meta tags from the live site before migration (view source on each page, capture `<head>` content)
2. Implement equivalent meta tags in the new stack -- at minimum: `<title>`, `<meta name="description">`, Open Graph (`og:title`, `og:description`, `og:image`), and Twitter card tags
3. Generate a new `sitemap.xml` and `robots.txt` (the current ones are auto-generated by `next-sitemap`)
4. Test with social media debuggers (LinkedIn Post Inspector, Twitter Card Validator) before go-live

**Detection:** View source on deployed preview. Check `<head>` for meta tags. Use social media preview tools.

**Phase mapping:** Late implementation phase, but must be done before production deployment.

---

### Pitfall 8: tools.js Data Format Incompatibility

**What goes wrong:** The current `data/tools.js` uses CommonJS `module.exports` or ES module `export` syntax tied to the Next.js build pipeline. The new framework may not import it the same way, or the data shape may need restructuring for the new template system.

**Why it happens:** `data/tools.js` is a JavaScript file with a specific export format. If moving to Astro (which uses ESM), the import may work differently. If moving to a pure static generator, JS data files may not be natively supported.

**Consequences:** Tools page breaks or shows no data. Time spent debugging import issues instead of building features.

**Prevention:**
1. Check the export format of `data/tools.js` -- it uses `const tools = [...]; module.exports = tools` or similar
2. Convert to ESM (`export default`) if the new framework requires it
3. Alternatively, convert to JSON for maximum portability -- any framework can read JSON
4. Test the import in the new framework immediately, don't assume it works

**Detection:** Build the tools page early. If data doesn't load, check module format compatibility.

**Phase mapping:** Content migration phase, alongside article migration.

---

### Pitfall 9: Forgetting the 404 Page

**What goes wrong:** The current site has a custom `404.js` page. The new site launches with the framework's default 404 (or worse, a raw error page). All removed pages (`/contact`, `/about`, `/projects`, etc.) that lack redirects show an ugly default error.

**Why it happens:** Custom error pages are an afterthought. Developers focus on the happy path.

**Prevention:**
1. Build a minimal 404 page that matches the site's design
2. Include a link back to the homepage
3. This is especially important because many pages are being removed -- visitors to `/projects`, `/contact`, etc. will hit 404 if not redirected

**Detection:** Navigate to a nonsense URL on the preview deployment and verify the 404 page renders correctly.

**Phase mapping:** Final polish phase, but should be in the plan from the start.

---

### Pitfall 10: Development Tooling Regression

**What goes wrong:** The current site has linting (`next lint`), a sitemap generator (`next-sitemap`), and Vercel deployment scripts. The new site launches without linting, without a sitemap, and with a manual deployment process. Developer experience degrades.

**Why it happens:** Focus on the visible site, not the invisible tooling. The old tooling was framework-specific and doesn't carry over.

**Prevention:**
1. Set up linting for the new stack in the project scaffolding phase (ESLint or Biome)
2. Add sitemap generation (e.g., `@astrojs/sitemap` if using Astro, or a build script)
3. Verify Vercel deployment works with the new framework before writing any features
4. Set up a `dev` script that provides hot reload

**Detection:** Run `npm run build && npm run lint` -- both should work from day one.

**Phase mapping:** Project scaffolding phase (phase 1).

## Minor Pitfalls

### Pitfall 11: Font Loading Performance

**What goes wrong:** Serif fonts (especially Google Fonts like Playfair Display or Libre Baskerville) are large and cause visible FOUT (Flash of Unstyled Text) or layout shift on load.

**Prevention:**
1. Use `font-display: swap` to prevent invisible text during load
2. Preload the primary font file with `<link rel="preload">`
3. Consider self-hosting the font files instead of loading from Google Fonts CDN (eliminates a third-party dependency and DNS lookup)
4. Choose a variable font if available to reduce total file count

**Phase mapping:** Styling phase.

---

### Pitfall 12: Scope Creep During "Simple" Redesign

**What goes wrong:** "While we're at it" additions pile up. Dark mode toggle gets added back. Animations creep in. The "minimal redesign" takes months and ends up complex again.

**Prevention:**
1. The PROJECT.md "Out of Scope" list is the defense -- reference it when tempted to add features
2. Time-box the entire redesign. A 3-page static site should take days, not weeks
3. Ship the minimal version first. Enhancements come in future iterations, if at all

**Detection:** If the dependency count exceeds 10, something went wrong. If build time exceeds 5 seconds, something went wrong.

**Phase mapping:** All phases. Constant discipline.

---

### Pitfall 13: Prism CSS Theme Not Included

**What goes wrong:** Code blocks in articles render as plain monospace text with no syntax coloring. The article looks like syntax highlighting is broken.

**Why it happens:** Prism (or Shiki) requires a CSS theme to be loaded. In the old Next.js setup, this was likely imported globally. In the new setup, the theme CSS must be explicitly included. Astro uses Shiki by default and handles this, but if Prism is used, the theme CSS is easy to forget.

**Prevention:**
1. If using Shiki (Astro default): choose a theme in `astro.config.mjs` and it works automatically
2. If using Prism: import the theme CSS file globally (e.g., `prism-tomorrow.css`)
3. Test with an article that contains code blocks

**Phase mapping:** Article rendering phase.

## Phase-Specific Warnings

| Phase Topic | Likely Pitfall | Mitigation |
|-------------|---------------|------------|
| Project setup | Deploying over production (P4) | Work on feature branch from day one |
| Framework scaffolding | Tooling regression (P10) | Set up lint, sitemap, deploy scripts immediately |
| Routing setup | URL breakage (P1), Slug mismatch (P2) | Document all current URLs, match them exactly |
| Content migration | Asset paths (P5), tools.js format (P8), Markdown fidelity (P3) | Test with real content early, not lorem ipsum |
| Styling | Blandness (P6), Font loading (P11) | Define distinctive elements before coding |
| SEO/Meta | Missing metadata (P7) | Extract current meta tags before migration |
| Pre-launch | Missing 404 (P9), Broken links | Crawl all old URLs against preview deployment |
| All phases | Scope creep (P12) | Reference the Out of Scope list religiously |

## Codebase-Specific Warnings

These pitfalls are derived from the current CONCERNS.md and are specific to this migration.

### Carry-Forward: Blog Sort Bug

The current `lib/blog.js` has a sort comparison bug (returns string `'-1'` / `'1'` instead of numeric). If the sort logic is copied to the new codebase, the bug comes with it. **Fix during migration:** use `new Date(b.date) - new Date(a.date)`.

### Carry-Forward: Sanitization Gap

The current markdown pipeline uses `sanitize: false` in remark-html and relies on DOMPurify. The new stack should use build-time sanitization (rehype-sanitize) instead of client-side DOMPurify. Since the site will be fully static, sanitize at build time and eliminate the runtime dependency.

### Carry-Forward: Overly Permissive DOMPurify Config

Current config allows `iframe`, `video`, `source` tags in blog posts. The new pipeline should only allow tags actually used in articles. Review the one existing article and whitelist only what's needed.

### Opportunity: Drop Fragile Patterns

Many items in CONCERNS.md (rate limiter fragility, email API issues, hydration warnings, Stitches SSR extraction) are eliminated by the migration. The new site should have zero API routes, zero hydration concerns, and zero CSS-in-JS. **Verify these are actually removed** -- don't accidentally carry over unused API routes or middleware.

---

*Pitfalls audit: 2026-04-03*
*Confidence: MEDIUM -- patterns well-established from Next.js migration experience; specific version/framework details would benefit from WebSearch verification*
