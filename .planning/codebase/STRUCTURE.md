# Codebase Structure

**Analysis Date:** 2026-04-03

## Directory Layout

```
neilraman.com/
├── pages/                      # Next.js Pages Router - routes map directly to URLs
│   ├── api/                    # API endpoints
│   │   └── email.js            # Contact form email submission
│   ├── _app.js                 # Global app wrapper, error boundary
│   ├── _document.js            # Document shell, SSR CSS extraction
│   ├── index.js                # Home page (/)
│   ├── [slug].js               # Dynamic article route (/article-name)
│   ├── about.js                # /about
│   ├── articles.js             # /articles (article listing)
│   ├── contact.js              # /contact (form page)
│   ├── investing.js            # /investing
│   ├── projects.js             # /projects
│   ├── tools.js                # /tools
│   ├── uses.js                 # /uses
│   ├── talks.js                # /talks
│   ├── podcasts.js             # /podcasts
│   ├── reminder.js             # /reminder
│   ├── 404.js                  # Custom 404 page
│   └── 500.js                  # Custom 500 error page
├── layouts/                    # Reusable page layouts
│   ├── Base.js                 # Standard layout with gradient title
│   └── Blogpost.js             # Article layout with header image support
├── components/                 # Reusable React components
│   ├── Navbar.js               # Navigation header
│   ├── Footer.js               # Footer
│   ├── CommandBar.js           # Command palette (kbar)
│   ├── Post.js                 # Post layout primitives
│   ├── Wrapper.js              # Flex container for full-height layout
│   ├── Box.js                  # Generic styled box
│   ├── Toast.js                # Toast notification
│   ├── ListGroup.js            # List container
│   ├── ListItem.js             # List item component
│   ├── FeaturedProject.js       # Project card
│   ├── FeaturedProjects.js      # Project grid
│   ├── FeaturedArticle.js       # Article card
│   ├── FeaturedTalk.js          # Talk card
│   ├── BlogDate.js              # Formatted date component
│   ├── Icon.js                  # Icon wrapper
│   ├── LottieIcon.js            # Lottie animation icon
│   ├── Pronunciation.js         # Pronunciation helper
│   ├── ErrorMessage.js          # Error page component
│   ├── ShortcutHome.js          # Home page shortcuts
│   ├── ShortcutError.js         # Error page shortcuts
│   ├── ButtonPrimary.js         # Primary button
│   ├── EmailTemplate.js         # Email template for Resend
│   └── WebVitals.js             # Performance monitoring
├── lib/                        # Utility functions and helpers
│   ├── blog.js                 # Markdown parsing: getPostBySlug, getAllPosts, convertMarkdownToHtml
│   ├── api-middleware.js       # Rate limiting and validation: emailRateLimit, validateEmailInput, setSecurityHeaders
│   ├── sanitize.js             # HTML sanitization: sanitizeHTML, sanitizeMarkdownHTML, sanitizeUserInput
│   ├── json-ld.js              # Structured data generation
│   └── strip-html.js           # HTML tag removal
├── data/                       # Static content as JS objects
│   ├── projects.js             # Portfolio projects list
│   ├── about.js                # About page content
│   ├── tools.js                # Tools/resources list
│   ├── talks.js                # Speaking engagements
│   ├── podcasts.js             # Podcast appearances
│   ├── investments.js          # Investment data
│   └── uses.js                 # "Uses" page equipment/software list
├── articles/                   # Markdown blog posts
│   └── introducing-foundry.md  # Example article
├── public/                     # Static assets
│   ├── static/
│   │   ├── css/
│   │   │   └── prism.css       # Syntax highlighting styles
│   │   ├── font/               # Custom fonts (woff2)
│   │   └── images/             # Project/article images
│   ├── favicon.ico             # Favicon
│   ├── favicon.svg             # SVG favicon
│   └── apple-touch-icon.png    # iOS home screen icon
├── .planning/                  # Documentation (this file)
├── stitches.config.js          # Stitches theme and global styles
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
├── tsconfig.json               # TypeScript config (not actively used)
├── .eslintrc.json              # ESLint rules
├── .prettierrc                 # Prettier formatting rules
└── .gitignore                  # Git ignore patterns
```

## Directory Purposes

