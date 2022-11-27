const grid = document.querySelector('.grid-container')
let gridSize = 16

function createGrid(numSquare) {

    const length = Math.floor(600/numSquare).toString() + "px"
    grid.style.gridTemplateColumns = `repeat(${numSquare}, 1fr)`


    for (let i=0; i<numSquare*numSquare; i++){

        const square = document.createElement('div')
        square.classList.add('square')
        square.style.width = length
        square.style.height = length
        grid.appendChild(square)
    }

    const gridDiv = document.querySelectorAll('.square')

    gridDiv.forEach((square) => {
        square.addEventListener('mouseover', function(e){
            e.target.style.backgroundColor = 'black'
        })
    })
}


function resetGrid() {
    grid.innerHTML = ''
    createGrid(gridSize)
}


createGrid(gridSize)



const clear = document.querySelector('.clear_btn')

clear.addEventListener('click', ()=>{
    resetGrid()
})

let slider = document.querySelector('.sizeSlider')
let sliderValue = document.querySelector('.sliderValue')
sliderValue.textContent = slider.value

slider.addEventListener('input', ()=>{
    sliderValue.textContent = slider.value
    gridSize = slider.value
    resetGrid()

})