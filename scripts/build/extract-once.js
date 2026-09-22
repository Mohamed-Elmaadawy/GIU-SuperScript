// scripts/build/extract-once.js
'use strict';

const fs = require('fs');
const path = require('path');
const { extractBlock } = require('./extract-block');
const { parseHeader, renderHeader } = require('./headers');

const ROOT = path.join(__dirname, '..', '..');
const BUNDLE_PATH = path.join(ROOT, 'scripts', 'GIU SuperScript.js');
const STANDALONE_PATH = path.join(ROOT, 'scripts', 'individual', 'GIU Not Entered Sessions.js');

function main() {
    const bundleSrc = fs.readFileSync(BUNDLE_PATH, 'utf8');
    const standaloneSrc = fs.readFileSync(STANDALONE_PATH, 'utf8');

    // ── 1. Headers ──────────────────────────────────────────────────
    // Both real files are CRLF (confirmed via `file scripts/*.js`); parseHeader
    // returns eol explicitly per file — thread it into the manifest below so
    // build.js can pass it back to renderHeader. Never assume '\n'.
    const bundleHeader = parseHeader(bundleSrc);
    const standaloneHeader = parseHeader(standaloneSrc);

    // Both scripts embed the identical icon data URI. Dedupe it: store it
    // once at the manifest's top level, and replace its value in each
    // target's row list with the sentinel "$ICON$" (build.js substitutes
    // it back in when rendering).
    const iconRow = bundleHeader.rows.find(r => r.raw.includes('@icon'));
    const icon = iconRow.value;
    for (const rows of [bundleHeader.rows, standaloneHeader.rows]) {
        const row = rows.find(r => r.raw.includes('@icon'));
        if (row) row.value = '$ICON$';
    }

    // ── 2. Shared core functions (bundle only — this is their one home) ──
    const waitForSrc = extractBlock(bundleSrc, 'waitFor(selector, cb, { root = document, timeout = 15000 } = {})');
    const escapeHtmlSrc = extractBlock(bundleSrc, 'escapeHtml(str)');
    const injectStyleSrc = extractBlock(bundleSrc, 'injectStyle(id, css)');
    const warnSrc = extractBlock(bundleSrc, 'warn(feature, ...args)');

    // The 3 extracted bits are object-method shorthand ("name(args) {...}");
    // rewrite each to a standalone `function name(args) {...}` declaration
    // so core.js is plain, freestanding JS usable from both templates.
    const toFunctionDecl = (methodSrc, name) => methodSrc.replace(`${name}(`, `function ${name}(`);
    const coreFns = [
        toFunctionDecl(waitForSrc, 'waitFor'),
        toFunctionDecl(escapeHtmlSrc, 'escapeHtml'),
        toFunctionDecl(injectStyleSrc, 'injectStyle'),
        toFunctionDecl(warnSrc, 'warn'),
    ];
    const coreJs = coreFns.join('\n\n') + '\n\nmodule.exports = { waitFor, escapeHtml, injectStyle, warn };\n';

    // ── 3. Feature body (bundle only — the standalone's copy is discarded;
    //      the standalone template calls this same function with S) ──
    const featureSrc = extractBlock(bundleSrc, 'unenteredSessions(S) {');
    const featureJs = `function ${featureSrc}\n\nmodule.exports = unenteredSessions;\n`;

    // ── 4. Bundle template: bundle source with header + the 4 core method
    //      bodies + the feature body replaced by markers ──
    let bundleTemplate = bundleSrc;
    bundleTemplate = bundleTemplate.replace(bundleHeader.headerText, '/*__HEADER__*/');
    bundleTemplate = bundleTemplate.replace(waitForSrc, '/*__CORE_WAITFOR__*/');
    bundleTemplate = bundleTemplate.replace(escapeHtmlSrc, '/*__CORE_ESCAPEHTML__*/');
    bundleTemplate = bundleTemplate.replace(injectStyleSrc, '/*__CORE_INJECTSTYLE__*/');
    bundleTemplate = bundleTemplate.replace(warnSrc, '/*__CORE_WARN__*/');
    // featureSrc is exactly the substring extractBlock found in bundleSrc
    // (marker through matching closing brace) — replace it verbatim.
    bundleTemplate = bundleTemplate.replace(featureSrc, '/*__FEATURE_UNENTERED_SESSIONS__*/');

    // ── 5. Write everything ─────────────────────────────────────────
    fs.mkdirSync(path.join(ROOT, 'src', 'shared'), { recursive: true });
    fs.mkdirSync(path.join(ROOT, 'src', 'features'), { recursive: true });
    fs.mkdirSync(path.join(ROOT, 'src', 'meta'), { recursive: true });

    fs.writeFileSync(path.join(ROOT, 'src', 'shared', 'core.js'), coreJs);
    fs.writeFileSync(path.join(ROOT, 'src', 'features', 'unenteredSessions.js'), featureJs);
    fs.writeFileSync(path.join(ROOT, 'src', 'bundle.template.js'), bundleTemplate);

    const manifest = {
        icon,
        targets: {
            bundle: {
                outputPath: 'scripts/GIU SuperScript.js',
                template: 'src/bundle.template.js',
                headerRows: bundleHeader.rows,
                eol: bundleHeader.eol,
            },
            unenteredSessions: {
                outputPath: 'scripts/individual/GIU Not Entered Sessions.js',
                template: 'src/standalone.template.js',
                headerRows: standaloneHeader.rows.map(r =>
                    r.raw.includes('@version') ? { ...r, value: '1.0.1' } : r),
                eol: standaloneHeader.eol,
                feature: 'unenteredSessions',
            },
        },
    };
    fs.writeFileSync(path.join(ROOT, 'src', 'meta', 'manifest.json'), JSON.stringify(manifest, null, 2) + '\n');

    console.log('extract-once complete. Inspect src/ before running the build.');
}

main();
