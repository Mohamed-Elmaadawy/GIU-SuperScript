// ==UserScript==
// @name        GIU Proctor Schedule Aggregator
// @description Aggregates all proctor exam assignments across departments into a live dashboard
// @match       https://portal.giu-uni.de/GIUb/INTStaff/ProctorExchange_m.aspx
// @namespace   Cyn0
// @version     4.6
// @updateURL    https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Proctor%20Schedule%20Aggregator.js
// @downloadURL  https://raw.githubusercontent.com/Mohamed-Elmaadawy/GIU-SuperScript/master/scripts/individual/GIU%20Proctor%20Schedule%20Aggregator.js
// @author      Mo.Elmaadawy
// @icon        data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACUCAMAAAAwLZJQAAAAzFBMVEX////VlyYkHiAAAADTHyj36ereiIr8/vzIGSPPAAj//fziu4HTlRbnyp3x49HRHSTTkgzw8PD29vbl5eXV1NRjX2HWY2vUr2zMAADn1rfJjguzsrMfGRsaEBPltLX6+u/OmB67u7vIyMgyLC5sbGycnJypqKmLi4tYWFh9e3wWExXkoJ1HRUaUkpM3NjY+Pj4PAAe/AADIDxPYGiAnJicZGhn27df17eDXqE329uBVYF7AZ2jZjGvOWgTNlSzf0J7lw7PWozvqxcLZsl8WTjZKAAAHBElEQVR4nO2Ya3fbNhJAIWG92tJ2YwzApg6kTQDhQagkpXZlR/t03fz//7QDgo71jqQ0Pf2Ae45tipKlq8FgMAAhmUwmk8lkMplMJpPJZDKZTCaTyWQymUwmk8lkMpnMqRTAENi4dXUV710xvB6979n+v3R39IcoMmGrdkyR2bgtLX/Rvfr5uzdvfvnlx7/i9fc3g8EAf27IltNtfOLuetR9A22CEWB84Cp4C2A5IbzBj3B4IRU+kEAuhCk/pXQyHibGE0rnIb4viv7tH39BkujdoONm+/9v75Jo9HcPgghFqONga/4gWWsJ8TUQTtHWU0W4v1RUVRMaJWcxoJNedkFtEn0TRb9bF73bEe0jWmC46qa7haLEVrBUfEoJr+YcP2WJomYmuL1MlFVJbjEtJee6XPaqi4OiuxF9FRVLjbacUBO4m7YOR712Tg8FKeNTnmFMXXGJp17SLoKzININYbrwDieHRG8+HMrRl4gGU8zQ15Z4oZSjllGhjawMCQAhDdW5qOWs86SvGQ6OdjQHRO+OiRJJFZhAqJe8aTl1FvNVEyorRjQV+Ju1/oKIihS9h5lYv8udRfRFooQ5dMRAKs4F4YIzgrNS8PgBmgkMB+Pne7I2xfNBHnrF+aLfgsLP0rwJB19ytqjWRMewCe20VFxJCUpiCYghBQwoaMIkJi4XcdY1Dd4W3VMkPkVA7ot3P/Dj4eF6cbaoMaSssGp6IanVikpVzLx6EAozlXmGOcyYMrXi+ELXclYHYpeYI6HAv5gmVO+xMIsuoGna/F6igYSpAVyLGJYjTVlB5g5w1s9bgaLQzHDSNwZLQ+APOgZLyHbOuSfgxxJFxa4Eo31tP5Ldl4h6MfOsFx0bA3VVKaKUWXIHQjqMd2MARTXFDwaKGVJVwhKlfdgvammfoUdWinPraBdRDFNwhA1jRPG9a7NUxOmifPBgjccSm0RFlEIzJ2CONcuHMBZ7Rcu0BtGDU36/6OALOTrCcVXUdemmqOBkaO0Dx2rH2pKVMKpC4UsojCnwS2HNLTym6NLwAKxuOFWcbTmweZpK433pe0z03fFZX2CHRJQgDNc6ERoPXkHQKk5vKTAo2oO0UDiMeeODxfmFGaAldjJEeWYavx1T0SbR+Z5gHxU91pR8C3TfJ1XHVor9ET0iyuMEwbKJ14wVHNJjJgReClGQQmsADgLXLR4H+YRlSiXRSbWdE18lGnDxEJ7ULnbJfMktvj1W/dpbUXmsnd41WtTChtrLUMaXfhE53iPK14BLRE0SbXGKSo1zOE6phruqIHyKVZ+3MVeXHLs2IHqmw7EoHREFM5x+RnyFaOmoUIIvcFNimCWytY63NjRQzhwTU+yjUZSYpfuyJ1Hj3RwFsxj3TBZfI1oRPw1RFNdMjcGtMSPn1Ri7vIa6z6JiX9XcQUzTrG/XXgym7+9jqHdEb06Y9aHGfZMj+NvQrnyzOW6YbM2At6oMOM8aG4deTYDsX4d26OvocL2OromOd0QfP4seqaPcBNsAMfG9BIulz+Pi7qrG8UrrWnvrucBB1HWMaH2KKKn6lWktT/qh3y/6cdDvmbY39ht1FAsSfo+Y9wBdlcI/8SYrGBSMxZoE2KlA9wp+0j5P0n42vb4awjyy3Cv6fpVCevfPrcp+ZsHHbfUo/Yy2x2Y/kESH64nS1SVRzfaJjq779ul+642+eYfv+/ap3LrP9ouS+37obw+LinKTf/37h03+83aT61O+Hav7LFWnib6M/erjQVFNt/j5x03+++HdBv876cxKpz3TpN5ccQ+Jkqe+I306KMrlFn/f4tf7LU47W+t751m9MfsOio6eb1Lr/HhI9CgX7JNfTYfd6NOhXlM9KEoen/uJ/7ReotZEQaUFOXW/sV/APeYI9/JYqsBz3NMzBd2k5xCnvThZXqUjnck4vNT9QtjYqe6N6Oh+kExvPt2/qI4+vh28RlSlL6yxo+O4UeYkbouJULxQTCmNs6E/k0nf6IyDKF52B47jybIKVsrG1G1X8cc7a338EuT7d32e3qze3t7fP12/XT0PXkV5atuAKx+PRyQHpwng1o4RAdxy3OVJZR0BJwFko/Q5h6UitAuKgz1ZdOeOqDmjdNF2zcqWKPL+enDXR/UuEk928erD81M8HxWNwxnkvONGWy8FY9ZK65RyMgSwTBN85J1srHLOSaf0WWeQQob5ek2ZGytF9w5XfXn5LDoixeP1qjfsFPFqdX17/9inQjxJF9jKYdQgralMq4LExZOnhMQWKh5oxzvnn5QCw3GyTdNYiW3k6zk+/JT47VU0HuY/3l9/Wq2eV6tPOP6PH7drIfZIsOYAB7rj4uIz8iNs5vzo4IM/HX9uu0wmk8lkMplMJpPJZDKZTCaTyWQymUwmk8lkMplMJpPJHOP/Lb7en38r1wIAAAAASUVORK5CYII=
// @run-at      document-idle
// @grant       none
// ==/UserScript==

