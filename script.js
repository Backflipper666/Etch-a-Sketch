let container = document.createElement("div");
container.classList.add('cont');
document.body.appendChild(container);
//container.textContent = "Ihoho";
for (let i = 0; i < 16; i++) {
    let div = document.createElement("div");
    div.classList.add("grid");
    div.textContent = "a";
    container.appendChild(div);
}

//document.body.appendChild(document.querySelectorAll('div'));