---
phase: 1
slug: project-scaffold-and-design-system
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-03
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual verification + build smoke tests (no test framework for 3-page static site) |
| **Config file** | none — Wave 0 will not add a test framework |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && npx astro check` |
| **Estimated runtime** | ~5 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build` + visual check of dev server
- **Before `/gsd:verify-work`:** Full build + manual visual review of all design tokens rendering
- **Max feedback latency:** 5 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 01-01-01 | 01 | 1 | TECH-01 | smoke | `npm run build` — check output has no JS bundles | ❌ W0 | ⬜ pending |
| 01-01-02 | 01 | 1 | TECH-02 | smoke | `grep -c "styled-components\|emotion\|stitches" package.json` returns 0 | ❌ W0 | ⬜ pending |
| 01-02-01 | 02 | 1 | DESG-02 | smoke | `npm run build` — check font files in dist output | ❌ W0 | ⬜ pending |
| 01-02-02 | 02 | 1 | DESG-01 | manual | Visual check — off-white background renders | N/A | ⬜ pending |
| 01-02-03 | 02 | 1 | DESG-03 | manual | Visual check — headings progressively larger, spacing balanced | N/A | ⬜ pending |
| 01-02-04 | 02 | 1 | DESG-04 | manual | Visual check — navy dot element present | N/A | ⬜ pending |
| 01-03-01 | 03 | 1 | FOUN-04 | manual | View source of built index.html — verify semantic elements | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Astro project must exist before any build command works (Plan 01 creates it)
- [ ] Font .woff2 files downloaded and placed in `src/assets/fonts/`
- [ ] No automated test framework needed — `npm run build` is the primary validation

*Existing infrastructure covers remaining phase requirements via manual verification.*

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Off-white background renders correctly | DESG-01 | Visual color perception | Open dev server, verify warm cream background |
| Lora headings + Inter body display | DESG-02 | Font rendering is visual | Open dev server, inspect computed font-family |
| Type scale and spacing balanced | DESG-03 | Spacing "feel" is subjective | Check heading sizes, line-height, margins |
| Navy dot separator visible | DESG-04 | Design identity is visual | Verify dot appears as section separator |
| Semantic HTML structure | FOUN-04 | Structure validation | View page source, check for header/nav/main/footer |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 5s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
