submit.addEventListener("click", () => {
    let numRow = document.getElementById("row").value;
    let numCol = document.getElementById("col").value;
    let table = document.getElementById("table");
    table.border = 1;
    for (let i = 1; i <= numRow; i++) {
        let tabRow = document.createElement("tr");
        table.appendChild(tabRow);
        for (let j = 1; j <= numCol; j++) {
          tabRow.appendChild(document.createElement("td")); 
        }
    }
});