import { SNAKE_SPEED } from './constants.js'
import {draw as drawFood, update as updateFood} from './food.js'
import { difficulty } from './gameSettings.js'
import { checkDeath, drawSnake,  updateSnake } from './snake.js'
import { drawWall } from './wall.js'
export let myReq

let lastRenderTime = 0
function main(currentTime) {
 myReq =    requestAnimationFrame(main) 
const secondsSinceLastRender = (currentTime - lastRenderTime)/ 1000

// if FPS is greater than we want, dont run the code below
if(secondsSinceLastRender < 1 / SNAKE_SPEED[difficulty]) return
lastRenderTime =currentTime

update()
draw()

}

function update() {
   updateSnake()
   checkDeath()
   updateFood()
}
function draw() {
   drawSnake()
   drawFood()
   drawWall()
}

window.requestAnimationFrame(main)
