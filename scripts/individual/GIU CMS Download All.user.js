// ==UserScript==
// @name         GIU CMS Download All
// @description  Adds a "Download all" button to CMS course pages (GIU Cairo and GIU Berlin) that saves every file in one zip, named by content title
// @match        https://cms.giu-uni.de/apps/staff/StudentCourseView.aspx*
// @match        https://cms.giu-berlin.de/apps/staff/StudentCourseView.aspx*
// @namespace    Cyn0
// @version      4.10.1
// @updateURL    https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20CMS%20Download%20All.js
// @downloadURL  https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20CMS%20Download%20All.js
// @icon         data:image/png;base64,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
// @author       Mo.Elmaadawy
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const BUTTON_ID = 'gius-cms-download-all';
    if (document.getElementById(BUTTON_ID)) return;

    function cleanName(text) {
        return text.replace(/[\\/:*?"<>|\u0000-\u001f]/g, '-')
            .replace(/\s+/g, ' ')
            .trim()
            .replace(/[. ]+$/, '');
    }

    function labelText(suffix) {
        const el = document.getElementById('ContentPlaceHolderright_ContentPlaceHoldercontent_' + suffix);
        return el ? el.textContent : '';
    }

    // "(|ICS504|) Machine Learning (2620)" + "Winter 2025" on cms.giu-uni.de
    // -> "GIU - ICS504 Machine Learning - Winter 2025.zip" ("GIU Berlin - …" on cms.giu-berlin.de)
    function zipName() {
        const campus = /giu-berlin\.de$/i.test(location.hostname) ? 'GIU Berlin' : 'GIU';
        const course = cleanName(labelText('LabelCourseName').replace(/[(|)]+([^|]+)[|)]+/, '$1').replace(/\(\d+\)\s*$/, ''));
        const season = cleanName(labelText('LabelseasonName'));
        return campus + ' - ' + (course || 'Course files') + (season ? ' - ' + season : '') + '.zip';
    }

    // Folder per week: its Description ("Week 11"), else its date ("2025-12-2").
    function weekFolder(card) {
        let desc = '';
        card.querySelectorAll('.p-3 > div').forEach(div => {
            const head = div.querySelector('strong');
            if (!desc && head && head.textContent.trim() === 'Description') {
                const p = div.querySelector('p');
                desc = p ? p.textContent : '';
            }
        });
        const date = (card.querySelector('.card-header h2') || {}).textContent || '';
        return cleanName(desc) || cleanName(date.replace(/^\s*Week:\s*/, '')) || 'Other';
    }

    // Each content item has one "Download Content" link (a.contentbtn) and a
    // title in #content<id> > strong, e.g. "3 - Practice Assignment 10".
    function collectFiles() {
        const seen = new Set();
        const used = new Map();
        const files = [];
        document.querySelectorAll('a.contentbtn[href]').forEach(link => {
            const url = link.href;
            if (!/\/Uploads\//i.test(url) || seen.has(url)) return;
            seen.add(url);
            const card = link.closest('.weeksdata');
            const folder = card ? weekFolder(card) : 'Other';
            const titleEl = document.querySelector('#content' + link.dataset.contentid + ' > strong');
            const title = cleanName((titleEl ? titleEl.textContent : '').replace(/^\s*\d+\s*-\s*/, ''))
                || decodeURIComponent(url.split('/').pop().replace(/\.[^.]*$/, ''));
            const ext = (url.split('?')[0].match(/\.[a-z0-9]{1,8}$/i) || [''])[0];
            // Same title twice in a week (e.g. a re-uploaded file) -> "Name (2).pdf".
            const key = (folder + '/' + title + ext).toLowerCase();
            const n = (used.get(key) || 0) + 1;
            used.set(key, n);
            const name = title + (n > 1 ? ` (${n})` : '') + ext;
            files.push({ url, name, path: folder + '/' + name });
        });
        return files;
    }

    // ── Minimal zip writer: STORE only (PDFs and zips do not shrink further) ──
    const CRC_TABLE = (() => {
        const t = new Uint32Array(256);
        for (let n = 0; n < 256; n++) {
            let c = n;
            for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1;
            t[n] = c >>> 0;
        }
        return t;
    })();

    function crc32(bytes) {
        let c = 0xffffffff;
        for (let i = 0; i < bytes.length; i++) c = CRC_TABLE[(c ^ bytes[i]) & 0xff] ^ (c >>> 8);
        return (c ^ 0xffffffff) >>> 0;
    }

    function buildZip(entries) {
        const enc = new TextEncoder();
        const now = new Date();
        const time = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
        const date = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();
        const parts = [];
        const central = [];
        let offset = 0;
        entries.forEach(({ path, data }) => {
            const name = enc.encode(path);
            const crc = crc32(data);
            const local = new DataView(new ArrayBuffer(30));
            local.setUint32(0, 0x04034b50, true);
            local.setUint16(4, 20, true);
            local.setUint16(6, 0x0800, true); // UTF-8 names
            local.setUint16(10, time, true);
            local.setUint16(12, date, true);
            local.setUint32(14, crc, true);
            local.setUint32(18, data.length, true);
            local.setUint32(22, data.length, true);
            local.setUint16(26, name.length, true);
            parts.push(local, name, data);

            const dir = new DataView(new ArrayBuffer(46));
            dir.setUint32(0, 0x02014b50, true);
            dir.setUint16(4, 20, true);
            dir.setUint16(6, 20, true);
            dir.setUint16(8, 0x0800, true);
            dir.setUint16(12, time, true);
            dir.setUint16(14, date, true);
            dir.setUint32(16, crc, true);
            dir.setUint32(20, data.length, true);
            dir.setUint32(24, data.length, true);
            dir.setUint16(28, name.length, true);
            dir.setUint32(42, offset, true);
            central.push(dir, name);
            offset += 30 + name.length + data.length;
        });
        const dirSize = central.reduce((s, p) => s + p.byteLength, 0);
        const end = new DataView(new ArrayBuffer(22));
        end.setUint32(0, 0x06054b50, true);
        end.setUint16(8, entries.length, true);
        end.setUint16(10, entries.length, true);
        end.setUint32(12, dirSize, true);
        end.setUint32(16, offset, true);
        return new Blob([...parts, ...central, end], { type: 'application/zip' });
    }

    function save(href, name) {
        const a = document.createElement('a');
        a.href = href;
        a.download = name;
        document.body.appendChild(a);
        a.click();
        a.remove();
    }

    const files = collectFiles();
    if (!files.length) return;

    const anchor = document.querySelector('.weeksdata');
    if (!anchor) return;

    const bar = document.createElement('div');
    bar.style.cssText = 'display:flex;align-items:center;justify-content:flex-end;gap:12px;margin:0 0 16px;';
    const status = document.createElement('span');
    status.className = 'text-muted';
    const button = document.createElement('button');
    button.type = 'button';
    button.id = BUTTON_ID;
    button.className = 'btn btn-primary';
    const label = `Download all files (${files.length})`;
    button.textContent = label;
    bar.append(status, button);
    anchor.parentNode.insertBefore(bar, anchor);

    button.addEventListener('click', async () => {
        button.disabled = true;
        status.textContent = '';
        const entries = [];
        const failed = [];
        for (let i = 0; i < files.length; i++) {
            button.textContent = `Fetching ${i + 1} of ${files.length}…`;
            try {
                const res = await fetch(files[i].url, { credentials: 'include' });
                if (!res.ok) throw new Error('HTTP ' + res.status);
                entries.push({ path: files[i].path, data: new Uint8Array(await res.arrayBuffer()) });
            } catch (err) {
                console.warn('[GIU CMS Download All]', files[i].path, err);
                failed.push(files[i]);
            }
        }
        if (entries.length) {
            button.textContent = 'Building zip…';
            const blobUrl = URL.createObjectURL(buildZip(entries));
            save(blobUrl, zipName());
            setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
        }
        // Files that could not be fetched still download on their own, under the server's name.
        failed.forEach(f => save(f.url, f.name));
        status.textContent = failed.length
            ? `Zipped ${entries.length} files. ${failed.length} could not be added and were downloaded separately.`
            : `Done: ${entries.length} files in one zip.`;
        button.textContent = label;
        button.disabled = false;
    });
})();
