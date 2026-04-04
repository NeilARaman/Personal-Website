// Build script: generates all static pages, sitemap.xml, and robots.txt
const fs = require('fs');
const matter = require('gray-matter');
const { marked } = require('marked');

const SITE = 'https://neilraman.com';
const pages = []; // collect URLs for sitemap

// --- Helpers ---

function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function escapeHtml(str) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function sanitizeUrl(url) {
  if (/^https?:\/\//i.test(url)) return url;
  return 'https://' + url;
}

function head({ title, description, path, type = 'website' }) {
  const url = SITE + path;
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeAttr(description)}">
  <link rel="canonical" href="${url}">
  <meta property="og:title" content="${escapeAttr(title)}">
  <meta property="og:description" content="${escapeAttr(description)}">
  <meta property="og:url" content="${url}">
  <meta property="og:type" content="${type}">
  <meta property="og:site_name" content="Neil Raman">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${escapeAttr(title)}">
  <meta name="twitter:description" content="${escapeAttr(description)}">
  <link rel="stylesheet" href="/style.css">
</head>`;
}

function nav() {
  return `
<body>
  <a href="#main" class="skip-link">Skip to main content</a>
  <nav aria-label="Main navigation">
    <a href="/">Neil Raman</a>
    <div>
      <a href="/articles">Articles</a>
      <a href="/tools">Tools</a>
    </div>
  </nav>`;
}

// --- Tools page ---

const toolsSrc = fs.readFileSync('./data/tools.js', 'utf8');
const cleanSrc = toolsSrc.replace(/export default tools\s*;?/, '').replace(/^const tools = /, 'var tools = ');
eval(cleanSrc);

let toolsHtml = head({
  title: 'Tools — Neil Raman',
  description: 'Tools and resources curated by Neil Raman.',
  path: '/tools',
});
toolsHtml += nav();
toolsHtml += `\n  <main id="main" class="tools-page">\n    <h1>Tools</h1>\n`;

for (const category of tools) {
  const slug = slugify(category.title);
  const count = category.stack.length;
  toolsHtml += `    <section class="tool-category" id="${slug}">\n`;
  toolsHtml += `      <h2>${escapeHtml(category.title)} <span>${count}</span></h2>\n`;
  toolsHtml += `      <ul>\n`;
  for (const tool of category.stack) {
    const title = tool.description ? ` title="${escapeAttr(tool.description)}"` : '';
    const url = sanitizeUrl(tool.url);
    toolsHtml += `        <li><a href="${escapeAttr(url)}"${title} target="_blank" rel="noopener">${escapeHtml(tool.name)}</a></li>\n`;
  }
  toolsHtml += `      </ul>\n`;
  toolsHtml += `    </section>\n`;
}

toolsHtml += `  </main>\n</body>\n</html>\n`;

fs.mkdirSync('./tools', { recursive: true });
fs.writeFileSync('./tools/index.html', toolsHtml);
pages.push('/tools');
console.log('Built tools/index.html');

// --- Article pages ---

const renderer = new marked.Renderer();
renderer.link = function({ href, title, text }) {
  const titleAttr = title ? ` title="${escapeAttr(title)}"` : '';
  if (href && (href.startsWith('http://') || href.startsWith('https://'))) {
    return `<a href="${escapeAttr(href)}"${titleAttr} target="_blank" rel="noopener">${text}</a>`;
  }
  return `<a href="${escapeAttr(href)}"${titleAttr}>${text}</a>`;
};
marked.setOptions({ renderer });

const articleFiles = fs.readdirSync('./articles').filter(f => f.endsWith('.md'));

for (const file of articleFiles) {
  const articleSrc = fs.readFileSync(`./articles/${file}`, 'utf8');
  const { data, content } = matter(articleSrc);
  const slug = file.replace(/\.md$/, '');
  const articleBody = marked.parse(content);
  const dateStr = new Date(data.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });

  let articleHtml = head({
    title: `${data.title} — Neil Raman`,
    description: data.description || '',
    path: `/${slug}`,
    type: 'article',
  });
  articleHtml += nav();
  articleHtml += `
  <main id="main" class="article">
    <header class="article-header">
      <h1 class="article-title">${escapeHtml(data.title)}</h1>
      <time datetime="${data.date}">${dateStr}</time>
    </header>
    ${articleBody}
  </main>
</body>
</html>
`;

  fs.mkdirSync(`./${slug}`, { recursive: true });
  fs.writeFileSync(`./${slug}/index.html`, articleHtml);
  pages.push(`/${slug}`);
  console.log(`Built ${slug}/index.html`);
}

// --- Sitemap ---

pages.push('/');
pages.push('/articles');

const today = new Date().toISOString().split('T')[0];
let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
for (const p of pages) {
  sitemap += `  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod></url>\n`;
}
sitemap += `</urlset>\n`;

fs.writeFileSync('./sitemap.xml', sitemap);
console.log('Built sitemap.xml');

// --- robots.txt ---

fs.writeFileSync('./robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`);
console.log('Built robots.txt');
