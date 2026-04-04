// Simple build script: generates tools/index.html and introducing-foundry/index.html
const fs = require('fs');
const path = require('path');

// --- Tools page ---
const toolsSrc = fs.readFileSync('./data/tools.js', 'utf8');
// Strip ES module syntax so we can eval it
const cleanSrc = toolsSrc.replace(/export default tools\s*;?/, '').replace(/^const tools = /, 'var tools = ');
eval(cleanSrc);

// Generate slugified id from category title
function slugify(str) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

// Escape HTML for title attributes
function escapeAttr(str) {
  return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

let toolsHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Tools — Neil Raman</title>
  <meta name="description" content="Tools and resources curated by Neil Raman.">
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <nav>
    <a href="/">Neil Raman</a>
    <div>
      <a href="/articles">Articles</a>
      <a href="/tools">Tools</a>
    </div>
  </nav>
  <main class="tools-page">
    <h1>Tools</h1>
`;

for (const category of tools) {
  const slug = slugify(category.title);
  const count = category.stack.length;
  toolsHtml += `    <section class="tool-category" id="${slug}">\n`;
  toolsHtml += `      <h2>${category.title} <span>${count}</span></h2>\n`;
  toolsHtml += `      <ul>\n`;
  for (const tool of category.stack) {
    const title = tool.description ? ` title="${escapeAttr(tool.description)}"` : '';
    toolsHtml += `        <li><a href="${tool.url}"${title} target="_blank" rel="noopener">${tool.name}</a></li>\n`;
  }
  toolsHtml += `      </ul>\n`;
  toolsHtml += `    </section>\n`;
}

toolsHtml += `  </main>\n</body>\n</html>\n`;

fs.mkdirSync('./tools', { recursive: true });
fs.writeFileSync('./tools/index.html', toolsHtml);
console.log('Built tools/index.html');

// --- Article page ---
const matter = require('gray-matter');
const { marked } = require('marked');

const articleSrc = fs.readFileSync('./articles/introducing-foundry.md', 'utf8');
const { data, content } = matter(articleSrc);

const articleBody = marked.parse(content);

const articleHtml = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${data.title} — Neil Raman</title>
  <meta name="description" content="${data.description}">
  <meta property="og:title" content="${data.title}">
  <meta property="og:description" content="${data.description}">
  <link rel="stylesheet" href="/style.css">
</head>
<body>
  <nav>
    <a href="/">Neil Raman</a>
    <div>
      <a href="/articles">Articles</a>
      <a href="/tools">Tools</a>
    </div>
  </nav>
  <main class="article">
    <header class="article-header">
      <h1 class="article-title">${data.title}</h1>
      <time>${new Date(data.date).toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</time>
    </header>
    ${articleBody}
  </main>
</body>
</html>
`;

fs.mkdirSync('./introducing-foundry', { recursive: true });
fs.writeFileSync('./introducing-foundry/index.html', articleHtml);
console.log('Built introducing-foundry/index.html');
