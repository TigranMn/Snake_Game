import {GAME_BOARD, GRID_SIZE} from './constants.js'
import { onSnake, snakeBody } from './snake.js'
import { onWall } from './wall.js'

//getting random position for food in the start of the game
export let foodPos = {
         x: Math.floor(Math.random() * GRID_SIZE.x) +1,
         y: Math.floor(Math.random() * GRID_SIZE.y)+1
}
export function update() {

   // enlargen snake when it eats a food↓
   if(onSnake(foodPos)) {
      snakeBody.push({...snakeBody[snakeBody.length-1]})
      foodPos=getRandomFoodPos()
   }
}
export function draw() {

   //creating and drawing food
   let food = document.createElement('div')
   food.style.gridRowStart = foodPos.x
   food.style.gridColumnStart = foodPos.y
   food.classList.add('food')
   GAME_BOARD.appendChild(food)
}
export function getRandomFoodPos(foodPos = null) {

   //getting random position for food, unless it is on an empty position
   while(foodPos == null || onSnake(foodPos) || onWall(foodPos)) {
      foodPos = {
         x: Math.floor(Math.random() * GRID_SIZE.x) +1,
         y: Math.floor(Math.random() * GRID_SIZE.y)+1
      }
   }
   return foodPos
}