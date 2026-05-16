// ==UserScript==
// @name        GIU Manage Group Grades
// @description Upload and download grades CSV on the Manage Group Grade page.
// @match       https://portal.giu-uni.de/GIUb/INTStaff/ManageGroupGrade_m.aspx
// @namespace   ramin0
// @version     1.4
// @author      Mo.Elmaadawy
// @icon         data:image/png;base64,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
// @run-at      document-idle
// ==/UserScript==


// ── Style injection ──────────────────────────────────────────────────────────

function injectGradeStyles() {
    if (document.getElementById('gius-mgg-styles')) return;
    const style = document.createElement('style');
    style.id = 'gius-mgg-styles';
    style.textContent = `
        @keyframes gmggSlide {
            from { opacity: 0; transform: translateY(-14px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes gmggFadeIn {
            from { opacity: 0; }
            to   { opacity: 1; }
        }

        .gmgg-panel {
            background: #ffffff;
            border: 1px solid #eeeeee;
            border-radius: 6px;
            box-shadow: 0 1px 4px 0 rgba(0,0,0,0.10);
            position: relative;
            overflow: hidden;
            margin: 20px 0 14px;
            animation: gmggSlide 0.38s cubic-bezier(0.25,0.46,0.45,0.94);
            font-family: 'Open Sans', Arial, Helvetica, sans-serif;
        }
        .gmgg-panel::before {
            content: "";
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 3px;
            background: #ffc107;
            z-index: 1;
        }
        .gmgg-panel-header {
            background: #272c33;
            color: #fff;
            padding: 10px 14px;
            border-bottom: 2px solid #ffc107;
        }
        .gmgg-panel-title {
            margin: 0;
            font-size: 14px;
            font-weight: 700;
            color: #fff;
        }
        .gmgg-panel-subtitle {
            margin: 3px 0 0;
            font-size: 12px;
            color: rgba(255,255,255,0.7);
        }
        .gmgg-panel-body {
            padding: 14px 16px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }
        .gmgg-btn-row {
            display: flex;
            align-items: center;
            flex-wrap: wrap;
            gap: 8px;
        }
        .gmgg-btn {
            height: 32px;
            padding: 0 14px;
            border-radius: 6px;
            font-size: 13px;
            font-weight: 700;
            cursor: pointer;
            border: 1px solid transparent;
            transition: all 0.2s ease;
            display: inline-flex;
            align-items: center;
            gap: 5px;
            white-space: nowrap;
            font-family: 'Open Sans', Arial, sans-serif;
        }
        .gmgg-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none !important;
            box-shadow: none !important;
        }
        .gmgg-btn-upload {
            background: #1B59C6;
            border-color: #1648a8;
            color: #fff;
        }
        .gmgg-btn-upload:not(:disabled):hover {
            background: #1648a8;
            transform: translateY(-1px);
            box-shadow: 0 3px 10px rgba(27,89,198,0.35);
        }
        .gmgg-btn-download {
            background: #fff;
            border-color: #d1d5db;
            color: #374151;
        }
        .gmgg-btn-download:not(:disabled):hover {
            background: #f9fafb;
            border-color: #9ca3af;
        }
        .gmgg-feedback {
            font-size: 13px;
            font-family: 'Open Sans', sans-serif;
            padding: 8px 10px;
            border-radius: 6px;
            animation: gmggFadeIn 0.25s ease;
        }
        .gmgg-feedback-success {
            background: #e8f5e9;
            color: #15803d;
            border: 1px solid #a5d6a7;
        }
        .gmgg-feedback-error {
            background: #fee2e2;
            color: #991b1b;
            border: 1px solid #fca5a5;
        }
        .gmgg-stats {
            animation: gmggFadeIn 0.35s ease;
        }
        .gmgg-stats-title {
            font-size: 11px;
            font-weight: 700;
            color: #6b7280;
            text-transform: uppercase;
            letter-spacing: 0.6px;
            margin-bottom: 8px;
            font-family: 'Open Sans', sans-serif;
        }
        .gmgg-stats-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 6px;
        }
        .gmgg-stat-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 10px;
            background: #e5e7eb;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            font-size: 13px;
        }
        .gmgg-stat-label {
            font-weight: 600;
            color: #374151;
            font-family: 'Open Sans', sans-serif;
        }
        .gmgg-stat-val {
            font-weight: 700;
            color: #111827;
            font-family: 'Open Sans', sans-serif;
        }
    `;
    document.head.appendChild(style);
}

