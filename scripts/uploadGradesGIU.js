// ==UserScript==
// @name        GIU upload grades script
// @description Adds some nice-to-have features to the Faculty section of the GIU Admin system.
// @icon         https://is3-ssl.mzstatic.com/image/thumb/Purple128/v4/e7/cd/b0/e7cdb01f-0698-56bf-9752-c8d0294763f3/mzl.vprmijhl.png/246x0w.jpg
// @match       https://portal.giu-uni.de/*
// @namespace   ramin0
// @version     1.1
// @icon        https://i.ibb.co/Q7mgLHsW/GIU-images.png
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
