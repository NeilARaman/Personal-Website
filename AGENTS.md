## Learned User Preferences

- Pasting a tool URL (optionally prefixed with "Add:") means add it to `data/tools.js` in the best-fit category, keep alphabetical order within the category, run `npm run build`, and report where it landed
- If a URL is already listed, say so and do not add a duplicate; offer a category move when the current placement seems wrong
- Prefer relocating a tool to another category when asked to move, rather than listing it in multiple categories
- Saying "push", "add and push", or "Great push" means commit the tools/build artifacts and push to origin (`main`)

## Learned Workspace Facts

- Tools catalog source of truth is `data/tools.js`; after edits, run `npm run build` and include regenerated `tools/index.html`, `search-index.json`, and `sitemap.xml` with commits
- Tool-addition commits follow `feat: add …` style (see recent `git log`)
