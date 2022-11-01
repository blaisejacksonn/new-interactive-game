document.addEventListener('DOMContentLoaded',()=>{
    //selecting html elements
    const squares = document.querySelectorAll('.grid div')
    const scoreDisplay = document.querySelector('span')
    const startButton = document.querySelector('.start')

    //grid 
    const width = 10
    let currentIndex = 0
    let appleIndex = 0
    //setting snake array to move 
    let currentSnake = [2,1,0]
    let direction = 1
    let score = 0
    let speed = 0.8
    let intervalTime = 0
    let interval = 0

    // setting up keycodes functions to move with keyboard
    function control(e) {
        squares[currentIndex].classlist.remove('snake')
    
    if(e.keycode === 39){
        direction = 1
    } // right one square
    else if (e.keycode === 38){
        direction = -width 
    } // up movement ten
    else if (e.keycode === 37){
        direction = -1 
    } // left one square
    else if (e.keycode === 40){
        direction = +width
    } // down movement ten 
   }
document.addEventListener('keyup', control)


// start and restart setup
function startGame(){
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    squares[appleIndex].classList.remove('apple')
    clearInterval(interval)
    score = 0 //setting up restart
    direction = 1
    scoreDisplay.innerText = score
    intervalTime = 1000
    currentSnake = [2,1,0]
    currentIndex = 0
    currentSnake.forEach(index => squares[index].classList.add('snake'))
}

})