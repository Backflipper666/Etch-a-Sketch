let wrap = document.getElementById("wrap");
let table = document.getElementById("table");
let input = parseInt(prompt("Enter size of the grid, e.g. 16, 7"));
let squared = Math.pow(input, 2);
console.log(table, wrap);
for (let i = 0; i < squared; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    div.textContent = "a";
    table.appendChild(div);
}

table.setAttribute("style", "display: grid; grid-template-columns: repeat(input, 1fr);")

