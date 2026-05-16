// ==UserScript==
// @name        GIU upload grades script
// @description Adds some nice-to-have features to the Faculty section of the GIU Admin system.
// @match       https://portal.giu-uni.de/*
// @namespace   ramin0
// @version     1.1
// @author      Ahmed Sherif, Mo.Elmaadawy
// @icon        data:image/png;base64,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
// @run-at      document-idle
// ==/UserScript==


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


function readMainCSVFile(file, index = -1) {
    return new Promise((resolve, reject) => {
        const outputArray = [];
        const reader = new FileReader();

        reader.onload = function (e) {
            const text = e.target.result;
            const lines = text.trim().split(/\r?\n/);

            lines.forEach(line => {
                const row = line.split(",").map(v => v.trim());
                const name = row[0];
                const grade = (index === -1) ? row[row.length - 1] : row[index] ?? "";

                if (index === -1 && !name.match(/^\(\d+\)/)) return; // skip non-student rows

                if (grade !== "" && !isNaN(grade)) {
                    outputArray.push(Number(grade));
                } else {
                    outputArray.push(0); // empty grade → 0
                }
            });

            resolve(outputArray);
        };

        reader.onerror = reject;
        reader.readAsText(file);
    });
}


function createGradeButtons(table) {

    const container = document.createElement("div");
    container.style.cssText = `
        margin-top: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    `;

    // ===== Upload Button =====
    const uploadBtn = document.createElement("button");
    uploadBtn.type = "button";
    uploadBtn.textContent = "📄 Upload Grades CSV";
    uploadBtn.style.cssText = `
        padding: 8px 14px;
        background-color: #0d6efd;
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    `;

    const fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = ".csv";
    fileInput.style.display = "none";

    uploadBtn.onclick = () => fileInput.click();

    // ===== Download Button =====
    const downloadBtn = document.createElement("button");
    downloadBtn.type = "button";
    downloadBtn.textContent = "📄 Download Grades CSV";
    downloadBtn.style.cssText = uploadBtn.style.cssText;

    downloadBtn.onclick = () => {
        const rows = document.querySelectorAll("#Table1 tbody tr");
        let csv = [["Name", "Grade"]];

        rows.forEach((row, index) => {
            if (index === 0) return;
            let name = "";
            try {
                name = row.cells[0]?.querySelector("span").textContent;
            } catch (err) {}
            const grade = row.cells[2]?.querySelector("input")?.value;
            csv.push([name, grade]);
        });

        const blob = new Blob([csv.join("\n")], { type: "text/csv" });
        const url = URL.createObjectURL(blob);

        const csvTitleId = document.getElementById("MainContent_crntLbl");
        const csvTitle = csvTitleId.textContent
                         .split("||")[0]
                         .replace(/\s+/g, "")
                         .trim();

        const a = document.createElement("a");
        a.href = url;
        a.download = csvTitle;
        a.click();

        URL.revokeObjectURL(url);
    };

    container.appendChild(uploadBtn);
    container.appendChild(fileInput);
    container.appendChild(downloadBtn);

    table.insertAdjacentElement("afterend", container);

    fileInput.addEventListener("change", async () => {
        const file = fileInput.files[0];
        if (!file) return;

        const data = await readMainCSVFile(file, -1);
        console.log(data);

        let dataIndex = 0;
        document.querySelectorAll("#Table1 tbody tr").forEach((row, index) => {
            if (index === 0) return;
            const input = row.cells[2]?.querySelector("input");
            if (!input) return;
            input.value = data[dataIndex++];
        });
    });
}


try {
    if (location.pathname === '/GIUb/INTStaff/ManageGroupGrade_m.aspx') {
        waitForElement("#Table1", (table) => {
            if (table.tagName === "TABLE") {
                console.log("✅ #data exists and is a TABLE");
                createGradeButtons(table);
            } else {
                console.log("❌ #data not a TABLE");
            }
        });
    }
} catch (err) {
    console.log("err message", err.message);
}