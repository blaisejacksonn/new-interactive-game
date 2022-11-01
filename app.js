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

    




})