**pages/**
- Purpose: Routes and page-level components
- Contains: React components that export async functions for static/server-side generation
- Key files: `_app.js`, `_document.js`, index route, API endpoints
- Pattern: File/folder name = URL path (e.g., `pages/about.js` → `/about`)

**layouts/**
- Purpose: Page templates that wrap content
- Contains: Navbar, Footer, title/tagline handling, post header styling
- Key files: `Base.js` (standard pages), `Blogpost.js` (articles with images)
- Pattern: Pages assign via `Component.Layout = LayoutName`

**components/**
- Purpose: Reusable React components
- Contains: UI primitives, styled components, feature components
- Key files: Navbar (navigation), Post (spacing/padding primitives), Toast (notifications)
- Pattern: Components are display-only and receive data via props

**lib/**
- Purpose: Business logic and utilities
- Contains: Markdown parsing, API middleware, sanitization helpers
- Key files: `blog.js` (content pipeline), `api-middleware.js` (validation), `sanitize.js` (XSS protection)
- Pattern: Export named functions used by pages/API routes

**data/**
- Purpose: Static configuration and content
- Contains: JavaScript objects/arrays representing content (projects, tools, talks, etc.)
- Key files: One JS file per content type
- Pattern: Default export is always an array

**articles/**
- Purpose: Markdown-based blog post content
- Contains: YAML frontmatter (title, date, image, description) + Markdown body
- Key files: `introducing-foundry.md` (example)
- Pattern: Filename (without .md) becomes URL slug

**public/static/**
- Purpose: Static assets
- Contains: Images, fonts, CSS (Prism syntax highlighting)
- Served at: `/static/...` in production
- Pattern: Subdirectories organize by asset type

**stitches.config.js**
- Purpose: Centralized design system
- Contains: Theme colors, typography, spacing, breakpoints, utilities
- Used by: All styled components throughout the app
- Pattern: Re-exports all Stitches exports for consistent styling

## Key File Locations

**Entry Points:**
- `pages/_app.js`: Global application wrapper with error boundary
- `pages/_document.js`: HTML document shell, Stitches SSR integration
- `pages/index.js`: Home page
- `pages/api/email.js`: Contact form API endpoint

**Configuration:**
- `next.config.js`: Next.js build and deployment settings
- `stitches.config.js`: Design system theme
- `package.json`: Dependencies and build scripts
- `tsconfig.json`: TypeScript settings (minimal setup)
- `.eslintrc.json`: Linting rules

**Core Logic:**
- `lib/blog.js`: Markdown file reading, parsing, HTML conversion
- `lib/api-middleware.js`: Email rate limiting, input validation, XSS prevention
- `lib/sanitize.js`: HTML sanitization with configurable rules
- `pages/[slug].js`: Dynamic article rendering with error handling

**Testing:**
- Not applicable - no test directory (tests are planned, see `"test": "echo 'No tests specified'"` in package.json)

## Naming Conventions

**Files:**
- Pages: PascalCase for component exports (e.g., `index.js` exports `Index`, `contact.js` exports `Contact`)
- Components: PascalCase (e.g., `Navbar.js`, `BlogDate.js`)
- Utilities: camelCase (e.g., `blog.js`, `api-middleware.js`, `strip-html.js`)
- Styles: Stitches components use PascalCase (e.g., `Header`, `NavLink`, `PostMain`)
- Articles: kebab-case (e.g., `introducing-foundry.md`)

**Directories:**
- Standard plural forms for collections: `pages`, `components`, `layouts`, `articles`, `data`
- No abbreviations: `public` not `pub`, `static` not `stc`

**Variables & Functions:**
- Event handlers: camelCase with `on` prefix (e.g., `onSendEmail`, `onHoverStart`)
- State: camelCase (e.g., `isLoading`, `hovered`, `fieldErrors`)
- Constants: camelCase (e.g., `pages`, `fields`, `spamPatterns`)

**Styled Components:**
- Same name as DOM element or semantic variant (e.g., `Header` for `<header>`, `NavLink` for navigation link)
- Descriptive compound names: `PostHeaderTitle`, `FeaturedArticles`, `FormGroup`

## Where to Add New Code

**New Article:**
1. Create `articles/{slug}.md` with YAML frontmatter (title, date, description, image)
2. Article auto-discovered by `getStaticPaths` in `pages/[slug].js`
3. Appears in `pages/articles.js` listing automatically (if not marked with `skip: true`)
4. No code changes needed

**New Static Page (e.g., /timeline):**
1. Create `pages/timeline.js` that exports a component
2. Export `getStaticProps` to provide page props (title, tagline, etc.)
3. Use `Base` layout: `TimelinePage.Layout = Base`
4. Add to `pages` array in `components/Navbar.js` to show in navigation (optional)
5. Add content data to `data/timeline.js` if needed

**New Reusable Component:**
1. Create `components/YourComponent.js`
2. Define with `styled()` from stitches.config if visual styles needed
3. Export as default
4. Use in pages/layouts by importing

**New Utility Function:**
1. Add to appropriate file in `lib/` based on category:
   - Content processing → `blog.js`
   - API/form → `api-middleware.js`
   - Content sanitization → `sanitize.js`
   - Or create new file if doesn't fit existing categories
2. Export as named function
3. Import in pages/API routes that need it

**New Data Source:**
1. Create `data/{resource}.js` with array of objects
2. Export as default
3. Import in relevant page: `import items from '../data/{resource}'`
4. Use in `getStaticProps` to pass to component

**New API Endpoint:**
1. Create `pages/api/{resource}.js`
2. Export default async function: `export default async function handler(req, res) {}`
3. Check `req.method` first
4. Import middleware from `lib/api-middleware.js` for common patterns (rate limiting, validation)
5. Return `res.status(code).json(data)`

**New Page-specific Component (not reused):**
- Can go in `pages/` as a child component or inline in the page file
- Or create in `components/` if it's logically grouped with other components
- Preferred: keep in `components/` for better organization

## Special Directories

**public/static/**
- Purpose: Static file serving without Next.js processing
- Generated: No (manually maintained)
- Committed: Yes
- Access: Via `/static/...` URL path in production
- Contents: Fonts (woff2 format), images, CSS (Prism syntax highlighting)

**.next/**
- Purpose: Next.js build output
- Generated: Yes (created by `npm run build`)
- Committed: No (.gitignore prevents)
- Contents: Compiled pages, chunks, manifests, server-side code
- Regenerate: Run `npm run build`

**articles/**
- Purpose: Source content for blog posts
- Generated: No (manually created Markdown files)
- Committed: Yes
- Contents: Only `.md` files with frontmatter
- Extension point: Add new articles without code changes

**data/**
- Purpose: JSON-serializable content for pages
- Generated: No (manually maintained JS objects)
- Committed: Yes
- Contents: `*.js` files exporting arrays/objects
- Pattern: Mirrored in `pages/` structure (data/projects.js → pages/projects.js)

## Import Patterns

**Absolute imports not configured** - All imports are relative:
- `import Component from '../components/Component'`
- `import { func } from '../lib/utils'`
- `import data from '../data/projects'`

**Common patterns:**
```javascript
// Pages import from all layers
import Head from 'next/head'
import { styled } from '../stitches.config'
import Layout from '../layouts/Base'
import Component from '../components/Component'
import { functionName } from '../lib/blog'
import data from '../data/projects'

// Components import styles and dependencies
import { styled } from '../stitches.config'
import Link from 'next/link'
import { motion } from 'framer-motion'

// Lib imports only external packages
import DOMPurify from 'isomorphic-dompurify'
import matter from 'gray-matter'
import validator from 'validator'
```

## Responsive Breakpoints

Defined in `stitches.config.js`, used with `@bp1`, `@bp2`, `@bp3`, `@bp4` syntax:

- `bp1`: `(min-width: 425px)` - Small tablet
- `bp2`: `(min-width: 760px)` - Desktop (primary layout shift)
- `bp3`: `(max-width: 780px)` - Mobile navigation scroll
- `bp4`: `(max-width: 1024px)` - Medium mobile/tablet

Example:
```javascript
const Component = styled('div', {
  padding: '20px',
  '@bp2': { padding: '40px' }  // Larger padding on desktop
})
```

## Environment Variables

Required (set in `.env.local` and Vercel):
- `RESEND_API_KEY`: Email service API key
- `RESEND_DESTINATION_EMAIL`: Where contact form emails are sent

No `.env` file is committed (check `.gitignore`). Vercel manages secrets in production.
