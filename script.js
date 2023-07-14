const DEFAULT_SIZE = 16
const MAX_SIZE = 100
const MIN_SIZE = 2
let gridSize = DEFAULT_SIZE // Amount of squares per row/column
const container = document.querySelector(".container")
const boxes = document.querySelectorAll(".box")
generateGrid(gridSize)

function generateGrid(gridSize){
    let boxWidth = 512 / gridSize
    let boxHeight = boxWidth
    for(let i=0; i<gridSize; i++){
        for(let j=0; j<gridSize; j++){
            const box = document.createElement("div")
            // box.classList.add("box")
            box.style.width = `${boxWidth}px`
            box.style.height = `${boxHeight}px`
            box.addEventListener("mouseover", changeColor)
            // Another way to add hover listener
            // box.addEventListener("mouseenter", () => {
            //     box.classList.add('black')
            // })
            container.appendChild(box)
            // console.log(`Appended div number ${16*i+j}`)
        }
    }
}

function setSize(){
    let size = parseInt(prompt("Enter the number of boxes per row you want"))
    if(Number.isInteger(size) && size <= MAX_SIZE && size >= MIN_SIZE){
        gridSize = size
        console.log(`Setting size to default of ${gridSize}`)
    }
    else{
        gridSize = DEFAULT_SIZE
        console.log(`Size entered was invalid. Setting size to default of ${DEFAULT_SIZE}`)
    }
    clearGrid()
    generateGrid(gridSize)
}

function clearGrid(){
    while(container.firstChild) container.removeChild(container.lastChild);
}

function changeColor(e){
    e.target.classList.add('black')
}