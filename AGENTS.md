# AGENTS.md — GIU SuperScript

Guidance for AI agents (Codex, Claude, etc.) working in this repo.

## Project conventions
- Userscripts (Tampermonkey, `// ==UserScript==` headers): the all-in-one bundle `scripts/GIU SuperScript.js` and `scripts/GIU Theme.js` live in `scripts/`; the 8 standalone feature scripts live in `scripts/individual/`.
- Version bumps: bump `@version` by **patch** (`0.0.1`), never minor. Sync the version in `README.md`. Auto-update only triggers when the new version is higher.
- Commits: do **not** add an AI co-author trailer.
- After editing any userscript, run `node --check "scripts/<file>.js"`.

---

## All-in-one `GIU SuperScript.js` merge — COMPLETE

All 8 individual userscripts are folded into `scripts/GIU SuperScript.js`. The notes below document the architecture and the fold pattern (useful when re-syncing a feature from its standalone source).

### Locked decisions (do not revisit)
- **GIU Theme stays SEPARATE** — needs `@run-at document-start` (FOUC), matches all pages. NOT in SuperScript.
- **Keep all old individual scripts** in `scripts/individual/`, untouched. Repo ≠ installed.
- **SuperScript = OR = individual scripts, NEVER both** — both `@match` the same pages → double widgets. README must warn users.
- Merged file: `@match portal.giu-uni.de/*`, `@run-at document-idle`, `@version 1.0.0` (patch-bump). Each feature keeps its internal version in a changelog comment.

### File architecture (IIFE in `scripts/GIU SuperScript.js`)
- `FEATURE_DEFAULTS` + `loadFeatureToggles()` → `FEATURES` (per-feature on/off, persisted in localStorage `gius-features`).
- `Shared` object — single impl of cross-script utils: `waitFor(selector, cb, {root,timeout})`, `escapeHtml`, `injectStyle(id,css)` (idempotent), `courses{map,lookup,has}` (294-course dataset), `warn`. (Unused members `ICON`, `PALETTE`, `onReady`, `qs/qsa`, `aspnet`, `log` were removed in v1.0.2 — re-add only with a caller.)
- `Features` object — one method per feature `name(S){...}`, receives `Shared` as `S`.
- `ROUTES[]` — `{id, test(pathname)}`. **Order matters**: `teachingLoad` before `proctorReminder` (both Home.aspx).
- `bootstrap` — loop ROUTES → `if(!FEATURES[id])skip` → `if(!test(path))skip` → `try{ fn(Shared) }catch{ warn }`. One feature crashing must not kill the rest.

### Fold pattern (per feature)
1. Read source `scripts/individual/GIU <Name>.js`.
2. Replace its stub `name(S){ S.log(...) }` in `Features` with the full body as a module function.
3. Drop the source's outer IIFE wrapper, its own path-check, and its outer try/catch (the bootstrap already handles path + isolation).
4. Keep everything else **VERBATIM** — styles, helpers as inner closures, test hooks (`window.__giuTeachingLoad`, etc.). Low-risk = minimal changes.
5. Optional util swap only where obvious (e.g. own style-injector → `S.injectStyle`).
6. `node --check "scripts/GIU SuperScript.js"` after every fold.
7. Hand to the user for browser verification with explicit pass criteria. **Wait for "pass" before the next fold.**

### Progress — all 8 folded & verified working
`manageGroupGrades`, `teachingLoad`, `proctorReminder`, `notificationBatch`, `studentAttendance`, `uploadGrades`, `staffAttendance`, `proctorAggregator`. Standalone sources remain in `scripts/individual/` for diffing/re-folds.

### Bugs found & fixed during folding (Home.aspx, TL+PR)
- **Order flip-flop**: both widgets inserted `afterend` of the same `#MainContent_div_grid`; whichever async fetch resolved last re-inserted on top → nondeterministic. **Fix**: `proctorReminder.ensureHost` now anchors after `#gius-tl-widget` when present → converges to grid → TL → PR.
- **Slow-to-appear lag**: both used `setTimeout(boot, HOME_BOOT_DELAY_MS=800)`. **Fix**: replaced with `S.waitFor('#MainContent_div_grid', bootOnce, {timeout:3200})` + `setTimeout(bootOnce, 3200)` fallback + a `booted` guard. Fires immediately when the grid is present at document-idle.

### Deferred cleanup (do AFTER all folds, not during)
- Course-data dedupe: `COURSE_NAMES` is duplicated across `teachingLoad` + `notificationBatch` (+others) → consolidate into `Shared.courses.map`.
- `esc`/`escapeHtml` duplicated per module → could swap to `S.escapeHtml` (NOTE: local `esc` does not encode `'`, but `S.escapeHtml` does — confirm no behavior change before swapping).
- `Shared.PALETTE` still empty; Catppuccin Mocha dark tokens are inlined in per-feature CSS.

### Remaining TODO after all folds
- Add a SuperScript row to `README.md` + the "install OR individual, not both" warning.
- Verify the toggle config works per feature.
- Final full-page test across all matched pages.
