'use strict';

const fs = require('fs');
const path = require('path');
const { renderHeader } = require('./headers');
const { extractBlock } = require('./extract-block');

const ROOT = path.join(__dirname, '..', '..');

function readSrc(relPath) {
    return fs.readFileSync(path.join(ROOT, relPath), 'utf8');
}

// Strips the trailing `module.exports = ...;` line(s) so the extracted
// core/feature source can be inlined into a userscript IIFE — Tampermonkey
// scripts run flat, with no CommonJS module system available.
function stripExports(src) {
    return src.replace(/\nmodule\.exports\s*=[\s\S]*$/, '\n');
}

function buildHeader(target, manifest) {
    const rows = target.headerRows.map(r => ({
        ...r,
        value: r.value === '$ICON$' ? manifest.icon : r.value,
    }));
    // target.eol comes from manifest.json (JSON round-tripped) — eol must be
    // threaded explicitly like this, never assumed or read off `rows` itself
    // (see Task 2's Global Constraints note: rows loses non-enumerable/hidden
    // properties across .map()/JSON serialization).
    return renderHeader(rows, target.eol);
}

// The bundle's Shared object is an object literal (`const Shared = { ... }`),
// so each core utility must be spliced in as a method-shorthand member
// ("waitFor(...) {...}"), not a standalone "function waitFor(...) {...}"
// declaration — same rule Step 3 already applies to the feature block below.
function toMethodForm(extracted) {
    return extracted.replace(/^function\s+/, '');
}

function buildBundle(manifest) {
    const target = manifest.targets.bundle;
    let out = readSrc(target.template);
    out = out.replace('/*__HEADER__*/', buildHeader(target, manifest));

    const core = readSrc('src/shared/core.js');
    out = out.replace('/*__CORE_WAITFOR__*/', toMethodForm(extractBlock(core, 'function waitFor(')));
    out = out.replace('/*__CORE_ESCAPEHTML__*/', toMethodForm(extractBlock(core, 'function escapeHtml(')));
    out = out.replace('/*__CORE_INJECTSTYLE__*/', toMethodForm(extractBlock(core, 'function injectStyle(')));
    out = out.replace('/*__CORE_WARN__*/', toMethodForm(extractBlock(core, 'function warn(')));
    out = out.replace('/*__CORE_PORTALURL__*/', toMethodForm(extractBlock(core, 'function portalUrl(')));

    const feature = stripExports(readSrc('src/features/unenteredSessions.js'));
    // The bundle wants the method-shorthand form ("unenteredSessions(S) {...}"),
    // not a standalone "function unenteredSessions(S) {...}" declaration.
    const methodForm = feature.trim().replace(/^function unenteredSessions\(/, 'unenteredSessions(');
    out = out.replace('/*__FEATURE_UNENTERED_SESSIONS__*/', methodForm);

    // This repo has core.autocrlf=true: git normalizes tracked text files to
    // LF in the object store (and in `git show` output) regardless of what
    // CRLF/LF mix appears in the checked-out working copy. The header render
    // above used target.eol (CRLF, per manifest — reflecting the on-disk
    // working-copy encoding of the source files it was parsed from), and the
    // spliced-in core/feature content is native CRLF too. Normalize the whole
    // bundle to LF here so the written file is byte-identical to what git
    // actually has committed, not to the CRLF form Windows shows on checkout.
    out = out.replace(/\r\n|\n/g, '\n');

    fs.writeFileSync(path.join(ROOT, target.outputPath), out);
}

function buildStandalone(name, manifest) {
    const target = manifest.targets[name];
    let out = readSrc(target.template);
    // Split on target.eol (not a hardcoded '\n') — buildHeader renders with
    // target.eol, and standalone.template.js's own bookend lines are LF
    // (hand-written); the final normalization pass below reconciles both.
    out = out.replace('/*__HEADER_ROWS__*/', buildHeader(target, manifest).split(target.eol).slice(1, -1).join(target.eol));
    out = out.replace('/*__CORE__*/', stripExports(readSrc('src/shared/core.js')).trim());
    // Trim only trailing whitespace here — the bootstrap file's own leading
    // indentation (it sits outside the feature function, at the template's
    // top level) is significant and must survive verbatim; a plain .trim()
    // would also eat that leading indent.
    const bootstrap = target.bootstrap
        ? readSrc(target.bootstrap).replace(/\s+$/, '')
        : `    ${target.feature}(S);`;
    out = out.replace('/*__FEATURE__*/', stripExports(readSrc(`src/features/${target.feature}.js`)).trim() + `\n\n${bootstrap}`);
    // Final normalization: standalone.template.js's own literal lines are LF,
    // but the header/core/feature content spliced in above is CRLF (native
    // to every real source file in this repo) — without this, the output
    // would have mixed line endings. Collapse every line ending to target.eol
    // uniformly, once, at the very end.
    out = out.replace(/\r\n|\n/g, target.eol);
    fs.writeFileSync(path.join(ROOT, target.outputPath), out);
}

function main() {
    const manifest = JSON.parse(readSrc('src/meta/manifest.json'));
    buildBundle(manifest);
    buildStandalone('unenteredSessions', manifest);
    console.log('build complete.');
}

main();
