// ==UserScript==
// @name        GIU upload grades script
// @description Adds some nice-to-have features to the Faculty section of the GIU Admin system.
// @match       https://portal.giu-uni.de/*
// @namespace   ramin0
// @version     1.1
// @author      Mo.Elmaadawy
// @icon        https://i.ibb.co/Q7mgLHsW/GIU-images.png
// @run-at      document-idle
// ==/UserScript==

const TABLE_SEL = "#Table1 tbody tr";
const GRADE_COL = 2;
const BTN_STYLE = `
    padding: 8px 14px;
    background-color: #0d6efd;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
`;

function waitForElement(selector, callback, timeout = 10000) {
    const existing = document.querySelector(selector);
    if (existing) { callback(existing); return; }

    const observer = new MutationObserver(() => {
        const el = document.querySelector(selector);
        if (el) { observer.disconnect(); callback(el); }
    });
    observer.observe(document.body, { childList: true, subtree: true });
    setTimeout(() => observer.disconnect(), timeout);
}

function makeBtn(text) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.textContent = text;
    btn.style.cssText = BTN_STYLE;
    return btn;
}

function parseGradesCSV(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (e) => {
            const grades = e.target.result
                .trim()
                .split(/\r?\n/)
                .filter(line => line.split(",")[0].trim().match(/^\(\d+\)/))
                .map(line => {
                    const cols = line.split(",").map(v => v.trim());
                    const grade = cols[cols.length - 1];
                    return grade !== "" && !isNaN(grade) ? Number(grade) : 0;
                });
            resolve(grades);
        };
        reader.onerror = reject;
        reader.readAsText(file);
    });
}

function getTableRows() {
    return Array.from(document.querySelectorAll(TABLE_SEL)).slice(1);
}

function createGradeButtons(table) {
    const container = document.createElement("div");
    container.style.cssText = `
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".csv";
    fileInput.style.display = "none";

    const uploadBtn = makeBtn("📄 Upload Grades CSV");
    uploadBtn.onclick = () => fileInput.click();

    const downloadBtn = makeBtn("📄 Download Grades CSV");
    downloadBtn.onclick = () => {
        const rows = getTableRows();
        const csv = [
            ["Name", "Grade"],
            ...rows.map(row => [
                row.cells[0]?.querySelector("span")?.textContent ?? "",
                row.cells[GRADE_COL]?.querySelector("input")?.value ?? "",
            ]),
        ].map(r => r.join(",")).join("\n");

        const titleEl = document.getElementById("MainContent_crntLbl");
        const filename = titleEl
            ? titleEl.textContent.split("||")[0].replace(/\s+/g, "").trim()
            : "grades";

        const url = URL.createObjectURL(new Blob([csv], { type: "text/csv" }));
        const a = document.createElement("a");
        a.href = url;
        a.download = filename;
        a.click();
        a.remove();
        URL.revokeObjectURL(url);
    };

    fileInput.addEventListener("change", async () => {
        const file = fileInput.files[0];
        if (!file) return;
        const grades = await parseGradesCSV(file);
        getTableRows().forEach((row, i) => {
            const input = row.cells[GRADE_COL]?.querySelector("input");
            if (input) input.value = grades[i] ?? 0;
        });
    });

    container.append(uploadBtn, fileInput, downloadBtn);
    table.insertAdjacentElement("afterend", container);
}

if (location.pathname === '/GIUb/INTStaff/ManageGroupGrade_m.aspx') {
    waitForElement("#Table1", (table) => {
        if (table.tagName === "TABLE") createGradeButtons(table);
    });
}
