const container = document.querySelector(".container");

function randomRGB() {
    return Math.floor(Math.random()*256);
}

function formGrid(n) {
    for (let i = 0; i < n; i++) {
        const row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < n; j++) {
            const grid = document.createElement("div");
            grid.classList.add("grid");
            row.appendChild(grid);
        }
        container.appendChild(row);
    }
    const grids = document.querySelectorAll(".grid");
    grids.forEach((grid) => {
        let numberTouched = 1;
        grid.addEventListener("mouseenter", function (e) {
            e.target.style.backgroundColor = `rgb(${randomRGB()}, ${randomRGB()}, ${randomRGB()})`;
            numberTouched -= 0.1;
            e.target.style.opacity = `${numberTouched}`;
        });
    });
}

let n = 4
formGrid(n);

const btn = document.querySelector("button");
btn.addEventListener("click", () => {
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }
    n = prompt("Enter size of grid:");
    if (n < 101) {
        formGrid(n);
    } 
});


