'use strict';

// Given `text` and a literal `marker` string that appears once, returns the
// substring from `marker` through the matching closing brace of the first
// `{` at/after it. Depth-counts raw characters — good enough for our own
// source files, which don't have `{`/`}` inside string/regex literals at
// the marker sites this tool is used on.
function extractBlock(text, marker) {
    const start = text.indexOf(marker);
    if (start === -1) throw new Error(`marker not found: ${marker}`);
    // Skip past any parameter list (balanced parens) before treating a `{`
    // as the body's opening brace — a marker's own signature can contain
    // braces of its own (e.g. a destructured default parameter like
    // `(selector, cb, { root = document } = {})`), which must not be
    // mistaken for the real body-opening brace.
    let i = start;
    let parenDepth = 0;
    let seenParen = false;
    for (; i < text.length; i++) {
        if (text[i] === '(') { parenDepth++; seenParen = true; }
        else if (text[i] === ')') { parenDepth--; }
        else if (text[i] === '{' && (!seenParen || parenDepth === 0)) break;
    }
    if (i >= text.length || text[i] !== '{') throw new Error(`no opening brace after marker: ${marker}`);
    const braceStart = i;
    let depth = 0;
    for (i = braceStart; i < text.length; i++) {
        if (text[i] === '{') depth++;
        else if (text[i] === '}') {
            depth--;
            if (depth === 0) { i++; break; }
        }
    }
    if (depth !== 0) throw new Error(`unbalanced braces after marker: ${marker}`);
    return text.slice(start, i);
}

module.exports = { extractBlock };