// ── Stats helpers ─────────────────────────────────────────────────────────────

function computeStats(values) {
    const nums = values.filter(v => v !== '' && Number.isFinite(+v)).map(Number);
    if (!nums.length) return null;
    const min = Math.min(...nums);
    const max = Math.max(...nums);
    const avg = nums.reduce((a, b) => a + b, 0) / nums.length;
    return {
        min:   min.toFixed(1),
        max:   max.toFixed(1),
        avg:   avg.toFixed(1),
        range: (max - min).toFixed(1),
        count: nums.length
    };
}

function getTableGrades() {
    const grades = [];
    document.querySelectorAll('#Table1 tbody tr').forEach((row, i) => {
        if (i === 0) return;
        const val = row.cells[2]?.querySelector('input')?.value;
        if (val !== undefined && val !== '') grades.push(val);
    });
    return grades;
}

function renderStats(body) {
    body.querySelector('.gmgg-stats')?.remove();
    const stats = computeStats(getTableGrades());
    if (!stats || stats.count < 2) return;

    const el = document.createElement('div');
    el.className = 'gmgg-stats';
    el.innerHTML = `
        <div class="gmgg-stats-title">Grade Statistics — ${stats.count} students</div>
        <div class="gmgg-stats-grid">
            <div class="gmgg-stat-row">
                <span class="gmgg-stat-label">Min</span>
                <span class="gmgg-stat-val">${stats.min}</span>
            </div>
            <div class="gmgg-stat-row">
                <span class="gmgg-stat-label">Max</span>
                <span class="gmgg-stat-val">${stats.max}</span>
            </div>
            <div class="gmgg-stat-row">
                <span class="gmgg-stat-label">Avg</span>
                <span class="gmgg-stat-val">${stats.avg}</span>
            </div>
            <div class="gmgg-stat-row">
                <span class="gmgg-stat-label">Range</span>
                <span class="gmgg-stat-val">${stats.range}</span>
            </div>
        </div>
    `;
    body.appendChild(el);
}

// ── CSV helper ────────────────────────────────────────────────────────────────

function parseGradeCSV(text) {
    const map = {};
    text.trim().split(/\r?\n/).forEach(line => {
        const cols  = line.split(',').map(v => v.trim());
        const name  = cols[0] || '';
        const grade = cols[cols.length - 1];
        const m     = name.match(/\((\d+)\)/);
        if (m && grade !== '' && !isNaN(grade)) map[m[1]] = grade;
    });
    return map;
}

// ── UI ────────────────────────────────────────────────────────────────────────

