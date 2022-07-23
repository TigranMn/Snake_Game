import { GAME_BOARD } from "./constants.js";
import { gameMode } from "./gameSettings.js";
import { getInputDirection } from './input.js'
import { noBorderMode } from "./gameSettings.js";

export let snakeBody = [{
  x: 11,
  y: 12
}]
export function updateSnake() {
  let inputDirection = getInputDirection()

  // Moving snake to the next position ↓
  for(let i = snakeBody.length - 2; i>=0; i--) {
     snakeBody[i+1] = {...snakeBody[i]}
  }
  
  //Moving snakes head to the next position ↓
  snakeBody[0].x+= inputDirection.y
  snakeBody[0].y+= inputDirection.x

  // Teleport snake to opposite side when it goes outside of the gameboard ↓
  if(noBorderMode) {
    if(snakeBody[0].x < 1) {
      snakeBody[0].x = 21
   }
   else if(snakeBody[0].x > 21) {
      snakeBody[0].x = 1
   }
   if(snakeBody[0].y < 1) {
      snakeBody[0].y = 32
   }
   else if(snakeBody[0].y > 32) {
      snakeBody[0].y = 1
   }
  }
}

export function drawSnake() {

  // Cleaning gameboard, creating all parts of snake's body and drawing them ↓
  GAME_BOARD.innerHTML = ''
   snakeBody.forEach(el => {
     let segment = document.createElement('div')
     segment.style.gridRowStart = el.x
     segment.style.gridColumnStart = el.y
     segment.classList.add('snake')
     GAME_BOARD.appendChild(segment)
   })
}
export function onSnake(position, ignoreHead = false) {

  // ignoreHead stands for ignoring snake's head when checking if it intersects with it's body
    if(!ignoreHead) {
   return snakeBody.some(el => {
     return (el.x === position.x && el.y === position.y)
     })
    }
    else {
      return snakeBody.some(el => {
        return (el.x === position.x && el.y === position.y && el !== snakeBody[0])
        })
    }
}

export function checkDeath() {
  gameMode()
}