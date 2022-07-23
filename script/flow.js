import { GAME_BOARD } from "./constants.js"
import { inputDirection, lastInputDirection } from "./input.js"
import { main, myReq } from "./main.js"
import { snakeBody } from "./snake.js"
export function resetAll() {
   cancelAnimationFrame(myReq)
   inputDirection.x = 0
   inputDirection.y = 0
   lastInputDirection.x = 0
   lastInputDirection.y = 0
   snakeBody.length = 1
   snakeBody[0].x =  1
   snakeBody[0].y = 1

}
export function startGame() {
   let menu = document.querySelector('.menu')
   menu.style.display = 'none'
   GAME_BOARD.style.display = 'grid'
   window.requestAnimationFrame(main)
}