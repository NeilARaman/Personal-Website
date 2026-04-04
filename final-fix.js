const fs = require('fs');
const src = fs.readFileSync('./data/tools.js', 'utf8');
const clean = src.replace(/export default tools\s*;?/, '').replace(/^const tools = /, 'var tools = ');
eval(clean);

const catMap = {};
for (const cat of tools) catMap[cat.title] = cat.stack;

// === Step 1: Create new categories ===
tools.push({ title: 'AI Research Labs', stack: [] });
catMap['AI Research Labs'] = tools[tools.length - 1].stack;

tools.push({ title: 'AI Infrastructure', stack: [] });
catMap['AI Infrastructure'] = tools[tools.length - 1].stack;

// === Step 2: Rename Computational Biology -> Healthcare AI ===
const compBio = tools.find(c => c.title === 'Computational Biology');
if (compBio) compBio.title = 'Healthcare AI';

// === Step 3: Move tools ===
function move(name, from, to) {
  const fromCat = catMap[from];
  const toCat = catMap[to];
  if (!fromCat || !toCat) { console.log('ERROR cat: ' + from + ' or ' + to); return; }
  const idx = fromCat.findIndex(t => t.name === name);
  if (idx === -1) { console.log('SKIP: "' + name + '" not in "' + from + '"'); return; }
  toCat.push(fromCat.splice(idx, 1)[0]);
  console.log('MOVED: ' + name + ' → ' + to);
}

// Dissolve AI-Misc
move('BLACKBOX AI', 'Artificial Intelligence - Miscellaneous', 'Coding');
move('Prime Intellect', 'Artificial Intelligence - Miscellaneous', 'AI Research Labs');
move('Anchor', 'Artificial Intelligence - Miscellaneous', 'Web Browsers/Use');
move('Sana', 'Artificial Intelligence - Miscellaneous', 'Assistants');
move('TinyFish', 'Artificial Intelligence - Miscellaneous', 'Web Browsers/Use');
move('Softmax', 'Artificial Intelligence - Miscellaneous', 'AI Research Labs');
move('Wordware', 'Artificial Intelligence - Miscellaneous', 'Assistants');
move('Context', 'Artificial Intelligence - Miscellaneous', 'Assistants');
move('AIUC', 'Artificial Intelligence - Miscellaneous', 'Security');
move('Extend', 'Artificial Intelligence - Miscellaneous', 'Documents');
move('Fourmula.ai', 'Artificial Intelligence - Miscellaneous', 'AI Art');
move('Subconscious', 'Artificial Intelligence - Miscellaneous', 'AI Infrastructure');
move('Eragon', 'Artificial Intelligence - Miscellaneous', 'Data Analytics');
move('Browser Use', 'Artificial Intelligence - Miscellaneous', 'Web Browsers/Use');
move('Hornet', 'Artificial Intelligence - Miscellaneous', 'AI Infrastructure');
move('Ndea', 'Artificial Intelligence - Miscellaneous', 'AI Research Labs');
move('Deeptune', 'Artificial Intelligence - Miscellaneous', 'AI Infrastructure');
move('Aaru', 'Artificial Intelligence - Miscellaneous', 'Data Analytics');
move('Natural', 'Artificial Intelligence - Miscellaneous', 'Finance/Fintech');
move('Arena', 'Artificial Intelligence - Miscellaneous', 'AI Research Labs');
move('Brain Interfaces', 'Artificial Intelligence - Miscellaneous', 'AI Research Labs');
move('Essential AI', 'Artificial Intelligence - Miscellaneous', 'AI Research Labs');
move('Google X', 'Artificial Intelligence - Miscellaneous', 'AI Research Labs');
move('LABS.GOOGLE', 'Artificial Intelligence - Miscellaneous', 'AI Research Labs');
move('Periodic Labs', 'Artificial Intelligence - Miscellaneous', 'AI Research Labs');
move('The Way of Code', 'Artificial Intelligence - Miscellaneous', 'Guides');
move('Nozomio Labs', 'Artificial Intelligence - Miscellaneous', 'AI Infrastructure');
move('Generalist AI', 'Artificial Intelligence - Miscellaneous', 'AI Research Labs');

// Other moves
move('Conversion', 'Email', 'Marketing');
move('Datacurve', 'Data Analytics', 'Data Analytics'); // keep but note URL issue
move('Datavant', 'Data Analytics', 'Healthcare AI');
move('Legora Series D', 'Finance/Fintech', 'Law');
move('Legora', 'Documents', 'Law');
move('Tsenta', 'Recruiting', 'Assistants');
move('Chronicle', 'Developer Tools', 'Presentations');
move('foam', 'Developer Tools', 'Monitoring/Analytics');
move('Angus Emmerson', 'Media', 'Personal Websites');
move('TAO TAJIMA', 'Media', 'Personal Websites');
move('The Transformers', 'Media', 'Learning');
move('Playwright', 'Web Browsers/Use', 'Testing/QA');
move('Reworkd', 'Web Browsers/Use', 'Data Analytics');
move('Lightfern', 'Writing', 'Email');
move('Monaco', 'Sales/GTM/User Research', 'CRMs');
move('Sixtyfour', 'Sales/GTM/User Research', 'Data Analytics');
move('Ario', 'E-commerce', 'Data Analytics');
move('Bundui', 'Design', 'Developer Tools');
move('The Component Gallery', 'Design', 'Developer Tools');