(function () {
    'use strict';

function waitFor(selector, cb, { root = document, timeout = 15000 } = {}) {
            const existing = root.querySelector(selector);
            if (existing) { cb(existing); return () => {}; }
            const obs = new MutationObserver(() => {
                const el = root.querySelector(selector);
                if (el) { obs.disconnect(); cb(el); }
            });
            obs.observe(root.documentElement || root, { childList: true, subtree: true });
            if (timeout) setTimeout(() => obs.disconnect(), timeout);
            return () => obs.disconnect();
        }

function escapeHtml(str) {
            return String(str == null ? '' : str)
                .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
        }

function injectStyle(id, css) {
            let el = document.getElementById(id);
            if (!el) {
                el = document.createElement('style');
                el.id = id;
                (document.head || document.documentElement).appendChild(el);
            }
            el.textContent = css;
            return el;
        }

function warn(feature, ...args) { console.warn(`[GIU-SS:${feature}]`, ...args); }

function portalUrl(path) { return location.origin + path; }

// IIS's own error page (e.g. "401 - Unauthorized" after a failed sign-in):
// no portal markup at all, so nothing may be injected into it. Every real
// portal page is an ASP.NET WebForm, so it always has a <form>.
function isServerErrorPage() {
    if (document.querySelector('form')) return false;
    const h1 = document.querySelector('h1');
    return /^\s*[45]\d\d\s*-/.test(document.title) || (!!h1 && /server error/i.test(h1.textContent));
}

    // Server error page (e.g. IIS 401): no portal markup — inject nothing.
    if (isServerErrorPage()) return;

    const S = { waitFor, escapeHtml, injectStyle, warn, portalUrl };

function proctorAggregator(S) {
        
            const CACHE_KEY = 'giuProctorScheduleV1';
            const MAX_CONCURRENT = 20;
            const PAGE_URL = S.portalUrl('/GIUb/INTStaff/ProctorExchange_m.aspx');
        
            // ── Normalisation ─────────────────────────────────────────────────────────
        
            const TITLE_RE = /^(Miss|Ms\.|Mrs\.|Mr\.|Dr\.|Prof\.|Eng\.)\s*/i;
            function stripTitle(s) { return s ? s.replace(/ /g, ' ').trim().replace(TITLE_RE, '').trim() : s; }
            // "1:30 PM" → "13:30", the form the live schedule's slot keys use.
            function to24h(t) {
                const m = String(t || '').trim().match(/^(\d{1,2}):(\d{2})(?::\d{2})?\s*([AP]M)$/i);
                if (!m) return String(t || '').trim();
                let h = Number(m[1]) % 12;
                if (/p/i.test(m[3])) h += 12;
                return String(h).padStart(2, '0') + ':' + m[2];
            }

            function normalizeRow(r) {
                const p = stripTitle(r.proctor);
                const c = stripTitle(r.coverName);
                const patched = (p !== r.proctor || c !== r.coverName) ? { ...r, proctor: p, coverName: c } : r;
                // Rows from a CSV (or cached from one) have no 24h time key; "Take"
                // matches the live schedule by date|HH:MM, so rebuild it.
                if (patched.slotKey && !/[AP]M$/i.test(patched.slotKey)) return patched;
                const timeSort = patched.timeSort || to24h(patched.startTime);
                return { ...patched, timeSort, slotKey: (patched.dateKey || '') + '|' + timeSort };
            }
        
            // ── Cache ─────────────────────────────────────────────────────────────────
        
            function loadCache() {
                try { return JSON.parse(localStorage.getItem(CACHE_KEY)); }
                catch { return null; }
            }
        
            function saveCache(rows) {
                localStorage.setItem(CACHE_KEY, JSON.stringify({ rows, scrapedAt: new Date().toISOString() }));
            }

            function formatCacheAge(isoStr) {
                const scraped = new Date(isoStr);
                const today = new Date();
                const scrapedD = new Date(scraped.getFullYear(), scraped.getMonth(), scraped.getDate());
                const todayD = new Date(today.getFullYear(),   today.getMonth(),   today.getDate());
                const days = Math.round((todayD - scrapedD) / 86400000);
                if (days === 0) return 'today';
                if (days === 1) return '1 day ago';
                return `${days} days ago`;
            }
        
            // ── ASP.NET helpers ───────────────────────────────────────────────────────
        
            function extractFormState(doc) {
                const get = id => (doc.getElementById(id) || {}).value || '';
                return {
                    __VIEWSTATE: get('__VIEWSTATE'),
                    __VIEWSTATEGENERATOR: get('__VIEWSTATEGENERATOR'),
                    __EVENTVALIDATION: get('__EVENTVALIDATION'),
                };
            }
        
            async function doPostback(eventTarget, extraFields, baseState) {
                const state = baseState || extractFormState(document);
                const body = new URLSearchParams({
                    __EVENTTARGET: eventTarget,
                    __EVENTARGUMENT: '',
                    __LASTFOCUS: '',
                    __VIEWSTATE: state.__VIEWSTATE,
                    __VIEWSTATEGENERATOR: state.__VIEWSTATEGENERATOR,
                    __EVENTVALIDATION: state.__EVENTVALIDATION,
                    ...extraFields,
                });
                const resp = await fetch(PAGE_URL, {
                    method: 'POST',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                    body: body.toString(),
                });
                if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
                const html = await resp.text();
                if (html.includes('Login_m.aspx') || html.includes('id="LoginPage"')) {
                    throw new Error('SESSION_EXPIRED');
                }
                return new DOMParser().parseFromString(html, 'text/html');
            }
        
            // ── Parsers ───────────────────────────────────────────────────────────────
        
            function parseExamString(raw) {
                // "Mar 28 2026  1:30PM ---> GIU-Cairo.Informatics 4th - MATH403 Mathematics IV"
                // Campus prefix may use "." or "-" as separator (e.g. GIU-Cairo.Dept or GIU-Cairo-Dept)
                const stripCampus = s => s.replace(/^GIU-[^.-]*[.-]/, '').trim();
                // Course codes: 2-8 uppercase letters followed by 3-4 digits, optional trailing letter
                const COURSE_CODE = /^[A-Z]{2,8}[a-z]?\d{3,4}[A-Za-z]?$/;
        
                const parts = raw.split(' ---> ');
                if (parts.length < 2) return { courseCode: '', examName: raw.trim(), program: '' };
        
                const right = parts[1].trim();
                const segs = right.split(' - ');
                const program = stripCampus(segs[0]);
        
                if (segs.length === 1) {
                    // No " - " separator — try to find course code inside the segment
                    const words = program.split(/\s+/);
                    const codeIdx = words.findIndex(w => COURSE_CODE.test(w));
                    if (codeIdx !== -1) {
                        return {
                            program: words.slice(0, codeIdx).join(' '),
                            courseCode: words[codeIdx],
                            examName: words.slice(codeIdx + 1).join(' '),
                        };
                    }
                    return { courseCode: '', examName: right, program: '' };
                }
        
                // Join remaining segs (handles exam names that contain " - ")
                const rest = segs.slice(1).join(' ').trim();
                const words = rest.split(/\s+/);
                const codeIdx = words.findIndex(w => COURSE_CODE.test(w));
        
                if (codeIdx !== -1) {
                    return {
                        program,
                        courseCode: words[codeIdx],
                        examName: words.slice(codeIdx + 1).join(' ').replace(/^[-\s]+/, '').trim(),
                    };
                }
                return { courseCode: '', program, examName: rest };
            }
        
            function formatTime(str) {
                // "3/28/2026 1:30:00 PM" → "1:30 PM"
                const d = new Date(str);
                if (isNaN(d.getTime())) return str;
                return d.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true });
            }
        
            function formatDate(str) {
                // "3/28/2026 1:30:00 PM" → "Sat Mar 28"
                const d = new Date(str);
                if (isNaN(d.getTime())) return str;
                return d.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });
            }
        
            function parseDateKey(str) {
                // "3/28/2026 1:30:00 PM" → "2026-03-28" for sorting
                const d = new Date(str);
                if (isNaN(d.getTime())) return str;
                return d.toISOString().slice(0, 10);
            }
        
            // ── Concurrency pool ──────────────────────────────────────────────────────
        
            function runPool(tasks, worker, { isPaused = () => false, onSetResume = () => {}, shouldAbort = () => false } = {}) {
                return new Promise(resolve => {
                    if (!tasks.length) { resolve([]); return; }
                    let running = 0, index = 0;
                    const results = new Array(tasks.length);
        
                    function next() {
                        if (isPaused() || shouldAbort()) return;
                        while (running < MAX_CONCURRENT && index < tasks.length) {
                            if (shouldAbort()) return;
                            const i = index++;
                            running++;
                            worker(tasks[i], i)
                                .then(r  => { results[i] = r; })
                                .catch(() => { results[i] = null; })
                                .finally(() => {
                                    running--;
                                    if (index < tasks.length && !shouldAbort()) next();
                                    // Done, or stopped (expired session, cancelled fetch) with nothing in flight.
                                    if (running === 0 && (index >= tasks.length || shouldAbort())) resolve(results);
                                });
                        }
                    }
                    onSetResume(next);
                    next();
                });
            }
        
            // ── Scrape: Phase 1 — departments ─────────────────────────────────────────
        
            async function fetchDepartment(dept, baseState) {
                const doc = await doPostback(
                    'ctl00$MainContent$acdmcDpLst',
                    { 'ctl00$MainContent$acdmcDpLst': dept.value },
                    baseState
                );
                const deptState = extractFormState(doc);
                const table = doc.getElementById('MainContent_dprtmntDg');
                if (!table) return [];
                return Array.from(table.querySelectorAll('a')).map(a => {
                    const href = a.getAttribute('href') || '';
                    const match = href.match(/__doPostBack\('([^']+)'/);
                    return match ? { name: stripTitle(a.textContent.trim()), target: match[1], deptLabel: dept.label, state: deptState } : null;
                }).filter(Boolean);
            }
        
            // ── Scrape: Phase 2 — proctor schedules ───────────────────────────────────
        
            async function fetchProctorSchedule(proctor) {
                const doc = await doPostback(proctor.target, {}, proctor.state);
                const table = doc.getElementById('MainContent_schdlDg');
                if (!table) return [];
                const rows = [];
                Array.from(table.querySelectorAll('tr')).forEach((tr, i) => {
                    if (i === 0) return; // skip header
                    const tds = tr.querySelectorAll('td');
                    if (tds.length < 5) return;
                    const examRaw = tds[0].textContent.trim();
                    const hall = tds[1].textContent.trim();
                    const startRaw = tds[2].textContent.trim();
                    const endRaw = tds[3].textContent.trim();
                    const coverName = stripTitle(tds[4].textContent);
                    const { courseCode, examName, program } = parseExamString(examRaw);
                    const dateKey = parseDateKey(startRaw);
                    const timeSort = new Date(startRaw).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
                    rows.push({
                        proctor: proctor.name,
                        department: proctor.deptLabel,
                        examName,
                        courseCode,
                        program,
                        hall,
                        dateKey,
                        date: formatDate(startRaw),
                        startTime: formatTime(startRaw),
                        timeSort,
                        slotKey: dateKey + '|' + timeSort,
                        endTime: formatTime(endRaw),
                        coverName,
                    });
                });
                return rows;
            }
        
            // ── Proctoring Exchange (Take) ────────────────────────────────────────────
            // Replicates the portal's own flow: dept select → proctor click → exam click
            // (arms the form: server fills prctrIdHdn/cvrStfIdHdn and renders the confirm
            // widget) → final POST with rplcChk=on + setBtn. Everything is resolved fresh
            // at take-time by name/slot matching, so cached and CSV rows work too.
        
            function deptValueForLabel(label) {
                const deptEl = document.getElementById('MainContent_acdmcDpLst');
                if (!deptEl) return '';
                const want = (label || '').trim().toLowerCase();
                const opt = Array.from(deptEl.options).find(o => o.text.trim().toLowerCase() === want);
                return opt ? opt.value : '';
            }
        
            async function prepareExchange(row) {
                // Step 1 — select the department
                const deptValue = deptValueForLabel(row.department);
                if (!deptValue) throw new Error(`Department "${row.department}" not found on this page.`);
                const deptDoc = await doPostback(
                    'ctl00$MainContent$acdmcDpLst',
                    { 'ctl00$MainContent$acdmcDpLst': deptValue }
                );
        
                // Step 2 — click the proctor name (matched by title-stripped name)
                const wantName = stripTitle(row.proctor).toLowerCase();
                const proctorLink = Array.from(deptDoc.querySelectorAll('#MainContent_dprtmntDg a')).find(a =>
                    stripTitle(a.textContent.trim()).toLowerCase() === wantName
                );
                if (!proctorLink) throw new Error(`Proctor "${row.proctor}" not found in ${row.department}.`);
                const proctorTarget = ((proctorLink.getAttribute('href') || '').match(/__doPostBack\('([^']+)'/) || [])[1];
                if (!proctorTarget) throw new Error('Could not read the proctor link.');
                const schedDoc = await doPostback(
                    proctorTarget,
                    { 'ctl00$MainContent$acdmcDpLst': deptValue },
                    extractFormState(deptDoc)
                );
        
                // Step 3 — click the exam row (matched by date+time slot and hall)
                const examEntry = Array.from(schedDoc.querySelectorAll('#MainContent_schdlDg tr')).slice(1).map(tr => {
                    const tds = tr.querySelectorAll('td');
                    if (tds.length < 5) return null;
                    const startRaw = tds[2].textContent.trim();
                    const slotKey = parseDateKey(startRaw) + '|' +
                        new Date(startRaw).toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });
                    return { a: tds[0].querySelector('a'), slotKey, hall: tds[1].textContent.trim(), cover: stripTitle(tds[4].textContent) };
                }).find(x => x && x.slotKey === row.slotKey && x.hall === row.hall);
                if (!examEntry || !examEntry.a) throw new Error("This exam is no longer on the proctor's schedule. Refresh the data.");
        
                // Freshness check: someone may have already covered it since the last scrape
                if (examEntry.cover) {
                    // Reflect the fresh cover in our data so the table updates
                    markRowCovered(row, examEntry.cover);
                    throw new Error(`Already taken by ${examEntry.cover}.`);
                }
                const examTarget = ((examEntry.a.getAttribute('href') || '').match(/__doPostBack\('([^']+)'/) || [])[1];
                if (!examTarget) throw new Error('Could not read the exam link.');
                const confirmDoc = await doPostback(
                    examTarget,
                    {
                        'ctl00$MainContent$acdmcDpLst': deptValue,
                        'ctl00$MainContent$prctrIdHdn': '',
                        'ctl00$MainContent$cvrStfIdHdn': '',
                    },
                    extractFormState(schedDoc)
                );
        
                // Server fills the hidden ids and renders the confirm widget when armed
                const getEl = id => confirmDoc.getElementById(id);
                const prctrId  = (getEl('MainContent_prctrIdHdn')  || {}).value || '';
                const cvrStfId = (getEl('MainContent_cvrStfIdHdn') || {}).value || '';
                const nm = (getEl('MainContent_nmLbl')?.textContent || row.proctor).trim();
                const tm = (getEl('MainContent_tmLbl')?.textContent || `${row.date} ${row.startTime} ${row.hall}`).trim();
                if (!prctrId || !getEl('MainContent_setBtn')) {
                    const msg = (getEl('MainContent_msgLbl')?.textContent || '').trim();
                    throw new Error(msg || 'The portal did not offer a replacement for this exam.');
                }
                return { deptValue, prctrId, cvrStfId, nm, tm, state: extractFormState(confirmDoc) };
            }
        
            async function executeExchange(prep) {
                const doc = await doPostback('', {
                    'ctl00$MainContent$acdmcDpLst': prep.deptValue,
                    'ctl00$MainContent$prctrIdHdn': prep.prctrId,
                    'ctl00$MainContent$cvrStfIdHdn': prep.cvrStfId,
                    'ctl00$MainContent$rplcChk': 'on',
                    'ctl00$MainContent$setBtn': 'Proceed With Replacement',
                }, prep.state);
                return (doc.getElementById('MainContent_msgLbl')?.textContent || '').trim();
            }
        
            // ── Scrape orchestrator ───────────────────────────────────────────────────
        
            async function scrapeAll(cb, scope) {
                // cb: { onProgress(stats), onRows(rows), onError(type), onComplete(rows, stats),
                //       onAbort(), isCancelled() }
                // scope: optional { value, label } to fetch a single department; falsy = all
                const baseState = extractFormState(document);
                const deptEl = document.getElementById('MainContent_acdmcDpLst');
                let depts = Array.from(deptEl.options)
                    .filter(o => o.value !== '')
                    .map(o => ({ value: o.value, label: o.text.trim() }));
                if (scope && scope.value) {
                    depts = depts.filter(d => d.value === scope.value);
                }
        
                const stats = { depts: 0, totalDepts: depts.length, proctors: 0, exams: 0, failed: 0,
                                proctorsDone: 0, totalProctors: 0 };
                const allProctors = [];
                const allRows = [];
                const uniqueExams = new Set();
        
                let aborted = false;
                const poolCtrl = {
                    isPaused: () => _paused,
                    onSetResume: fn => { _resumeFn = fn; },
                        shouldAbort: () => aborted || !!(cb.isCancelled && cb.isCancelled()),
                    };
                    const stopped = () => aborted || !!(cb.isCancelled && cb.isCancelled());
        
                // Phase 1 — departments
                await runPool(depts, async dept => {
                    try {
                        const proctors = await fetchDepartment(dept, baseState);
                        allProctors.push(...proctors);
                        stats.depts++;
                        stats.proctors = allProctors.length;
                    } catch (e) {
                        if (e.message === 'SESSION_EXPIRED') { aborted = true; cb.onError('SESSION_EXPIRED'); throw e; }
                        stats.failed++;
                    }
                    cb.onProgress({ ...stats });
                }, poolCtrl);
        
                if (stopped()) { if (aborted && cb.onAbort) cb.onAbort(); return; }
                stats.totalProctors = allProctors.length;
        
                // Phase 2 — proctor schedules
                await runPool(allProctors, async proctor => {
                    try {
                        const rows = await fetchProctorSchedule(proctor);
                        allRows.push(...rows);
                        rows.forEach(r => uniqueExams.add(`${r.examName}|${r.slotKey}|${r.hall}`));
                        stats.exams = uniqueExams.size;
                    } catch (e) {
                        if (e.message === 'SESSION_EXPIRED') { aborted = true; cb.onError('SESSION_EXPIRED'); throw e; }
                        stats.failed++;
                    }
                    stats.proctorsDone++;
                    cb.onProgress({ ...stats });
                    cb.onRows([...allRows]);
                }, poolCtrl);
        
                if (stopped()) { if (aborted && cb.onAbort) cb.onAbort(); return; }
                // A fetch with failed requests is shown but never replaces the saved data.
                if (!stats.failed) saveCache(allRows);
                cb.onComplete(allRows, stats);
            }
        
            // ── Styles ────────────────────────────────────────────────────────────────
        
            function injectStyles() {
                if (document.getElementById('gius-proctor-styles')) return;
                const s = document.createElement('style');
                s.id = 'gius-proctor-styles';
                s.textContent = `
                    @keyframes giusSlideDown {
                        from { opacity: 0; transform: translateY(-14px); }
                        to   { opacity: 1; transform: translateY(0); }
                    }
                    @keyframes giusRowIn {
                        from { opacity: 0; transform: translateX(-8px); }
                        to   { opacity: 1; transform: translateX(0); }
                    }
                    @keyframes giusSpin {
                        to { transform: rotate(360deg); }
                    }
                    @keyframes giusRefreshPulse {
                        0%   { box-shadow: 0 0 0 0 rgba(27,89,198,0.45); }
                        70%  { box-shadow: 0 0 0 7px rgba(27,89,198,0); }
                        100% { box-shadow: 0 0 0 0 rgba(27,89,198,0); }
                    }
                    .gius-refresh-pulse {
                        animation: giusRefreshPulse 1.1s ease-out infinite;
                        border-color: #1B59C6 !important; color: #1B59C6 !important;
                    }
                    .gius-refresh-pulse .fa { animation: giusSpin 1.6s linear infinite; }
        
                    .gius-proctor-card {
                        background: #fff;
                        border: 1px solid #eeeeee;
                        border-radius: 6px;
                        box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
                        margin-bottom: 20px;
                        margin-top: 10px;
                        animation: giusSlideDown 0.38s cubic-bezier(0.25,0.46,0.45,0.94);
                        font-family: 'Open Sans', Arial, Helvetica, sans-serif;
                        overflow: hidden;
                        position: relative;
                    }
                    .gius-proctor-card::before {
                        content: "";
                        position: absolute; top: 0; left: 0;
                        width: 100%; height: 3px;
                        background: #ffc107;
                    }
                    .gius-proctor-hdr {
                        background: #272c33;
                        color: #fff;
                        padding: 10px 14px;
                        border-bottom: 2px solid #ffc107;
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        gap: 10px;
                        flex-wrap: wrap;
                        position: relative;
                        z-index: 10; /* keep header (and its fetch dropdown) above the body table */
                    }
                    .gius-proctor-hdr-left {
                        display: flex; align-items: center; gap: 10px;
                    }
                    .gius-proctor-title {
                        margin: 0;
                        font-size: 14px; font-weight: 700; color: #fff;
                        display: flex; align-items: center; gap: 8px;
                    }
                    .gius-proctor-meta {
                        font-size: 12px; color: rgba(255,255,255,0.65);
                        margin-top: 2px;
                    }
                    .gius-proctor-hdr-btns {
                        display: flex; gap: 6px; align-items: center;
                    }
                    .gius-fetch-dept-input {
                        height: 26px; width: 220px; padding: 0 8px;
                        font-size: 12px; font-weight: 600;
                        border: 1px solid #d1d5db; border-radius: 6px;
                        background: #fff; color: #374151;
                        font-family: 'Open Sans', Arial, sans-serif;
                        text-overflow: ellipsis;
                    }
                    .gius-fetch-dept-input:focus { outline: 2px solid #60a5fa; outline-offset: 1px; border-color: #1B59C6; }
                    .gius-fetch-dept-input.gius-fetch-dept-error { border-color: #dc2626; outline-color: #f87171; }
                    html.gius-dark .gius-fetch-dept-input {
                        background: #313244 !important; border-color: #45475a !important; color: #cdd6f4 !important;
                    }
                    .gius-proctor-body {
                        padding: 14px 16px;
                    }
                    .gius-proctor-body.collapsed { display: none; }
        
                    .gius-proctor-hdr { cursor: pointer; }
                    .gius-proctor-hdr:hover { opacity: 0.92; }
                    .gius-proctor-hdr button { cursor: pointer; }
        
                    .gius-empty-state {
                        text-align: center; padding: 32px 16px;
                    }
                    .gius-empty-state p {
                        color: #6b7280; margin: 0 0 14px; font-size: 14px;
                    }
                    .gius-empty-hint {
                        max-width: 460px; margin: 0 auto 16px !important;
                        font-size: 12.5px !important; line-height: 1.5;
                        color: #6b7280; background: #f3f4f6;
                        border: 1px solid #e5e7eb; border-radius: 6px;
                        padding: 8px 12px !important;
                    }
                    .gius-empty-hint .fa { color: #1B59C6; margin-right: 4px; }
                    html.gius-dark .gius-empty-hint {
                        background: #181825 !important; border-color: #313244 !important; color: #9399b2 !important;
                    }
                    html.gius-dark .gius-empty-hint .fa { color: #89b4fa !important; }
        
                    .gius-btn {
                        height: 32px; padding: 0 14px; border-radius: 6px;
                        font-size: 13px; font-weight: 700; cursor: pointer;
                        border: 1px solid transparent;
                        transition: all 0.2s ease;
                        display: inline-flex; align-items: center; gap: 5px;
                        white-space: nowrap;
                        font-family: 'Open Sans', Arial, sans-serif;
                    }
                    .gius-btn:disabled { opacity: 0.5; cursor: not-allowed; }
                    .gius-btn-primary  { background: #1B59C6; border-color: #1648a8; color: #fff; }
                    .gius-btn-primary:not(:disabled):hover  { background: #1648a8; }
                    .gius-btn-outline  { background: #fff; border-color: #d1d5db; color: #374151; }
                    .gius-btn-outline:not(:disabled):hover  { background: #f9fafb; }
                    .gius-btn-muted    { background: #f9fafb; border-color: #d1d5db; color: #374151; }
                    .gius-btn-muted:not(:disabled):hover    { background: #e5e7eb; }
                    .gius-btn-sm { height: 26px; padding: 0 10px; font-size: 12px; }
        
                    /* Entry trigger — dark slate + gold accent, matches the panel header */
                    #gius-proctor-trigger {
                        margin: 10px 0 0 !important;
                        height: 34px !important; padding: 0 16px !important;
                        display: inline-flex !important; align-items: center; gap: 7px;
                        background: #272c33 !important; color: #fff !important;
                        border: 1px solid #1c2025 !important;
                        border-left: 3px solid #ffc107 !important;
                        border-radius: 6px !important;
                        font: 700 13px/1 'Open Sans', Arial, sans-serif !important;
                        cursor: pointer; box-shadow: 0 1px 3px rgba(0,0,0,.15);
                        transition: background .2s ease, transform .1s ease;
                        animation: giusSlideDown 0.3s ease both;
                    }
                    #gius-proctor-trigger:hover { background: #363d47 !important; }
                    #gius-proctor-trigger:active { transform: translateY(1px); }
                    #gius-proctor-trigger .fa { color: #ffc107 !important; }
                    #gius-proctor-trigger.gius-hide { display: none !important; }
                    html.gius-dark #gius-proctor-trigger {
                        background: #11111b !important; color: #fff !important;
                        border-color: #0b0b12 !important; border-left-color: #ffc107 !important;
                    }
                    html.gius-dark #gius-proctor-trigger .fa { color: #ffc107 !important; }
        
                    .gius-progress-wrap {
                        background: #e5e7eb; border-radius: 999px; height: 8px; overflow: hidden; margin-bottom: 6px;
                    }
                    .gius-progress-bar {
                        height: 100%; border-radius: 999px; background: #1B59C6;
                        transition: width 0.45s ease;
                    }
                    .gius-progress-label { font-size: 12px; color: #6b7280; margin-bottom: 12px; }
        
                    .gius-filter-bar {
                        display: flex; flex-wrap: wrap; gap: 8px; align-items: center;
                        margin-bottom: 10px;
                    }
                    .gius-filter-select, .gius-filter-input {
                        height: 32px; padding: 4px 8px; font-size: 13px;
                        border: 1px solid #9ca3af; border-radius: 6px;
                        color: #111827; background: #fff;
                        font-family: 'Open Sans', sans-serif;
                        cursor: pointer;
                        transition: border-color 0.2s ease;
                    }
                    .gius-filter-input { min-width: 180px; }
                    .gius-filter-select:focus, .gius-filter-input:focus {
                        outline: 2px solid #60a5fa; outline-offset: 1px; border-color: #1B59C6;
                    }
        
                    .gius-chip-row {
                        display: flex; flex-wrap: wrap; gap: 6px; align-items: center; margin-bottom: 10px;
                    }
                    .gius-chip {
                        display: inline-flex; align-items: center; gap: 4px;
                        background: #dbeafe; color: #1e40af;
                        border: 1px solid #bfdbfe; border-radius: 999px;
                        padding: 2px 10px; font-size: 12px; font-weight: 600;
                        font-family: 'Open Sans', sans-serif;
                    }
                    .gius-chip-x {
                        cursor: pointer; font-size: 13px; line-height: 1;
                        margin-left: 2px; opacity: 0.7;
                    }
                    .gius-chip-x:hover { opacity: 1; }
        
                    .gius-table-section {
                        border: 1px solid #e5e7eb; border-radius: 4px;
                    }
                    .gius-proctor-table-wrap {
                        overflow-x: auto; border-radius: 4px 4px 0 0;
                    }
                    .gius-proctor-table {
                        width: 100%; border-collapse: collapse;
                        font-size: 13px; font-family: 'Open Sans', sans-serif;
                    }
                    .gius-proctor-table thead th {
                        background: #272c33; color: #fff;
                        padding: 8px 10px; text-align: left; white-space: nowrap;
                        font-size: 12px; font-weight: 700; letter-spacing: 0.4px;
                        cursor: pointer; user-select: none;
                        position: sticky; top: 0; z-index: 2;
                    }
                    .gius-proctor-table thead th:hover { background: #363d47; }
                    .gius-sort-icon { margin-left: 4px; opacity: 0.5; }
                    .gius-sort-icon.active { opacity: 1; }
                    .gius-proctor-table tbody tr { border-bottom: 1px solid #f3f4f6; }
                    .gius-proctor-table tbody tr:nth-child(even) { background: #f9fafb; }
                    .gius-proctor-table tbody tr:hover { background: #eff6ff; }
                    .gius-proctor-table td {
                        padding: 7px 10px; color: #374151; vertical-align: middle;
                    }
                    .gius-proctor-table td.muted { color: #9ca3af; font-style: italic; }
                    .gius-row-in { animation: giusRowIn 0.25s ease both; }
                    .gius-data-row { cursor: pointer; }
                    .gius-cover-view-row { border-left: 3px solid #6366f1; background: #eef2ff !important; }
                    .gius-cover-view-row td:first-child { font-style: italic; color: #4338ca; font-weight: 600; }
                    .gius-cover-view-row:hover { background: #e0e7ff !important; }
                    html.gius-dark .gius-cover-view-row { border-left-color: #818cf8 !important; background: #1e1e38 !important; }
                    html.gius-dark .gius-cover-view-row td:first-child { color: #a5b4fc !important; }
                    html.gius-dark .gius-cover-view-row:hover { background: #25254a !important; }
                    .gius-covered-row { border-left: 3px solid #f59e0b; background: #fffbeb !important; }
                    .gius-covered-row td:first-child { color: #92400e; font-weight: 600; }
                    .gius-covered-row:hover { background: #fef3c7 !important; }
                    html.gius-dark .gius-covered-row { border-left-color: #fbbf24 !important; background: #1c1400 !important; }
                    html.gius-dark .gius-covered-row td:first-child { color: #fbbf24 !important; }
                    html.gius-dark .gius-covered-row:hover { background: #2a1e00 !important; }
                    .gius-coproctor-row td {
                        background: #e0e7ff !important; color: #1e3a8a !important;
                        font-size: 1em; padding: 8px 16px 8px 20px !important;
                        border-top: 1px solid #a5b4fc !important;
                        border-left: 4px solid #6366f1 !important;
                        animation: giusSlideDown 0.2s ease;
                    }
                    .gius-coproctor-label {
                        font-weight: 700; display: block; margin-bottom: 4px; color: #4338ca;
                    }
                    .gius-coproctor-list {
                        margin: 0; padding: 0 0 0 18px; list-style: disc;
                    }
                    .gius-coproctor-list li { margin: 2px 0; }
                    .gius-coproctor-dept { color: #6366f1; margin-left: 4px; }
                    html.gius-dark .gius-coproctor-dept { color: #818cf8 !important; }
                    .gius-cover-status {
                        display: inline-block; margin-left: 6px; font-size: 10px; font-weight: 600;
                        background: #e0e7ff; color: #4338ca; border-radius: 4px; padding: 1px 5px;
                        vertical-align: middle; letter-spacing: 0.02em;
                    }
                    html.gius-dark .gius-cover-status { background: #1e2050 !important; color: #a5b4fc !important; }
                    .gius-original-status {
                        display: inline-block; margin-left: 6px; font-size: 10px; font-weight: 600;
                        background: #fef3c7; color: #92400e; border-radius: 4px; padding: 1px 5px;
                        vertical-align: middle; letter-spacing: 0.02em;
                    }
                    html.gius-dark .gius-original-status { background: #451a03 !important; color: #fbbf24 !important; }
        
                    .gius-covering-badge {
                        display: block; font-size: 11px; color: #6366f1;
                        font-style: italic; margin-top: 2px;
                    }
                    html.gius-dark .gius-covering-badge { color: #818cf8 !important; }
        
                    .gius-table-footer { border-top: 1px solid #e5e7eb; padding: 6px 10px; }
                    .gius-pagination {
                        display: flex; align-items: center; justify-content: space-between;
                        flex-wrap: wrap; gap: 8px;
                    }
                    .gius-page-info { font-size: 12px; color: #6b7280; }
                    .gius-page-controls { display: flex; align-items: center; gap: 6px; }
                    .gius-page-size-label { font-size: 12px; color: #6b7280; }
                    .gius-page-size-select {
                        height: 26px; padding: 0 6px; font-size: 12px;
                        border: 1px solid #d1d5db; border-radius: 4px;
                        background: #fff; color: #374151; cursor: pointer;
                        font-family: 'Open Sans', sans-serif;
                    }
                    .gius-page-btn {
                        height: 26px; min-width: 26px; padding: 0 7px;
                        border: 1px solid #d1d5db; border-radius: 4px;
                        background: #fff; color: #374151; font-size: 14px; cursor: pointer;
                        display: inline-flex; align-items: center; justify-content: center;
                        font-family: 'Open Sans', sans-serif;
                    }
                    .gius-page-btn:hover:not(:disabled) { background: #f3f4f6; }
                    .gius-page-btn:disabled { opacity: 0.4; cursor: not-allowed; }
                    .gius-page-num { font-size: 12px; color: #374151; white-space: nowrap; }
        
                    .gius-spinner {
                        display: inline-block; width: 13px; height: 13px;
                        border: 2px solid rgba(255,255,255,0.3); border-top-color: #fff;
                        border-radius: 50%; animation: giusSpin 0.7s linear infinite;
                        vertical-align: middle;
                    }
        
                    .gius-warn-pill {
                        display: inline-flex; align-items: center; gap: 5px;
                        background: #fef3c7; color: #92400e; border: 1px solid #fde68a;
                        border-radius: 999px; padding: 2px 12px; font-size: 12px; font-weight: 600;
                    }
        
                    /* ── Dark mode overrides ── */
                    html.gius-dark .gius-proctor-card {
                        background: #181825 !important; border-color: transparent !important;
                    }
                    html.gius-dark .gius-proctor-hdr { background: #11111b !important; }
                    html.gius-dark .gius-proctor-body { color: #cdd6f4 !important; }
                    html.gius-dark .gius-proctor-table tbody tr { border-color: #313244 !important; }
                    html.gius-dark .gius-proctor-table tbody tr:nth-child(even) { background: #181825 !important; }
                    html.gius-dark .gius-proctor-table tbody tr:hover { background: #1e3a6e !important; }
                    html.gius-dark .gius-proctor-table td { color: #cdd6f4 !important; }
                    html.gius-dark .gius-proctor-table td.muted { color: #9399b2 !important; }
                    html.gius-dark .gius-progress-wrap { background: #313244 !important; }
                    html.gius-dark .gius-progress-label { color: #cdd6f4 !important; }
                    html.gius-dark .gius-filter-select, html.gius-dark .gius-filter-input {
                        background: #313244 !important; color: #cdd6f4 !important;
                        border-color: #45475a !important;
                    }
                    html.gius-dark .gius-btn-outline {
                        background: #313244 !important; border-color: #45475a !important;
                        color: #cdd6f4 !important;
                    }
                    html.gius-dark .gius-btn-muted {
                        background: #313244 !important; border-color: #45475a !important;
                        color: #cdd6f4 !important;
                    }
                    html.gius-dark .gius-page-info  { color: #cdd6f4 !important; }
                    html.gius-dark .gius-page-num   { color: #cdd6f4 !important; }
                    html.gius-dark .gius-page-size-label { color: #cdd6f4 !important; }
                    html.gius-dark .gius-page-size-select {
                        background: #313244 !important; color: #cdd6f4 !important; border-color: #45475a !important;
                    }
                    html.gius-dark .gius-page-btn {
                        background: #313244 !important; color: #cdd6f4 !important; border-color: #45475a !important;
                    }
                    html.gius-dark .gius-page-btn:hover:not(:disabled) { background: #45475a !important; }
                    html.gius-dark .gius-table-section { border-color: #45475a !important; }
                    html.gius-dark .gius-table-footer { border-top-color: #45475a !important; }
                    html.gius-dark .gius-empty-state p { color: #cdd6f4 !important; }
                    html.gius-dark .gius-chip {
                        background: #1a2a4a !important; color: #89b4fa !important;
                        border-color: #1e3a6e !important;
                    }
                    html.gius-dark .gius-warn-pill {
                        background: #2d1f00 !important; color: #fbbf24 !important;
                        border-color: #78350f !important;
                    }
                    html.gius-dark .gius-coproctor-row td {
                        background: #1e2050 !important; color: #e0e7ff !important;
                        border-top-color: #4338ca !important; border-left-color: #818cf8 !important;
                    }
                    html.gius-dark .gius-coproctor-label { color: #a5b4fc !important; }
        
                    /* ── Dropdown search ── */
                    .gius-dd-wrap   { position: relative; display: inline-block; z-index: 1000; }
                    .gius-dd-panel  {
                        position: fixed; z-index: 2147483000;
                        background: #fff; border: 1px solid #d1d5db; border-radius: 6px;
                        box-shadow: 0 4px 12px rgba(0,0,0,.12);
                        max-height: 220px; overflow-y: auto; display: none;
                    }
                    .gius-dd-item   {
                        padding: 6px 10px; font-size: 13px; cursor: pointer; color: #374151;
                        white-space: nowrap; font-family: 'Open Sans', sans-serif;
                    }
                    .gius-dd-item:hover, .gius-dd-item.gius-dd-hi { background: #eff6ff; color: #1d4ed8; }
                    .gius-dd-fuzzy  { color: #6b7280; font-style: italic; }
                    .gius-dd-fuzzy-mark { font-size: 10px; margin-right: 4px; color: #9ca3af; }
                    .gius-dd-empty  { padding: 6px 10px; font-size: 12px; color: #9ca3af;
                                      font-family: 'Open Sans', sans-serif; }
                    html.gius-dark .gius-dd-panel  {
                        background: #313244 !important; border-color: #45475a !important;
                        box-shadow: 0 4px 12px rgba(0,0,0,.4) !important;
                    }
                    html.gius-dark .gius-dd-item { color: #cdd6f4 !important; }
                    html.gius-dark .gius-dd-item:hover,
                    html.gius-dark .gius-dd-item.gius-dd-hi  {
                        background: #45475a !important; color: #cdd6f4 !important;
                    }
                    html.gius-dark .gius-dd-fuzzy  { color: #6c7086 !important; }
                    html.gius-dark .gius-dd-fuzzy-mark { color: #585b70 !important; }
                    html.gius-dark .gius-dd-empty  { color: #6c7086 !important; }
        
                    .gius-take-th { width: 1%; }
                    .gius-take-btn { white-space: nowrap; }
                    .gius-taken-badge {
                        display: inline-flex; align-items: center; gap: 4px;
                        background: #dcfce7; color: #166534;
                        border: 1px solid #bbf7d0; border-radius: 999px;
                        padding: 2px 10px; font-size: 12px; font-weight: 700;
                        font-family: 'Open Sans', sans-serif; white-space: nowrap;
                    }
                    html.gius-dark .gius-taken-badge {
                        background: #052e16 !important; color: #4ade80 !important;
                        border-color: #14532d !important;
                    }
        
                    .gius-ex-overlay {
                        position: fixed; inset: 0; z-index: 2147483646;
                        background: rgba(17, 24, 39, 0.55);
                        display: flex; align-items: center; justify-content: center;
                        animation: giusSlideDown 0.15s ease both;
                    }
                    .gius-ex-modal {
                        background: #fff; border-radius: 10px; width: 420px; max-width: 92vw;
                        box-shadow: 0 20px 50px rgba(0,0,0,0.3);
                        font-family: 'Open Sans', Arial, sans-serif;
                        overflow: hidden;
                    }
                    .gius-ex-hdr {
                        display: flex; align-items: center; justify-content: space-between;
                        background: #272c33; color: #fff;
                        padding: 10px 14px; font-size: 14px; font-weight: 700;
                    }
                    .gius-ex-close {
                        background: none; border: none; color: #fff; font-size: 15px;
                        cursor: pointer; opacity: 0.7; padding: 2px 6px;
                    }
                    .gius-ex-close:hover { opacity: 1; }
                    .gius-ex-body { padding: 18px 16px; }
                    .gius-ex-loading {
                        display: flex; align-items: center; gap: 10px;
                        color: #6b7280; font-size: 14px; padding: 10px 0;
                    }
                    .gius-ex-spinner {
                        width: 18px; height: 18px; border-radius: 50%;
                        border: 3px solid #e5e7eb; border-top-color: #1B59C6;
                        animation: giusSpin 0.8s linear infinite; flex-shrink: 0;
                    }
                    .gius-ex-text { font-size: 14px; color: #111827; margin: 0 0 8px; line-height: 1.6; }
                    .gius-ex-exam { font-size: 13px; color: #6b7280; margin: 0 0 14px; }
                    .gius-ex-check {
                        display: flex; align-items: flex-start; gap: 8px;
                        font-size: 13px; color: #374151; cursor: pointer;
                        margin: 0 0 16px; line-height: 1.5;
                    }
                    .gius-ex-check input { margin-top: 3px; cursor: pointer; }
                    .gius-ex-actions { display: flex; justify-content: flex-end; gap: 8px; }
                    .gius-ex-result {
                        display: flex; align-items: flex-start; gap: 8px;
                        font-size: 14px; margin: 0 0 16px; line-height: 1.5;
                    }
                    .gius-ex-result .fa { margin-top: 2px; }
                    .gius-ex-ok  { color: #166534; }
                    .gius-ex-err { color: #b91c1c; }
                    html.gius-dark .gius-ex-modal { background: #1e1e2e !important; }
                    html.gius-dark .gius-ex-hdr { background: #11111b !important; }
                    html.gius-dark .gius-ex-text { color: #cdd6f4 !important; }
                    html.gius-dark .gius-ex-exam { color: #9399b2 !important; }
                    html.gius-dark .gius-ex-check { color: #bac2de !important; }
                    html.gius-dark .gius-ex-loading { color: #9399b2 !important; }
                    html.gius-dark .gius-ex-spinner { border-color: #313244 !important; border-top-color: #89b4fa !important; }
                    html.gius-dark .gius-ex-ok  { color: #4ade80 !important; }
                    html.gius-dark .gius-ex-err { color: #f87171 !important; }
                `;
                document.head.appendChild(s);
            }
        
            // ── UI state ──────────────────────────────────────────────────────────────
        
            let _allRows = [];
            let _filteredRows = [];
            let _renderedRows = [];
            let _coveringMap = new Map();
            let _filters = { search: '', day: '', exam: '', proctor: '', room: '', department: '' };
            let _sortCol = 'dateKey';
            let _sortAsc = true;
            let _pageSize = 20;
            let _currentPage = 1;
            let _paused = false;
            let _resumeFn = null;
            let _panelEl = null;
            let _scraping = false;
            let _fetchDeptList = []; // [{ value, label }] from the portal dropdown
        
            // Resolve the typed department text → { value, label } | null (all) | { error }
            function resolveFetchScope() {
                const inp = document.getElementById('gius-fetch-dept');
                if (!inp) return null;
                const text = inp.value.trim();
                if (!text) return null; // blank = all departments
                const lo = text.toLowerCase();
                // Exact (case-insensitive), then substring
                let hit = _fetchDeptList.find(d => d.label.toLowerCase() === lo)
                       || _fetchDeptList.find(d => d.label.toLowerCase().includes(lo));
                // Then typo-tolerant: closest full-label edit distance within a budget
                if (!hit) {
                    let best = null, bestD = Infinity;
                    for (const d of _fetchDeptList) {
                        const dist = editDistance(lo, d.label.toLowerCase());
                        if (dist < bestD) { bestD = dist; best = d; }
                    }
                    if (best && bestD <= Math.ceil(lo.length / 4)) hit = best;
                }
                return hit ? { value: hit.value, label: hit.label } : { error: text };
            }
        
            function flagFetchDeptError() {
                const inp = document.getElementById('gius-fetch-dept');
                if (!inp) return;
                inp.classList.add('gius-fetch-dept-error');
                inp.title = 'No matching department — clear the box to fetch all';
                inp.focus();
            }
        
            // Read the portal's department dropdown into _fetchDeptList, and seed the
            // input with whatever is currently selected there (so the portal's choice
            // becomes an explicit, visible scope instead of a silent one).
            function populateFetchDept() {
                const inp = document.getElementById('gius-fetch-dept');
                const portal = document.getElementById('MainContent_acdmcDpLst');
                if (!inp || !portal) return;
                _fetchDeptList = Array.from(portal.options)
                    .filter(o => o.value !== '')
                    .map(o => ({ value: o.value, label: o.text.trim() }));
                const selected = _fetchDeptList.find(d => d.value === portal.value);
                if (selected && !inp.value) inp.value = selected.label;
            }
        
            function setAllRows(rows) {
                _allRows = rows;
                _coveringMap = buildCoveringMap(rows);
                updateFilterOptions();
            }
        
            function uniqueSorted(rows, key) {
                return [...new Set(rows.map(r => r[key]).filter(Boolean))].sort();
            }
        
            function escHtml(s) {
                return String(s)
                    .replace(/&/g, '&amp;')
                    .replace(/</g, '&lt;')
                    .replace(/>/g, '&gt;')
                    .replace(/"/g, '&quot;');
            }
        
            // ── Fuzzy search ─────────────────────────────────────────────────────────
        
            function editDistance(a, b) {
                const m = a.length, n = b.length;
                if (!m) return n; if (!n) return m;
                const row = Array.from({ length: n + 1 }, (_, i) => i);
                for (let i = 1; i <= m; i++) {
                    let diag = row[0];
                    row[0] = i;
                    for (let j = 1; j <= n; j++) {
                        const saved = row[j];
                        row[j] = a[i-1] === b[j-1] ? diag
                            : 1 + Math.min(row[j], row[j-1], diag);
                        diag = saved;
                    }
                }
                return row[n];
            }
        
            // Returns true if query matches text via substring OR per-word edit distance.
            // Rooms and dates: pass useFuzzy=false to use exact substring only.
            function fuzzyMatch(query, text, useFuzzy = true) {
                if (!query) return true;
                if (text.includes(query)) return true;
                if (!useFuzzy || query.length < 3) return false;
                const threshold = Math.ceil(query.length / 4);
                return text.split(/\s+/).some(word =>
                    word.length >= query.length - threshold &&
                    editDistance(query, word) <= threshold
                );
            }
        
            // Rank options array for dropdown: exact substring matches first, fuzzy-only after.
            // Returns [{value, fuzzy}] where fuzzy=true means no substring match.
            function rankOptions(query, options) {
                if (!query) return options.map(v => ({ value: v, fuzzy: false }));
                const q = query.toLowerCase();
                const exact = [], fuzzyOnly = [];
                for (const v of options) {
                    const lo = v.toLowerCase();
                    if (lo.includes(q)) {
                        exact.push({ value: v, fuzzy: false });
                    } else if (fuzzyMatch(q, lo)) {
                        fuzzyOnly.push({ value: v, fuzzy: true });
                    }
                }
                return [...exact, ...fuzzyOnly];
            }
        
            // ── Dropdown component ────────────────────────────────────────────────────
        
            const _dropdownOptions = { day: [], exam: [], proctor: [], room: [], department: [] };
        
            function makeDropdown(inputId, getOptions) {
                const inp = document.getElementById(inputId);
                if (!inp) return;
        
                const wrap = document.createElement('span');
                wrap.className = 'gius-dd-wrap';
                inp.parentNode.insertBefore(wrap, inp);
                wrap.appendChild(inp);
        
                const panel = document.createElement('ul');
                panel.className = 'gius-dd-panel';
                panel.style.minWidth = inp.offsetWidth + 'px';
                // Mount on <body> (not inside the card) so no ancestor's overflow:hidden
                // or stacking context can ever clip or hide the list.
                document.body.appendChild(panel);
        
                let activeIdx = -1;
                let rendered = [];
        
                // Position the panel as a viewport-fixed box anchored under the input.
                // Fixed positioning escapes the card's `overflow:hidden` clip and any
                // ancestor stacking context, so the list always sits above the rest of UI.
                function position() {
                    const r = inp.getBoundingClientRect();
                    panel.style.top = (r.bottom + 2) + 'px';
                    panel.style.left = r.left + 'px';
                    panel.style.minWidth = r.width + 'px';
                }
        
                function open(items) {
                    rendered = items;
                    activeIdx = -1;
                    if (!items.length) {
                        panel.innerHTML = `<li class="gius-dd-empty">No matches</li>`;
                    } else {
                        panel.innerHTML = items.map((item, i) =>
                            item.fuzzy
                                ? `<li class="gius-dd-item gius-dd-fuzzy" data-i="${i}"><span class="gius-dd-fuzzy-mark">~</span>${escHtml(item.value)}</li>`
                                : `<li class="gius-dd-item" data-i="${i}">${escHtml(item.value)}</li>`
                        ).join('');
                    }
                    panel.style.display = 'block';
                    position();
                }
        
                function close() { panel.style.display = 'none'; activeIdx = -1; rendered = []; }
        
                // Keep the fixed panel glued to the input on scroll/resize while open
                const reposition = () => { if (panel.style.display === 'block') position(); };
                window.addEventListener('scroll', reposition, true);
                window.addEventListener('resize', reposition);
        
                function highlight(idx) {
                    panel.querySelectorAll('.gius-dd-item').forEach((el, i) =>
                        el.classList.toggle('gius-dd-hi', i === idx)
                    );
                    const el = panel.querySelectorAll('.gius-dd-item')[idx];
                    if (el) el.scrollIntoView({ block: 'nearest' });
                }
        
                function select(val) {
                    inp.value = val;
                    inp.dispatchEvent(new Event('input', { bubbles: true }));
                    close();
                }
        
                inp.addEventListener('input', () => {
                    const q = inp.value.trim().toLowerCase();
                    if (!q) { close(); return; }
                    const items = rankOptions(q, getOptions());
                    if (!items.length) { close(); return; }
                    open(items);
                });
        
                inp.addEventListener('keydown', e => {
                    if (panel.style.display === 'none') return;
                    const items = panel.querySelectorAll('.gius-dd-item');
                    if (e.key === 'ArrowDown') {
                        e.preventDefault();
                        activeIdx = Math.min(activeIdx + 1, items.length - 1);
                        highlight(activeIdx);
                    } else if (e.key === 'ArrowUp') {
                        e.preventDefault();
                        activeIdx = Math.max(activeIdx - 1, 0);
                        highlight(activeIdx);
                    } else if (e.key === 'Enter' && activeIdx >= 0) {
                        e.preventDefault();
                        const item = rendered[activeIdx];
                        if (item) select(item.value);
                    } else if (e.key === 'Escape') {
                        e.preventDefault();
                        close();
                    }
                });
        
                panel.addEventListener('mousedown', e => {
                    const li = e.target.closest('[data-i]');
                    if (!li) return;
                    e.preventDefault();
                    const item = rendered[parseInt(li.dataset.i, 10)];
                    if (item) select(item.value);
                });
        
                document.addEventListener('click', e => {
                    if (!wrap.contains(e.target) && !panel.contains(e.target)) close();
                });
            }
        
            // ── Panel skeleton ────────────────────────────────────────────────────────
        
            function buildPanel() {
                const div = document.createElement('div');
                div.id = 'gius-proctor-panel';
                div.className = 'gius-proctor-card';
                div.innerHTML = `
                    <div class="gius-proctor-hdr" id="gius-proctor-hdr">
                        <div class="gius-proctor-hdr-left" id="gius-proctor-hdr-toggle">
                            <div>
                                <h3 class="gius-proctor-title">
                                    <i class="fa fa-laptop"></i> Proctor Schedule Aggregator
                                </h3>
                                <div class="gius-proctor-meta" id="gius-proctor-meta"></div>
                            </div>
                        </div>
                        <div class="gius-proctor-hdr-btns">
                            <span id="gius-proctor-warn" style="display:none"></span>
                            <input class="gius-fetch-dept-input" id="gius-fetch-dept" type="text" placeholder="All Departments (type to scope)" title="Scope the fetch — type a department to fetch only it, or leave blank for all" autocomplete="off" />
                            <button type="button" class="gius-btn gius-btn-outline gius-btn-sm" id="gius-proctor-upload" title="Load rows from a previously exported CSV">
                                <i class="fa fa-upload"></i> Upload CSV
                            </button>
                            <input type="file" id="gius-file-input" accept=".csv" style="display:none">
                            <button type="button" class="gius-btn gius-btn-outline gius-btn-sm" id="gius-proctor-csv" title="Export filtered rows as CSV">
                                <i class="fa fa-download"></i> Export CSV
                            </button>
                            <button type="button" class="gius-btn gius-btn-outline gius-btn-sm" id="gius-proctor-refresh" title="Re-fetch using the selected scope">
                                <i class="fa fa-refresh"></i> Refresh
                            </button>
                            <button type="button" class="gius-btn gius-btn-outline gius-btn-sm" id="gius-proctor-pause" style="display:none" title="Pause or resume fetching">&#x23F8; Pause</button>
                            <button type="button" class="gius-btn gius-btn-muted gius-btn-sm" id="gius-proctor-close">&#x2715;</button>
                        </div>
                    </div>
                    <div class="gius-proctor-body" id="gius-proctor-body">
                        <div id="gius-progress-section" style="display:none">
                            <div class="gius-progress-wrap">
                                <div class="gius-progress-bar" id="gius-progress-bar" style="width:0%"></div>
                            </div>
                            <div class="gius-progress-label" id="gius-progress-label">Starting&hellip;</div>
                        </div>
                        <div class="gius-filter-bar" id="gius-filter-bar" style="display:none">
                            <input class="gius-filter-input" id="gius-f-search"     type="text" placeholder="Search all columns&hellip;" />
                            <input class="gius-filter-input" id="gius-f-day"        type="text" placeholder="All Days" />
                            <input class="gius-filter-input" id="gius-f-exam"       type="text" placeholder="All Exams" />
                            <input class="gius-filter-input" id="gius-f-proctor"    type="text" placeholder="All Proctors" />
                            <input class="gius-filter-input" id="gius-f-room"       type="text" placeholder="All Rooms" />
                            <input class="gius-filter-input" id="gius-f-department" type="text" placeholder="All Departments" />
                            <button type="button" class="gius-btn gius-btn-muted gius-btn-sm" id="gius-f-clear" style="display:none">&#x2715; Clear all</button>
                        </div>
                        <div class="gius-chip-row" id="gius-chip-row"></div>
                        <div id="gius-empty-state" class="gius-empty-state" style="display:none">
                            <p>No schedule data loaded yet.</p>
                            <p class="gius-empty-hint">
                                <i class="fa fa-filter"></i>
                                Tip: leave the <b>All Departments</b> box (top-right) blank to fetch every
                                department, or type one to fetch just that department — much faster.
                            </p>
                            <button type="button" class="gius-btn gius-btn-primary" id="gius-start-fetch">
                                <i class="fa fa-play"></i> Fetch Schedules
                            </button>
                        </div>
                        <div class="gius-table-section" id="gius-table-section" style="display:none">
                            <div class="gius-proctor-table-wrap" id="gius-table-wrap">
                                <table class="gius-proctor-table">
                                    <thead>
                                        <tr>
                                            <th data-col="proctor">Proctor <span class="gius-sort-icon" data-col="proctor">&#x25B2;</span></th>
                                            <th data-col="exam">Exam <span class="gius-sort-icon" data-col="exam">&#x25B2;</span></th>
                                            <th data-col="hall">Room <span class="gius-sort-icon" data-col="hall">&#x25B2;</span></th>
                                            <th data-col="dateKey">Date <span class="gius-sort-icon active" data-col="dateKey">&#x25B2;</span></th>
                                            <th data-col="time">Time <span class="gius-sort-icon" data-col="time">&#x25B2;</span></th>
                                            <th data-col="department">Department <span class="gius-sort-icon" data-col="department">&#x25B2;</span></th>
                                            <th data-col="coverName">Cover <span class="gius-sort-icon" data-col="coverName">&#x25B2;</span></th>
                                            <th class="gius-take-th">Take</th>
                                        </tr>
                                    </thead>
                                    <tbody id="gius-tbody"></tbody>
                                </table>
                            </div>
                            <div class="gius-table-footer" id="gius-table-footer"></div>
                        </div>
                    </div>
                `;
                return div;
            }
        
            // ── Filter / sort / render ────────────────────────────────────────────────
        
            function buildFilterQuery() {
                const f = _filters;
                return {
                    search: f.search.toLowerCase(),
                    dayQ: f.day.toLowerCase(),
                    examQ: f.exam.toLowerCase(),
                    proctorQ: f.proctor.toLowerCase(),
                    roomQ: f.room.toLowerCase(),
                    deptQ: f.department.toLowerCase(),
                };
            }
        
            function rowPassesBaseFilters(r, { search, dayQ, examQ, roomQ, deptQ }) {
                if (dayQ && !r.date.toLowerCase().includes(dayQ)) return false;
                if (examQ && !fuzzyMatch(examQ, r.examName.toLowerCase())) return false;
                if (roomQ && !r.hall.toLowerCase().includes(roomQ)) return false;
                if (deptQ && !fuzzyMatch(deptQ, r.department.toLowerCase())) return false;
                if (search) {
                    const proctor  = fuzzyMatch(search, r.proctor.toLowerCase());
                    const cover    = r.coverName && fuzzyMatch(search, r.coverName.toLowerCase());
                    const examText = fuzzyMatch(search, (r.program + ' ' + r.examName + ' ' + r.courseCode).toLowerCase());
                    const exact    = [r.hall, r.date, r.department].join(' ').toLowerCase().includes(search);
                    if (!proctor && !cover && !examText && !exact) return false;
                }
                return true;
            }
        
            function applyFiltersAndSort({ keepPage = false } = {}) {
                const q = buildFilterQuery();
        
                const rows = _allRows.flatMap(r => {
                    if (!rowPassesBaseFilters(r, q)) return [];
                    if (q.proctorQ) {
                        const matchProctor = fuzzyMatch(q.proctorQ, r.proctor.toLowerCase());
                        const matchCover   = r.coverName && fuzzyMatch(q.proctorQ, r.coverName.toLowerCase());
                        if (!matchProctor && !matchCover) return [];
                        if (!matchProctor && matchCover)  return [{ ...r, _coverView: true }];
                    }
                    return [r];
                });
        
                rows.sort((a, b) => {
                    const col = _sortCol;
                    const va = col === 'exam' ? ((a.program || a.courseCode) + ' ' + a.examName) :
                               col === 'time' ? (a.dateKey + (a.timeSort || a.startTime)) : (a[col] || '');
                    const vb = col === 'exam' ? ((b.program || b.courseCode) + ' ' + b.examName) :
                               col === 'time' ? (b.dateKey + (b.timeSort || b.startTime)) : (b[col] || '');
                    const cmp = va.localeCompare(vb, undefined, { numeric: true });
                    return _sortAsc ? cmp : -cmp;
                });
        
                _filteredRows = rows;
                // Rows streaming in during a fetch keep the page the user is on.
                _currentPage = keepPage ? Math.min(_currentPage, Math.max(1, Math.ceil(rows.length / _pageSize))) : 1;
                renderTable(_filteredRows);
                renderChips();
            }
        
            function buildCoveringMap(rows) {
                const map = new Map();
                rows.forEach(r => {
                    if (r.coverName) {
                        map.set(`${r.coverName}|${r.hall}|${r.slotKey}|${r.examName}`, r.proctor);
                    }
                });
                return map;
            }
        
            function renderTable(rows) {
                const tbody = document.getElementById('gius-tbody');
                const section = document.getElementById('gius-table-section');
                if (!tbody) return;
        
                _renderedRows = rows;
                if (section) section.style.display = (_allRows.length || rows.length) ? '' : 'none';
        
                const total = rows.length;
                const totalPages = Math.max(1, Math.ceil(total / _pageSize));
                _currentPage = Math.min(_currentPage, totalPages);
                const start = (_currentPage - 1) * _pageSize;
                const end = Math.min(start + _pageSize, total);
                const pageRows = rows.slice(start, end);
        
                const coveringMap = _coveringMap;
        
                tbody.innerHTML = pageRows.map((r, i) => {
                    if (r._coverView) {
                        return `
                    <tr class="gius-row-in gius-data-row gius-cover-view-row" data-idx="${start + i}" style="animation-delay:${Math.min(i, 30) * 12}ms">
                        <td>${escHtml(r.coverName)}<span class="gius-covering-badge">&#x21AA; Covering for: ${escHtml(r.proctor)}</span></td>
                        <td>${escHtml(r.program || r.courseCode)} &ndash; ${escHtml(r.examName)}</td>
                        <td>${escHtml(r.hall)}</td>
                        <td>${escHtml(r.date)}</td>
                        <td>${escHtml(r.startTime)} &ndash; ${escHtml(r.endTime)}</td>
                        <td>${escHtml(r.department)}</td>
                        <td class="muted">—</td>
                        <td class="muted">—</td>
                    </tr>
                `;
                    }
                    const coveringFor = coveringMap.get(`${r.proctor}|${r.hall}|${r.slotKey}|${r.examName}`) || '';
                    return `
                    <tr class="gius-row-in gius-data-row${r.coverName ? ' gius-covered-row' : ''}" data-idx="${start + i}" style="animation-delay:${Math.min(i, 30) * 12}ms">
                        <td>${escHtml(r.proctor)}${coveringFor ? `<span class="gius-covering-badge">&#x21AA; Covering: ${escHtml(coveringFor)}</span>` : ''}</td>
                        <td>${escHtml(r.program || r.courseCode)} &ndash; ${escHtml(r.examName)}</td>
                        <td>${escHtml(r.hall)}</td>
                        <td>${escHtml(r.date)}</td>
                        <td>${escHtml(r.startTime)} &ndash; ${escHtml(r.endTime)}</td>
                        <td>${escHtml(r.department)}</td>
                        <td class="${r.coverName ? '' : 'muted'}">${escHtml(r.coverName || '—')}</td>
                        <td>${r.coverName === 'You'
                            ? '<span class="gius-taken-badge"><i class="fa fa-check"></i> Taken</span>'
                            : `<button type="button" class="gius-btn gius-btn-outline gius-btn-sm gius-take-btn" data-idx="${start + i}" title="Replace this proctor for this exam"><i class="fa fa-exchange"></i> Take</button>`}</td>
                    </tr>
                `;
                }).join('');
        
                renderPagination(total, totalPages, start, end);
            }
        
            function renderPagination(total, totalPages, start, end) {
                const foot = document.getElementById('gius-table-footer');
                if (!foot) return;
                if (!_allRows.length) { foot.innerHTML = ''; return; }
        
                const from = total === 0 ? 0 : start + 1;
                const filtered = total !== _allRows.length ? ` (filtered from ${_allRows.length.toLocaleString()})` : '';
                foot.innerHTML = `
                    <div class="gius-pagination">
                        <span class="gius-page-info">Showing ${from}–${end} of ${total.toLocaleString()} exams${filtered}</span>
                        <div class="gius-page-controls">
                            <label class="gius-page-size-label">Rows:
                                <select class="gius-page-size-select" id="gius-page-size">
                                    ${[5, 10, 20, 50].map(n =>
                                        `<option value="${n}"${_pageSize === n ? ' selected' : ''}>${n}</option>`
                                    ).join('')}
                                </select>
                            </label>
                            <button type="button" class="gius-page-btn" id="gius-page-prev"${_currentPage <= 1 ? ' disabled' : ''}>&#x2039;</button>
                            <span class="gius-page-num" id="gius-page-num">Page ${_currentPage} / ${totalPages}</span>
                            <button type="button" class="gius-page-btn" id="gius-page-next"${_currentPage >= totalPages ? ' disabled' : ''}>&#x203A;</button>
                        </div>
                    </div>
                `;
        
                document.getElementById('gius-page-size')?.addEventListener('change', e => {
                    _pageSize = parseInt(e.target.value, 10);
                    _currentPage = 1;
                    renderTable(_filteredRows);
                });
                document.getElementById('gius-page-prev')?.addEventListener('click', () => {
                    if (_currentPage > 1) { _currentPage--; renderTable(_filteredRows); }
                });
                document.getElementById('gius-page-next')?.addEventListener('click', () => {
                    if (_currentPage < totalPages) { _currentPage++; renderTable(_filteredRows); }
                });
            }
        
            function renderChips() {
                const row = document.getElementById('gius-chip-row');
                const clearEl = document.getElementById('gius-f-clear');
                if (!row) return;
                const labels = { day: 'Day', exam: 'Exam', proctor: 'Proctor', room: 'Room', department: 'Dept', search: 'Search' };
                const active = Object.entries(_filters).filter(([, v]) => v);
                row.innerHTML = active.map(([k, v]) =>
                    `<span class="gius-chip">${labels[k] || k}: ${escHtml(v)}<span class="gius-chip-x" data-filter="${k}" title="Remove">&#x2715;</span></span>`
                ).join('');
                if (clearEl) clearEl.style.display = active.length ? '' : 'none';
                row.querySelectorAll('.gius-chip-x').forEach(x => {
                    x.addEventListener('click', () => {
                        const key = x.dataset.filter;
                        _filters[key] = '';
                        const el = document.getElementById('gius-f-' + key);
                        if (el) el.value = '';
                        applyFiltersAndSort();
                    });
                });
            }
        
            function updateFilterOptions() {
                _dropdownOptions.day        = uniqueSorted(_allRows, 'date');
                _dropdownOptions.exam       = uniqueSorted(_allRows, 'examName');
                _dropdownOptions.proctor    = [...new Set([..._allRows.map(r => r.proctor), ..._allRows.map(r => r.coverName)].filter(Boolean))].sort();
                _dropdownOptions.room       = uniqueSorted(_allRows, 'hall');
                _dropdownOptions.department = uniqueSorted(_allRows, 'department');
            }
        
            function updateSortIcons() {
                document.querySelectorAll('.gius-sort-icon').forEach(el => {
                    const col = el.dataset.col;
                    const active = col === _sortCol;
                    el.classList.toggle('active', active);
                    el.textContent = active ? (_sortAsc ? '▲' : '▼') : '▲';
                });
            }
        
            // ── CSV export ────────────────────────────────────────────────────────────
        
            function exportCSV() {
                const q = buildFilterQuery();
                const rows = _allRows.filter(r => {
                    if (!rowPassesBaseFilters(r, q)) return false;
                    if (q.proctorQ && !fuzzyMatch(q.proctorQ, r.proctor.toLowerCase()) && !(r.coverName && fuzzyMatch(q.proctorQ, r.coverName.toLowerCase()))) return false;
                    return true;
                });
        
                const esc = v => `"${String(v ?? '').replace(/"/g, '""')}"`;
                const header = ['Proctor', 'Course Code', 'Exam Name', 'Room', 'Date', 'Start Time', 'End Time', 'Department', 'Cover', 'Program', 'Date Key'];
                const lines = rows.map(r => [
                    r.proctor, r.courseCode, r.examName, r.hall, r.date,
                    r.startTime, r.endTime, r.department, r.coverName, r.program, r.dateKey,
                ].map(esc).join(','));
        
                const csv = '﻿' + [header.join(','), ...lines].join('\r\n');
                const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `proctor-schedule-${new Date().toISOString().slice(0, 10)}.csv`;
                document.body.appendChild(a);
                a.click();
                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            }
        
            // ── CSV upload ────────────────────────────────────────────────────────────
        
            function parseCsvLine(line) {
                const fields = [];
                let i = 0, field = '';
                while (i < line.length) {
                    if (line[i] === '"') {
                        i++;
                        while (i < line.length) {
                            if (line[i] === '"' && line[i + 1] === '"') { field += '"'; i += 2; }
                            else if (line[i] === '"') { i++; break; }
                            else { field += line[i++]; }
                        }
                        if (i < line.length && line[i] === ',') i++;
                    } else {
                        while (i < line.length && line[i] !== ',') field += line[i++];
                        if (i < line.length) i++;
                    }
                    fields.push(field);
                    field = '';
                }
                return fields;
            }
        
            function parseUploadedCSV(text) {
                const cleaned = text.replace(/^﻿/, '');
                const lines = cleaned.split(/\r?\n/).filter(l => l.trim());
                if (lines.length < 2) return [];
                const headers = parseCsvLine(lines[0]).map(h => h.toLowerCase().trim());
                const idx = {};
                headers.forEach((h, i) => { idx[h] = i; });
                const get = (fields, col, fallback = '') => (fields[idx[col]] ?? fallback).trim();
        
                return lines.slice(1).map(line => {
                    const f = parseCsvLine(line);
                    return {
                        proctor: get(f, 'proctor'),
                        department: get(f, 'department'),
                        examName: get(f, 'exam name'),
                        courseCode: get(f, 'course code'),
                        program: get(f, 'program'),
                        hall: get(f, 'room'),
                        dateKey: get(f, 'date key') || get(f, 'date'),
                        date: get(f, 'date'),
                        startTime: get(f, 'start time'),
                        endTime: get(f, 'end time'),
                        coverName: get(f, 'cover'),
                    };
                }).filter(r => r.proctor || r.examName);
            }
        
            // ── Co-proctor toggle ─────────────────────────────────────────────────────
        
            function toggleCoProctors(tr, row) {
                const existing = tr.nextElementSibling;
                if (existing && existing.classList.contains('gius-coproctor-row')) {
                    existing.remove();
                    return;
                }
                let coProctors;
                let isActingCover = false;
                if (row._coverView) {
                    isActingCover = true;
                    coProctors = _allRows.filter(r =>
                        r.hall     === row.hall &&
                        r.slotKey  === row.slotKey &&
                        r.examName === row.examName
                    );
                    if (!coProctors.length) {
                        coProctors = [{ proctor: row.proctor, department: row.department, _isOriginal: true }];
                    } else {
                        coProctors = coProctors.map(r => ({ ...r, _isOriginal: r.proctor === row.proctor }));
                    }
                } else if (row.coverName) {
                    // This exam is covered. Show ALL other proctors in the slot (genuine
                    // co-proctors) and flag whichever one is the cover.
                    coProctors = _allRows.filter(r =>
                        r !== row &&
                        r.hall     === row.hall &&
                        r.slotKey  === row.slotKey &&
                        r.examName === row.examName
                    ).map(r => ({ ...r, _isCover: r.proctor === row.coverName }));
                    // Cover may have no own row in the data (e.g. taken via this script) —
                    // add a synthetic entry so they always appear.
                    if (!coProctors.some(r => r._isCover)) {
                        coProctors.push({ proctor: row.coverName, department: '', _isCover: true });
                    }
                } else {
                    coProctors = _allRows.filter(r =>
                        r !== row &&
                        r.hall     === row.hall &&
                        r.slotKey  === row.slotKey &&
                        r.examName === row.examName
                    );
                    if (!isActingCover) isActingCover = coProctors.some(r => r.coverName === row.proctor);
                }
                if (!coProctors.length) return;
                const cpRow = document.createElement('tr');
                cpRow.className = 'gius-coproctor-row';
                const cpItems = coProctors.map(r => {
                    const dept = r.department ? `<span class="gius-coproctor-dept">&mdash; ${escHtml(r.department)}</span>` : '';
                    let badge = '';
                    if (r._isCover)       badge = `<span class="gius-cover-status">Cover Proctor</span>`;
                    else if (r._isOriginal || r.coverName === row.proctor) badge = `<span class="gius-original-status">Original Proctor</span>`;
                    return `<li>${escHtml(r.proctor)}${dept}${badge}</li>`;
                }).join('');
                const label = (isActingCover && !row._coverView) ? 'Covering for:' : 'Co-proctors:';
                const icon = (isActingCover && !row._coverView) ? 'fa-exchange' : 'fa-users';
                cpRow.innerHTML = `<td colspan="8"><span class="gius-coproctor-label"><i class="fa ${icon}"></i> ${label}</span><ul class="gius-coproctor-list">${cpItems}</ul></td>`;
                tr.insertAdjacentElement('afterend', cpRow);
            }
        
            // ── Exchange modal ────────────────────────────────────────────────────────
        
            function closeExchangeModal() {
                document.getElementById('gius-ex-overlay')?.remove();
                document.removeEventListener('keydown', onExchangeEsc);
            }
        
            function onExchangeEsc(e) {
                if (e.key === 'Escape') closeExchangeModal();
            }
        
            function openExchangeModal(row) {
                closeExchangeModal();
                const overlay = document.createElement('div');
                overlay.id = 'gius-ex-overlay';
                overlay.className = 'gius-ex-overlay';
                overlay.innerHTML = `
                    <div class="gius-ex-modal" role="dialog" aria-modal="true">
                        <div class="gius-ex-hdr">
                            <span><i class="fa fa-exchange"></i> Proctoring Exchange</span>
                            <button type="button" class="gius-ex-close" id="gius-ex-close" title="Close">&#x2715;</button>
                        </div>
                        <div class="gius-ex-body" id="gius-ex-body">
                            <div class="gius-ex-loading">
                                <span class="gius-ex-spinner"></span>
                                Contacting the portal&hellip;
                            </div>
                        </div>
                    </div>
                `;
                document.body.appendChild(overlay);
                document.addEventListener('keydown', onExchangeEsc);
                overlay.addEventListener('click', e => { if (e.target === overlay) closeExchangeModal(); });
                document.getElementById('gius-ex-close')?.addEventListener('click', closeExchangeModal);
        
                const body = document.getElementById('gius-ex-body');
        
                prepareExchange(row).then(prep => {
                    if (!document.getElementById('gius-ex-body')) return; // modal closed meanwhile
                    body.innerHTML = `
                        <p class="gius-ex-text">I would like to replace<br>
                            <b>${escHtml(prep.nm)}</b><br>
                            during the session on <b>${escHtml(prep.tm)}</b>.</p>
                        <p class="gius-ex-exam">${escHtml(row.program || row.courseCode)} &ndash; ${escHtml(row.examName)}</p>
                        <label class="gius-ex-check">
                            <input type="checkbox" id="gius-ex-sure" />
                            I am sure, I want to replace my colleague during this session.
                        </label>
                        <div class="gius-ex-actions">
                            <button type="button" class="gius-btn gius-btn-muted" id="gius-ex-cancel">Cancel</button>
                            <button type="button" class="gius-btn gius-btn-primary" id="gius-ex-go" disabled>
                                <i class="fa fa-check"></i> Proceed With Replacement
                            </button>
                        </div>
                    `;
                    const sure = document.getElementById('gius-ex-sure');
                    const go = document.getElementById('gius-ex-go');
                    sure?.addEventListener('change', () => { go.disabled = !sure.checked; });
                    document.getElementById('gius-ex-cancel')?.addEventListener('click', closeExchangeModal);
                    go?.addEventListener('click', () => {
                        go.disabled = true;
                        body.innerHTML = `
                            <div class="gius-ex-loading">
                                <span class="gius-ex-spinner"></span>
                                Processing replacement&hellip;
                            </div>
                        `;
                        executeExchange(prep).then(msg => {
                            const ok = /success/i.test(msg);
                            if (!document.getElementById('gius-ex-body')) return;
                            body.innerHTML = `
                                <p class="gius-ex-result ${ok ? 'gius-ex-ok' : 'gius-ex-err'}">
                                    <i class="fa ${ok ? 'fa-check-circle' : 'fa-exclamation-circle'}"></i>
                                    ${escHtml(msg || 'No response message from the portal.')}
                                </p>
                                <div class="gius-ex-actions">
                                    <button type="button" class="gius-btn gius-btn-primary" id="gius-ex-done">Close</button>
                                </div>
                            `;
                            document.getElementById('gius-ex-done')?.addEventListener('click', closeExchangeModal);
                            if (ok) markRowTaken(row);
                        }).catch(err => showExchangeError(err));
                    });
                }).catch(err => showExchangeError(err));
        
                function showExchangeError(err) {
                    if (!document.getElementById('gius-ex-body')) return;
                    const msg = err && err.message === 'SESSION_EXPIRED'
                        ? 'Your portal session has expired — reload the page and log in again.'
                        : (err && err.message) || 'Something went wrong.';
                    body.innerHTML = `
                        <p class="gius-ex-result gius-ex-err">
                            <i class="fa fa-exclamation-circle"></i> ${escHtml(msg)}
                        </p>
                        <div class="gius-ex-actions">
                            <button type="button" class="gius-btn gius-btn-muted" id="gius-ex-done">Close</button>
                        </div>
                    `;
                    document.getElementById('gius-ex-done')?.addEventListener('click', closeExchangeModal);
                }
            }
        
            function markRowTaken(row) {
                _allRows.forEach(r => {
                    if (r.proctor === row.proctor && r.slotKey === row.slotKey &&
                        r.hall === row.hall && r.examName === row.examName) {
                        r.coverName = 'You';
                    }
                });
                saveCache(_allRows);
                updateFilterOptions();
                applyFiltersAndSort();
            }
        
            // Record a cover the portal reported during a freshness check (someone else
            // already took it). Keeps the table honest without a full re-scrape.
            function markRowCovered(row, coverName) {
                let changed = false;
                _allRows.forEach(r => {
                    if (r.proctor === row.proctor && r.slotKey === row.slotKey &&
                        r.hall === row.hall && r.examName === row.examName && r.coverName !== coverName) {
                        r.coverName = coverName;
                        changed = true;
                    }
                });
                if (!changed) return;
                saveCache(_allRows);
                updateFilterOptions();
                applyFiltersAndSort();
            }
        
            // ── Panel wiring ──────────────────────────────────────────────────────────
        
            function wirePanel(panel) {
                // Sort headers
                panel.querySelectorAll('thead th[data-col]').forEach(th => {
                    th.addEventListener('click', () => {
                        const col = th.dataset.col;
                        if (_sortCol === col) _sortAsc = !_sortAsc;
                        else { _sortCol = col; _sortAsc = true; }
                        updateSortIcons();
                        applyFiltersAndSort();
                    });
                });
        
                // Filter inputs
                function bindFilter(id, key) {
                    const el = document.getElementById(id);
                    if (!el) return;
                    el.addEventListener('change', () => { _filters[key] = el.value; applyFiltersAndSort(); });
                    if (el.tagName === 'INPUT') {
                        el.addEventListener('input', () => { _filters[key] = el.value; applyFiltersAndSort(); });
                    }
                }
                bindFilter('gius-f-search',     'search');
                bindFilter('gius-f-day',        'day');
                bindFilter('gius-f-exam',       'exam');
                bindFilter('gius-f-proctor',    'proctor');
                bindFilter('gius-f-room',       'room');
                bindFilter('gius-f-department', 'department');
        
                makeDropdown('gius-f-day',        () => _dropdownOptions.day);
                makeDropdown('gius-f-exam',       () => _dropdownOptions.exam);
                makeDropdown('gius-f-proctor',    () => _dropdownOptions.proctor);
                makeDropdown('gius-f-room',       () => _dropdownOptions.room);
                makeDropdown('gius-f-department', () => _dropdownOptions.department);
                makeDropdown('gius-fetch-dept',   () => _fetchDeptList.map(d => d.label));
                document.getElementById('gius-fetch-dept')?.addEventListener('input', e => {
                    e.target.classList.remove('gius-fetch-dept-error');
                    // Pulse Refresh once a real department is typed, hinting "click to apply"
                    const refreshBtn = document.getElementById('gius-proctor-refresh');
                    if (!refreshBtn) return;
                    const scope = resolveFetchScope();
                    refreshBtn.classList.toggle('gius-refresh-pulse', !!(scope && !scope.error && scope.value));
                });
        
                // Clear all
                document.getElementById('gius-f-clear')?.addEventListener('click', () => {
                    _filters = { search: '', day: '', exam: '', proctor: '', room: '', department: '' };
                    ['gius-f-search', 'gius-f-day', 'gius-f-exam', 'gius-f-proctor', 'gius-f-room', 'gius-f-department']
                        .forEach(id => { const el = document.getElementById(id); if (el) el.value = ''; });
                    applyFiltersAndSort();
                });
        
                // CSV
                document.getElementById('gius-proctor-csv')?.addEventListener('click', exportCSV);
        
                // Toggle panel body on header click (but not when clicking buttons)
                document.getElementById('gius-proctor-hdr')?.addEventListener('click', e => {
                    if (e.target.closest('button') || e.target.closest('input')) return;
                    const body = document.getElementById('gius-proctor-body');
                    if (body) body.classList.toggle('collapsed');
                });
        
                // First-run fetch button
                document.getElementById('gius-start-fetch')?.addEventListener('click', () => {
                    const scope = resolveFetchScope();
                    if (scope && scope.error) { flagFetchDeptError(); return; }
                    document.getElementById('gius-proctor-refresh')?.classList.remove('gius-refresh-pulse');
                    const emptyState = document.getElementById('gius-empty-state');
                    if (emptyState) emptyState.style.display = 'none';
                    startScrape(scope);
                });
        
                // Close
                document.getElementById('gius-proctor-close')?.addEventListener('click', () => {
                    panel.remove();
                    // Remove the body-mounted dropdown panels too (avoid orphan leak on reopen)
                    document.querySelectorAll('body > .gius-dd-panel').forEach(p => p.remove());
                    _panelEl = null;
                    // Bring the entry trigger back so the panel can be reopened
                    const trigger = document.getElementById('gius-proctor-trigger');
                    if (trigger) trigger.classList.remove('gius-hide');
                });
        
                // Refresh — re-fetch using the currently selected scope
                document.getElementById('gius-proctor-refresh')?.addEventListener('click', () => {
                    if (_scraping) return;
                    const scope = resolveFetchScope();
                    if (scope && scope.error) { flagFetchDeptError(); return; }
                    document.getElementById('gius-proctor-refresh')?.classList.remove('gius-refresh-pulse');
                    _paused = false;
                    _filters = { search: '', day: '', exam: '', proctor: '', room: '', department: '' };
                    ['search', 'day', 'exam', 'proctor', 'room', 'department'].forEach(k => {
                        const el = document.getElementById('gius-f-' + k);
                        if (el) el.value = '';
                    });
                    startScrape(scope);
                });
        
                // Co-proctor row expansion (event delegation on tbody)
                const tbody = panel.querySelector('#gius-tbody');
                tbody?.addEventListener('click', e => {
                    const takeBtn = e.target.closest('.gius-take-btn');
                    if (takeBtn) {
                        e.stopPropagation();
                        const tIdx = parseInt(takeBtn.dataset.idx, 10);
                        if (!isNaN(tIdx) && _renderedRows[tIdx]) openExchangeModal(_renderedRows[tIdx]);
                        return;
                    }
                    const tr = e.target.closest('tr.gius-data-row');
                    if (!tr) return;
                    const idx = parseInt(tr.dataset.idx, 10);
                    if (!isNaN(idx) && _renderedRows[idx]) toggleCoProctors(tr, _renderedRows[idx]);
                });
        
                // Upload CSV
                const uploadBtn = document.getElementById('gius-proctor-upload');
                const fileInput = document.getElementById('gius-file-input');
                uploadBtn?.addEventListener('click', () => fileInput?.click());
                fileInput?.addEventListener('change', () => {
                    const file = fileInput.files[0];
                    if (!file) return;
                    const reader = new FileReader();
                    reader.onload = ev => {
                        const rows = parseUploadedCSV(ev.target.result);
                        if (!rows.length) return;
                        _scrapeToken++; // a running fetch stops and its results are dropped
                        _scraping = false;
                        _paused = false;
                        const normalized = rows.map(normalizeRow);
                        setAllRows(normalized);
                        saveCache(normalized);
                        const metaEl = document.getElementById('gius-proctor-meta');
                        if (metaEl) metaEl.textContent = `Loaded from CSV · ${rows.length.toLocaleString()} exams`;
                        const filterBr = document.getElementById('gius-filter-bar');
                        if (filterBr) filterBr.style.display = '';
                        const progSec = document.getElementById('gius-progress-section');
                        if (progSec) progSec.style.display = 'none';
                        const pauseBtn = document.getElementById('gius-proctor-pause');
                        if (pauseBtn)  { pauseBtn.style.display = 'none'; pauseBtn.innerHTML = '&#x23F8; Pause'; }
                        const refreshBtn = document.getElementById('gius-proctor-refresh');
                        if (refreshBtn) refreshBtn.disabled = false;
                        const emptyState = document.getElementById('gius-empty-state');
                        if (emptyState) emptyState.style.display = 'none';
                        applyFiltersAndSort();
                    };
                    reader.readAsText(file);
                    fileInput.value = '';
                });
            }
        
            // Each fetch has a token; a newer fetch or a CSV upload invalidates it.
            let _scrapeToken = 0;

            function startScrape(scope) {
                const token = ++_scrapeToken;
                const current = () => token === _scrapeToken;
                // Shown again if this fetch is stopped by an expired session.
                const previousRows = _allRows;
                _scraping = true;
                _paused = false;
                const emptyState = document.getElementById('gius-empty-state');
                if (emptyState) emptyState.style.display = 'none';
                const progSec = document.getElementById('gius-progress-section');
                const progBar = document.getElementById('gius-progress-bar');
                const progLbl = document.getElementById('gius-progress-label');
                const filterBr = document.getElementById('gius-filter-bar');
                const metaEl = document.getElementById('gius-proctor-meta');
                const warnEl = document.getElementById('gius-proctor-warn');
                const refreshBtn = document.getElementById('gius-proctor-refresh');
                const pauseBtn = document.getElementById('gius-proctor-pause');
                if (refreshBtn) refreshBtn.disabled = true;
                if (pauseBtn) {
                    pauseBtn.style.display = '';
                    pauseBtn.innerHTML = '&#x23F8; Pause';
                    pauseBtn.onclick = () => {
                        if (_paused) {
                            _paused = false;
                            pauseBtn.innerHTML = '&#x23F8; Pause';
                            if (_resumeFn) _resumeFn();
                        } else {
                            _paused = true;
                            pauseBtn.innerHTML = '&#x25B6; Resume';
                        }
                    };
                }
                if (progSec)  progSec.style.display = '';
                if (filterBr) filterBr.style.display = '';
        
                const scopeLabel = scope && scope.label ? ` · ${scope.label}` : '';
        
                scrapeAll({
                    isCancelled: () => !current(),
                    onProgress(stats) {
                        if (!current()) return;
                        const pct = stats.totalProctors
                            ? Math.round((stats.proctorsDone / stats.totalProctors) * 100)
                            : Math.round((stats.depts / stats.totalDepts) * 50);
                        if (progBar) progBar.style.width = pct + '%';
                        if (progLbl) {
                            if (stats.totalProctors) {
                                progLbl.textContent =
                                    `Scraped ${stats.proctorsDone} / ${stats.totalProctors} entities · ${stats.exams.toLocaleString()} exams`;
                            } else {
                                progLbl.textContent = scope && scope.label
                                    ? `Fetching ${scope.label}…`
                                    : `Fetching departments ${stats.depts} / ${stats.totalDepts}…`;
                            }
                        }
                    },
                    onRows(rows) {
                        if (!_scraping || !current()) return;
                        setAllRows(rows);
                        applyFiltersAndSort({ keepPage: true });
                    },
                    onAbort() {
                        if (!current()) return;
                        _scraping = false;
                        _paused = false;
                        setAllRows(previousRows);
                        if (progSec)    progSec.style.display = 'none';
                        if (refreshBtn) refreshBtn.disabled = false;
                        if (pauseBtn)   { pauseBtn.style.display = 'none'; pauseBtn.innerHTML = '&#x23F8; Pause'; }
                        applyFiltersAndSort();
                    },
                    onError(type) {
                        if (type === 'SESSION_EXPIRED') {
                            if (warnEl) {
                                warnEl.style.display = '';
                                warnEl.innerHTML = '<span class="gius-warn-pill">⚠ Session expired — sign in again, then Refresh</span>';
                            }
                        }
                    },
                    onComplete(rows, stats) {
                        if (!_scraping || !current()) return;
                        if (stats && stats.failed && warnEl) {
                            warnEl.style.display = '';
                            warnEl.innerHTML = `<span class="gius-warn-pill">⚠ ${stats.failed} request(s) failed — results may be incomplete and were not saved</span>`;
                        }
                        _scraping = false;
                        _paused = false;
                        setAllRows(rows);
                        if (progSec)    progSec.style.display = 'none';
                        if (refreshBtn) refreshBtn.disabled = false;
                        if (pauseBtn)   { pauseBtn.style.display = 'none'; pauseBtn.innerHTML = '&#x23F8; Pause'; }
                        const now = new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
                        if (metaEl) metaEl.textContent = `Last updated: ${now}${scopeLabel} · ${rows.length.toLocaleString()} exams`;
                        applyFiltersAndSort();
                    },
                }, scope);
            }
        
            function openPanel() {
                // Hide the entry trigger while the aggregator is on the page
                const trigger = document.getElementById('gius-proctor-trigger');
                if (trigger) trigger.classList.add('gius-hide');
        
                if (_panelEl) { _panelEl.style.display = ''; return; }
        
                const panel = buildPanel();
                _panelEl = panel;
        
                const anchor = document.getElementById('mainTbl') || document.getElementById('form1');
                if (!anchor) return;
                anchor.parentNode.insertBefore(panel, anchor);
                wirePanel(panel);
                populateFetchDept();
        
                const cached = loadCache();
                if (cached && cached.rows && cached.rows.length) {
                    setAllRows(cached.rows.map(normalizeRow));
                    const age = formatCacheAge(cached.scrapedAt);
                    const dateStr = new Date(cached.scrapedAt).toLocaleDateString('en-GB',
                        { day: 'numeric', month: 'short', year: 'numeric' });
                    const metaEl = document.getElementById('gius-proctor-meta');
                    if (metaEl) metaEl.textContent = `Last updated: ${dateStr} (${age}) · ${cached.rows.length.toLocaleString()} exams`;
                    const filterBr = document.getElementById('gius-filter-bar');
                    if (filterBr) filterBr.style.display = '';
                    applyFiltersAndSort();
                } else {
                    const metaEl = document.getElementById('gius-proctor-meta');
                    if (metaEl) metaEl.textContent = 'No data — click Fetch to load schedules';
                    const emptyState = document.getElementById('gius-empty-state');
                    if (emptyState) emptyState.style.display = '';
                }
            }
        
            // ── Entry point ───────────────────────────────────────────────────────────
        
            function injectTrigger() {
                if (document.getElementById('gius-proctor-trigger')) return;
                const row = document.getElementById('MainContent_lstTR');
                if (!row) return;
                const btn = document.createElement('button');
                btn.id = 'gius-proctor-trigger';
                btn.type = 'button';
                btn.className = 'gius-btn gius-btn-primary';
                btn.innerHTML = '<i class="fa fa-laptop"></i> View All Proctor Schedules';
                btn.addEventListener('click', openPanel);
                const td = row.querySelector('td') || row;
                td.appendChild(btn);
            }
        
            function init() {
                injectStyles();
                injectTrigger();
            }
        
            init();
        }

    if (/\/ProctorExchange_m\.aspx$/i.test(location.pathname)) {
        proctorAggregator(S);
    }
})();