function createGradeButtons(table) {
    injectGradeStyles();

    const panel = document.createElement('div');
    panel.className = 'gmgg-panel';

    const fileInput    = document.createElement('input');
    fileInput.type     = 'file';
    fileInput.accept   = '.csv';
    fileInput.style.display = 'none';

    const uploadBtn       = document.createElement('button');
    uploadBtn.type        = 'button';
    uploadBtn.textContent = 'Upload Grades CSV';
    uploadBtn.className   = 'gmgg-btn gmgg-btn-upload';

    const downloadBtn       = document.createElement('button');
    downloadBtn.type        = 'button';
    downloadBtn.textContent = 'Download Grades CSV';
    downloadBtn.className   = 'gmgg-btn gmgg-btn-download';

    let feedbackEl = null;

    function showFeedback(msg, type = 'success') {
        if (feedbackEl) feedbackEl.remove();
        feedbackEl = document.createElement('div');
        feedbackEl.className = `gmgg-feedback gmgg-feedback-${type}`;
        feedbackEl.textContent = msg;
        body.appendChild(feedbackEl);
        setTimeout(() => { if (feedbackEl) { feedbackEl.remove(); feedbackEl = null; } }, 4000);
    }

    uploadBtn.onclick = () => fileInput.click();

    downloadBtn.onclick = () => {
        const rows = document.querySelectorAll('#Table1 tbody tr');
        const csv  = [['Name', 'Grade']];

        rows.forEach((row, index) => {
            if (index === 0) return;
            let name = '';
            try { name = row.cells[0]?.querySelector('span').textContent; } catch (err) {}
            const grade = row.cells[2]?.querySelector('input')?.value;
            csv.push([name, grade]);
        });

        const blob = new Blob([csv.join('\n')], { type: 'text/csv' });
        const url  = URL.createObjectURL(blob);

        const csvTitleId = document.getElementById('MainContent_crntLbl');
        const csvTitle   = csvTitleId.textContent
            .split('||')[0].replace(/\s+/g, '').trim();

        const a    = document.createElement('a');
        a.href     = url;
        a.download = csvTitle;
        a.click();
        URL.revokeObjectURL(url);
        showFeedback('✓ CSV downloaded successfully');
        renderStats(body);
    };

    fileInput.addEventListener('change', async () => {
        const file = fileInput.files[0];
        if (!file) return;
        fileInput.value = '';

        const grades  = parseGradeCSV(await file.text());
        let applied   = 0;
        let missing   = 0;

        document.querySelectorAll('#Table1 tbody tr').forEach((row, index) => {
            if (index === 0) return;
            const input    = row.cells[2]?.querySelector('input');
            const nameText = row.cells[0]?.querySelector('span')?.textContent || '';
            const m        = nameText.match(/\((\d+)\)/);
            if (!input || !m) return;
            if (grades[m[1]] !== undefined) {
                input.value = grades[m[1]];
                applied++;
            } else {
                missing++;
            }
        });

        const msg = missing > 0
            ? `✓ Applied ${applied} grade(s) — ${missing} student(s) not in CSV`
            : `✓ Grades applied to ${applied} student(s)`;
        showFeedback(msg, missing > 0 ? 'error' : 'success');
        renderStats(body);
    });

    panel.innerHTML = `
        <div class="gmgg-panel-header">
            <h4 class="gmgg-panel-title">Group Grades</h4>
            <p class="gmgg-panel-subtitle">Upload or download grades for this tutorial group</p>
        </div>
    `;

    const btnRow = document.createElement('div');
    btnRow.className = 'gmgg-btn-row';
    btnRow.append(uploadBtn, fileInput, downloadBtn);

    const body = document.createElement('div');
    body.className = 'gmgg-panel-body';
    body.appendChild(btnRow);
    panel.appendChild(body);

    const labelEl = document.getElementById('MainContent_crntLbl');
    (labelEl ?? table).insertAdjacentElement('afterend', panel);

    renderStats(body);

    return panel;
}

// ── Entry point ───────────────────────────────────────────────────────────────

try {
    if (location.pathname === '/GIUb/INTStaff/ManageGroupGrade_m.aspx') {
        let activeCard = null;

        function checkTableVisibility() {
            const gradeTable = document.querySelector('#MainContent_nttTb');
            const visible    = gradeTable !== null && gradeTable.offsetParent !== null;

            if (visible && !activeCard) {
                activeCard = createGradeButtons(document.querySelector('#Table1'));
            } else if (!visible && activeCard) {
                activeCard.remove();
                activeCard = null;
            }
        }

        const observer = new MutationObserver(checkTableVisibility);
        observer.observe(document.body, {
            childList:       true,
            subtree:         true,
            attributes:      true,
            attributeFilter: ['style', 'class', 'hidden']
        });

        checkTableVisibility();
    }
} catch (err) {
    console.log('err message', err.message);
}
