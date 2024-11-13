const htmlBackground = document.querySelector("body");
const header = document.querySelector("h1");
header.style.backgroundColor = "#ffffff";
htmlBackground.style.backgroundColor = "#31394d";
const container = document.querySelector("#container");
container.style.display = "flex";
container.style.border = "solid";
container.style.flexWrap = "wrap";
container.style.backgroundColor = "white";
const checkBox = document.querySelector("#colorYN");
let squaresInRow = 16;
const squares = [];

let shortSideLength = (window.innerHeight < window.innerWidth)
    ? window.innerHeight *.85 : window.innerWidth *.9;

let size = shortSideLength;

container.style.height = `${size}px`;
container.style.width = `${size}px`;

function createGrid(squaresInRow = 16,inColor=false){
    if (squaresInRow<=100 && squaresInRow>0) {
        for (let i = 0; i< squaresInRow**2; i++){
            squares[i] = document.createElement("div");
            squares[i].style.height = `${size/squaresInRow}px`;
            squares[i].style.width = squares[i].style.height;
            if (inColor) {
                squares[i].style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;
            } else {
                squares[i].style.backgroundColor = "black";
            }
            squares[i].style.opacity = 0;
            squares[i].style.flex = `1 0 ${size/squaresInRow}px`
            squares[i].addEventListener("mouseenter", () => {
                if (squares[i].style.opacity*1<1) {
                    squares[i].style.opacity = squares[i].style.opacity*1+0.1;
                }
            });
            container.appendChild(squares[i]);
        };
    } else {
        alert("Error! Enter a number between 1 and 100");
        createGrid(16,checkBox.checked);
    }
    
};

createGrid();

function clearGrid() {
    for (let j = 0; j<squares.length;j++) {
        container.removeChild(squares[j]);
    }
    squares.splice(0,squares.length);
};

const newGridButton = document.querySelector("button");

newGridButton.addEventListener("click", () => {
    clearGrid();
    createGrid(prompt("How many squares per row?")*1,checkBox.checked);
});

