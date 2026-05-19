# Dark Mode — Design Spec

**Date:** 2026-05-18
**Status:** Approved

---

## Overview

New standalone userscript that applies dark mode to the entire GIU portal (`https://portal.giu-uni.de/*`). Uses a CSS filter approach with targeted counter-filters to handle images and already-dark GIUS-injected panels. Preference persists across page loads via `localStorage`.

---

## Scope

- Covers the full GIU portal UI — native nav, tables, forms, headers — plus the injected GIUS panels from all other scripts.
- Does not modify any existing scripts.

---

## Architecture

Single file: `scripts/GIU Dark Mode.js`

| Property | Value |
|---|---|
| `@match` | `https://portal.giu-uni.de/*` |
| `@run-at` | `document-start` |
| `@name` | GIU Dark Mode |
| `@version` | 1.0 |

---

## Implementation

### 1. Early class application (no flash)

At script load — before DOM is ready — read `localStorage` and add `gius-dark` to `<html>` immediately:

```js
if (localStorage.getItem('gius-dark-mode') === '1') {
    document.documentElement.classList.add('gius-dark');
}
```

Running at `document-start` ensures the class is present before the browser paints, eliminating the light-flash on load.

### 2. CSS injection

One `<style id="gius-dm-styles">` injected on `DOMContentLoaded`. Rules:

```css
/* Apply inversion to whole page */
html.gius-dark {
    filter: invert(1) hue-rotate(180deg);
}

/* Counter-invert: images, video — restore original colors */
html.gius-dark img,
html.gius-dark video,
html.gius-dark iframe {
    filter: invert(1) hue-rotate(180deg);
}

/* Counter-invert: GIUS panels already use dark backgrounds (#272c33).
   Without this they become light when the page is inverted. */
html.gius-dark [class*="giug-card-header"],
html.gius-dark [class*="gius-card-header"] {
    filter: invert(1) hue-rotate(180deg);
}
```

### 3. Toggle UI — side tab

Fixed vertical tab pinned to the right edge of the viewport:

- Position: `fixed`, `right: 0`, `top: 50%`, `transform: translateY(-50%)`
- Shape: pill/rounded-left, `writing-mode: vertical-rl`
- Colors: yellow background (`#ffc107`), dark text (`#1a1a1a`) — matches GIUS design language
- Icon: `🌙` when light mode active, `☀️` when dark mode active
- Label text: `DARK` / `LIGHT`
- `z-index: 2147483647` (max) — always on top of portal and injected panels

### 4. Toggle logic

```js
function toggleDark() {
    const on = document.documentElement.classList.toggle('gius-dark');
    localStorage.setItem('gius-dark-mode', on ? '1' : '0');
    updateTabLabel(on);
}
```

`updateTabLabel` swaps the icon and text on the side tab.

---

## Data Flow

```
Script load (document-start)
  └─ read localStorage → apply class to <html> immediately

DOMContentLoaded
  ├─ inject <style> with filter rules
  └─ inject side tab button into <body>
       └─ click → toggleDark() → classList + localStorage
```

---

## Edge Cases

| Case | Handling |
|---|---|
| `localStorage` unavailable | Wrap in `try/catch`; fall back to no persistence (light mode default) |
| Script runs on page with existing dark GIUS headers | Counter-filter selectors cover `giug-*` and `gius-*` prefixes |
| Portal updates class names | Counter-filter uses `[class^=]` prefix match — resilient to minor renames |
| Multiple GIUS scripts injecting after dark mode | Their elements inherit `html.gius-dark` filter automatically; specific headers get counter-filtered via attribute selectors |

---

## Out of Scope

- Per-page dark mode memory
- Scheduled auto-dark (time-based)
- Custom color palette picker
