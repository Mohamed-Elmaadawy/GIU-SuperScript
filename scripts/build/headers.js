'use strict';

const HEADER_START = '// ==UserScript==';
const HEADER_END = '// ==/UserScript==';

// Splits "// @key<padding>value" into { raw: "// @key<padding>", value }.
// raw + value === original line, always.
const ROW_RE = /^(\/\/ @\S+[ \t]*)(.*)$/;

function parseHeader(source) {
    const startIdx = source.indexOf(HEADER_START);
    if (startIdx === -1) throw new Error('no ==UserScript== block found');
    const endIdx = source.indexOf(HEADER_END, startIdx);
    if (endIdx === -1) throw new Error('no ==/UserScript== block found');
    const headerText = source.slice(startIdx, endIdx + HEADER_END.length);
    // Detect the header's own line-ending style so render() can reproduce it
    // byte-for-byte. Real files in this repo are CRLF; test fixtures are LF.
    const eol = headerText.includes('\r\n') ? '\r\n' : '\n';
    const lines = headerText.split(/\r\n|\n/).slice(1, -1); // drop the ==...== bookends
    const rows = lines.map(line => {
        const m = ROW_RE.exec(line);
        if (!m) throw new Error(`unrecognized header line: ${line}`);
        return { raw: m[1], value: m[2] };
    });
    return { rows, headerText, eol };
}

function renderHeader(rows, eol = '\n') {
    const body = rows.map(r => r.raw + r.value).join(eol);
    return `${HEADER_START}${eol}${body}${eol}${HEADER_END}`;
}

module.exports = { parseHeader, renderHeader };
