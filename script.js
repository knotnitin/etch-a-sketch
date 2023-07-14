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
            box.style.width = `${boxWidth}px`
            box.style.height = `${boxHeight}px`
            box.addEventListener("mouseover", changeColor)
            // Another way to add hover listener
            // box.addEventListener("mouseenter", () => {
            //     box.classList.add('black')
            // })
            container.appendChild(box)
        }
    }
}

function setSize(){
    // Set new size of grid. Makes it default if out of range
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
    // Clears old grid
    while(container.firstChild) container.removeChild(container.lastChild);
}

function changeColor(e){
    // Adds color class black to box in grid
    e.target.classList.add('black')
}