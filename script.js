let gridSize = 16 // Amount of squares per row/column
const container = document.querySelector(".container")
const boxes = document.querySelectorAll(".box")
generateGrid(gridSize)

function generateGrid(size){
    for(let i=0; i<16; i++){
        for(let j=0; j<16; j++){
            const box = document.createElement("div")
            box.classList.add("box")
            box.addEventListener("mouseover", changeColor)
            // box.addEventListener("mouseenter", () => {
            //     box.classList.add('black')
            // })
            container.appendChild(box)
            // console.log(`Appended div number ${16*i+j}`)
        }
    }
}

function changeColor(e){
    e.target.classList.add('black')
}