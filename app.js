const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const color = document.querySelectorAll('.color')
const square = document.querySelectorAll('.square')
const btn = document.querySelector('.btn')
const btnStop = document.querySelector('.btn-stop')
let abort = false


function randomSquare() {

    let hexColor = '#';
 for(let i = 0;i<6; i++){
     hexColor += hex[getRandomNumber()]
 }



    let randomPosition = square[Math.floor(Math.random() * 9)]
    color.textContent = hexColor;
    randomPosition.style.backgroundColor = hexColor;
    randomPosition.textContent = hexColor;
    //assign random positon to click position
   // hitPosition = randomPosition.id
}

function getRandomNumber () {
    return Math.floor(Math.random() * hex.length)    
}


function moveColor() {
    
    timerId = setInterval(randomSquare, 10)
    
}


btn.addEventListener('click', function(){

if (abort === false) {
    abort = true
    moveColor()
}
else{
    clearInterval(timerId)
    abort = false
}
}); 
