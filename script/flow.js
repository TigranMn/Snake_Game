import { GAME_BOARD } from "./constants.js"
import { inputDirection, lastInputDirection } from "./input.js"
import { main, myReq } from "./main.js"
import { snakeBody } from "./snake.js"
let isPaused = false
// Reset game variables ↓

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

// Start or resume the game ↓
export function startGame() {
   isPaused = false
   document.querySelector('.pauseMenu').style.display = 'none'
   document.querySelector('.menu').style.display = 'none'
   GAME_BOARD.style.display = 'grid'
   window.requestAnimationFrame(main)
}

// Pause or resume the game via escape ↓
window.addEventListener('keydown',key => {
   if(key.key === 'Escape' && isPaused === false) {
      isPaused = true
      pauseGame()
      console.log(isPaused)
   }
   else if(key.key === 'Escape' && isPaused === true) {
      startGame()
   }
})

document.querySelector('.resume').addEventListener('click',startGame)
function pauseGame() {
   cancelAnimationFrame(myReq)
   document.querySelector('.pauseMenu').style.display = 'flex'
}