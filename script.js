let btnClear = document.createElement("button");
btnClear.classList.add("buttonClear");
btnClear.textContent = "Clear";
document.body.appendChild(btnClear);

let container = document.createElement("div");
container.classList.add('cont');
document.body.appendChild(container);

let gridVar = "--flexible";


let size = parseInt(prompt("grid: "));
let squared = Math.pow(size, 2);


for (let i = 0; i < squared; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    div.textContent = "";
    container.appendChild(div);
    div.addEventListener("pointerenter", e => {
        /* div.classList.add("new"); */
       
        div.classList.add("new");
    })
    btnClear.addEventListener("click", (e) => {
        div.classList.remove("new");
    })
}

document.documentElement.style.setProperty(gridVar, size);