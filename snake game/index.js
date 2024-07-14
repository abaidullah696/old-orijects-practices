// game constants and var 
let direction = {x:0,y:0};
const foodSound = new Audio('music/food.mp3');
const gameOverSound = new Audio('music/gameover.mp3');
const moveSound = new Audio('music/move.mp3');
const musicSound = new Audio('music/music.mp3');
let speed = 2; 
let lastPaintTime = 0;
let snakeArr =[
    {x:13,y:15}
]
let food = {x: 6, y: 7};
// game function
function main(ctime) {
    // console.log(ctime)
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime; 
    gameEngine();
}
function gameEngine() {
    // part1: UppdAting the snake position arry



    // part2: display the snake and food
    board.innerHTML =  "";
    snakeArr.forEach((e, index) => {
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('food');
        board.appendChild(foodElment);
        
        });
}

// main logic starts here
window.requestAnimationFrame(main);

