document.getElementById("checkBtn").addEventListener("click", validateForm);

function setRowError(rowId, isError) {
  const row = document.getElementById(rowId);
  row.classList.toggle("error", isError);
}

function validateForm() {
  let valid = true;

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const faculty = document.getElementById("faculty").value.trim();
  const birth = document.getElementById("birth").value.trim();
  const address = document.getElementById("address").value.trim();

  ["row-name", "row-phone", "row-faculty", "row-birth", "row-address"].forEach(
    (id) => setRowError(id, false)
  );

  const nameReg = /^\p{L}{6} \p{L}\.\p{L}\.$/u;

  const phoneReg = /^\(\d{3}\)-\d{3}-\d{2}-\d{2}$/;

  const facultyReg = /^\p{L}{4}$/u;

  const birthReg = /^\d{2}\.\d{2}\.\d{4}$/;

  const addressReg = /^м\. \d{6}$/;

  if (!nameReg.test(name)) {
    setRowError("row-name", true);
    valid = false;
  }
  if (!phoneReg.test(phone)) {
    setRowError("row-phone", true);
    valid = false;
  }
  if (!facultyReg.test(faculty)) {
    setRowError("row-faculty", true);
    valid = false;
  }
  if (!birthReg.test(birth)) {
    setRowError("row-birth", true);
    valid = false;
  }
  if (!addressReg.test(address)) {
    setRowError("row-address", true);
    valid = false;
  }

  if (valid) {
    openResultWindow({ name, phone, faculty, birth, address });
  }
}

function openResultWindow(data) {
  const w = window.open("", "_blank", "width=420,height=320");
  w.document.write(`
    <!DOCTYPE html>
    <html><head><meta charset="UTF-8"><title>Введені дані</title>
    <style>
      body{font-family:Arial;padding:16px}
      .box{border:1px solid #ddd;border-radius:10px;padding:12px}
      p{margin:8px 0}
      b{display:inline-block;width:110px}
    </style>
    </head><body>
      <h3>Введені дані</h3>
      <div class="box">
        <p><b>ПІБ:</b> ${escapeHtml(data.name)}</p>
        <p><b>Телефон:</b> ${escapeHtml(data.phone)}</p>
        <p><b>Факультет:</b> ${escapeHtml(data.faculty)}</p>
        <p><b>Дата:</b> ${escapeHtml(data.birth)}</p>
        <p><b>Адреса:</b> ${escapeHtml(data.address)}</p>
      </div>
    </body></html>
  `);
  w.document.close();
}

function escapeHtml(s) {
  return String(s).replace(
    /[&<>"']/g,
    (c) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      }[c])
  );
}

const table = document.getElementById("table");
const colorPicker = document.getElementById("colorPicker");

const VARIANT = 11;
let count = 1;

for (let i = 0; i < 6; i++) {
  const row = table.insertRow();
  for (let j = 0; j < 6; j++) {
    const cell = row.insertCell();
    cell.textContent = count;

    cell.addEventListener("mouseover", () => {
      if (Number(cell.textContent) === VARIANT) {
        cell.style.backgroundColor = randomRgb();
      }
    });

    cell.addEventListener("click", () => {
      if (Number(cell.textContent) === VARIANT) {
        cell.style.backgroundColor = colorPicker.value;
      }
    });

    cell.addEventListener("dblclick", () => {
      if (Number(cell.textContent) === VARIANT) {
        const rowIndex = cell.parentNode.rowIndex;
        for (const c of table.rows[rowIndex].cells) {
          c.style.backgroundColor = colorPicker.value;
        }
      }
    });

    count++;
  }
}

function randomRgb() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
}