// === Step 4: Remove the now-empty AI-Misc category ===
const aiMiscIdx = tools.findIndex(c => c.title === 'Artificial Intelligence - Miscellaneous');
if (aiMiscIdx !== -1) {
  if (tools[aiMiscIdx].stack.length === 0) {
    tools.splice(aiMiscIdx, 1);
    console.log('REMOVED empty: Artificial Intelligence - Miscellaneous');
  } else {
    console.log('WARNING: AI-Misc still has ' + tools[aiMiscIdx].stack.length + ' items');
    for (const t of tools[aiMiscIdx].stack) console.log('  - ' + t.name);
  }
}

// === Step 5: Remove duplicates within each category ===
let dupsRemoved = 0;
for (const cat of tools) {
  const seen = new Set();
  const before = cat.stack.length;
  cat.stack = cat.stack.filter(item => {
    const key = item.url.replace(/\/$/, '').toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
  const removed = before - cat.stack.length;
  if (removed > 0) {
    console.log('DEDUP: removed ' + removed + ' duplicate(s) in ' + cat.title);
    dupsRemoved += removed;
  }
}

// Also check for duplicate names across categories
const globalSeen = new Map();
for (const cat of tools) {
  for (const item of cat.stack) {
    const key = item.url.replace(/\/$/, '').toLowerCase();
    if (globalSeen.has(key)) {
      console.log('CROSS-DUP: "' + item.name + '" in "' + cat.title + '" also in "' + globalSeen.get(key) + '"');
    } else {
      globalSeen.set(key, cat.title);
    }
  }
}

// === Step 6: Sort categories in logical order, sort items alphabetically ===
const categoryOrder = [
  'Models', 'AI Research Labs', 'AI Infrastructure', 'Coding', 'Developer Tools',
  'Databases', 'Authentication', 'Testing/QA', 'Documentation',
  'Web Browsers/Use', 'GPUs on the Cloud', 'Domain Names',
  'Design', 'AI Art', 'Presentations',
  'Voice', 'Writing', 'Social Media/Video/UGC', 'Blogging',
  'Sales/GTM/User Research', 'CRMs', 'Customer Experience',
  'Marketing', 'Generative Engine Optimization', 'Email',
  'Data Analytics', 'Monitoring/Analytics', 'Documents',
  'Finance/Fintech', 'Banking', 'Accounting', 'Cap Table Management',
  'Law', 'Recruiting', 'Security', 'Defense Contracting',
  'E-commerce', 'PropTech',
  'Healthcare AI', 'Quantum Computing', 'Robotics',
  'Assistants', 'Event Planning', 'Aviation',
  'Accelerators', 'Programs/Scholarships',
  'Learning', 'Books', 'Guides', 'Principles', 'Building Resources',
  'Personal Websites', 'Media', 'Philanthropic Organizations',
];

tools.sort((a, b) => {
  const ai = categoryOrder.indexOf(a.title);
  const bi = categoryOrder.indexOf(b.title);
  if (ai === -1 && bi === -1) return a.title.localeCompare(b.title);
  if (ai === -1) return 1;
  if (bi === -1) return -1;
  return ai - bi;
});

for (const cat of tools) {
  cat.stack.sort((a, b) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
}

// === Step 7: Serialize and write ===
function serialize(data) {
  let out = 'const tools = [\n';
  for (const cat of data) {
    out += '  {\n';
    out += `    title: '${cat.title}',\n`;
    out += '    stack: [\n';
    for (const item of cat.stack) {
      out += '      {\n';
      out += `        name: '${item.name.replace(/'/g, "\\'")}',\n`;
      if (item.description) {
        out += `        description: '${item.description.replace(/'/g, "\\'")}',\n`;
      }
      out += `        url: '${item.url}',\n`;
      out += '      },\n';
    }
    out += '    ],\n';
    out += '  },\n';
  }
  out += ']\n\nexport default tools\n';
  return out;
}

fs.writeFileSync('./data/tools.js', serialize(tools));

// Print final summary
console.log('\n=== FINAL SUMMARY ===');
let total = 0;
for (const cat of tools) {
  console.log(`${cat.title}: ${cat.stack.length}`);
  total += cat.stack.length;
}
console.log(`\nTotal: ${total} tools across ${tools.length} categories`);
console.log(`Duplicates removed: ${dupsRemoved}`);
