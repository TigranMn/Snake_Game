import { GAME_BOARD, HIGH_SCORE, MENU, PAUSE_MENU, SCORE, STORAGE } from "./constants.js"
import { inputDirection, lastInputDirection } from "./input.js"
import { main, myReq } from "./main.js"
import { snakeBody } from "./snake.js"
let isPaused = false
export let inMenu = true
// Reset game variables ↓

export function resetAll() {
   cancelAnimationFrame(myReq)
   inMenu = true
   document.querySelector('#score').innerText = 0
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
   inMenu = false
   PAUSE_MENU.style.display = 'none'
   MENU.style.display = 'none'
   GAME_BOARD.style.display = 'grid'
   SCORE.style.display = 'flex'
   HIGH_SCORE.style.display = 'flex'
   document.querySelector('#highscore').innerText = getHighScore()
   window.requestAnimationFrame(main)
}

// Pause or resume the game via escape ↓
window.addEventListener('keydown',key => {
   if(key.key === 'Escape' && !isPaused && !inMenu) {
      isPaused = true
      pauseGame()
   }
   else if(key.key === 'Escape' && isPaused && !inMenu) {
      startGame()
   }
})

document.querySelector('.resume').addEventListener('click',startGame)

function pauseGame() {
   cancelAnimationFrame(myReq)
   PAUSE_MENU.style.display = 'flex'
}
// Adding new highscore to local storage
export function addScoreToStorage() {
   let thisScore = document.querySelector('#score').innerText
   let highscore = getHighScore()
   if(!highscore || +thisScore > +highscore) {
   STORAGE.setItem('highscore', thisScore)
   }
}

function getHighScore() {
   return STORAGE.getItem('highscore')
}