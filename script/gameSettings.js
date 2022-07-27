import { onSnake, snakeBody } from "./snake.js";
import { myReq } from "./main.js";
import { onWall } from "./wall.js";
import { addScoreToStorage,  resetAll, startGame } from "./flow.js";
import { GAME_BOARD, HIGH_SCORE, LOSING_MENU, MENU, PAUSE_MENU, SCORE } from "./constants.js";
export let noBorderMode = true
export let level = 0
export let difficulty = 0
let gameOverSound = new Audio('sounds/gameOver.wav')
let clickSound = new Audio('sounds/menuClick.wav')
let hoverSound = new Audio('sounds/menuHover.wav')
// Choose difficulty in menu ↓
let difficultyBtn = document.querySelector('.difficulty')
difficultyBtn.addEventListener('click', changeDifficulty)

function changeDifficulty() {
   if(difficultyBtn.innerText === 'Easy') {
      difficultyBtn.innerText = 'Medium'
      difficulty = 1
   }
   else if(difficultyBtn.innerText === 'Medium') {
      difficultyBtn.innerText = 'Hard'
      difficulty = 2
   }
   else if(difficultyBtn.innerText === 'Hard') {
      difficultyBtn.innerText = 'Easy'
      difficulty = 0
   }
}

// Choosing level in menu ↓
let lvlBtn = document.querySelector('.level')
lvlBtn.addEventListener('change',getLevel)
function getLevel() {
   level = lvlBtn.value
}

// Changing game mode in menu ↓
let toggle = document.querySelector('.gameMode')
toggle.addEventListener('click',function() {
   if(toggle.innerText === 'No border mode') {
      noBorderMode = false
      toggle.innerText = 'Border mode'
   }
   else if(toggle.innerText === 'Border mode') {
      noBorderMode = true
      toggle.innerText = 'No border mode'
   }
})

//Try again button after losing ↓
document.querySelector('.tryAgain').addEventListener('click',tryAgain)
function tryAgain() {
   LOSING_MENU.style.display = 'none'
         resetAll()
         startGame()
}
//Main menu buttons event handlers ↓

let mainMenu = document.querySelectorAll('.mainMenu')
mainMenu.forEach(el => {
   el.addEventListener('click',goToMenu)
})

function goToMenu() {
   SCORE.style.display = 'none'
   HIGH_SCORE.style.display = 'none'
   PAUSE_MENU.style.display = 'none'
   LOSING_MENU.style.display = 'none'
   GAME_BOARD.style.display = 'none'
   MENU.style.display = 'flex'
   resetAll()
}
function noBorder() {
   // Checking snakes intersection with wall or itself 
   if(onSnake(snakeBody[0],true) || onWall(snakeBody[0])) {
      gameOverSound.play()
      cancelAnimationFrame(myReq)
      addScoreToStorage()
      LOSING_MENU.style.display = 'flex'
      document.querySelector('.losingScore').innerText = 'Score: ' + document.querySelector('#score').innerText
   }
  
   }
   export function outsideBox() {
      return snakeBody[0].x > 21 || snakeBody[0].x < 1 || snakeBody[0].y > 21 || snakeBody[0].y < 1
   }

   function border() {
      if(outsideBox() || onSnake(snakeBody[0],true) || onWall(snakeBody[0])) {
         gameOverSound.play()
         cancelAnimationFrame(myReq)
         addScoreToStorage()
         LOSING_MENU.style.display = 'flex'
         document.querySelector('.losingScore').innerText = 'Score: ' + document.querySelector('#score').innerText
      }
      }
     export function gameMode() {
      // Checking death based on game mode
      noBorderMode ? noBorder() : border()
     }

     // Menu sounds
     let menuItems = document.querySelectorAll('.menuItem')
     menuItems.forEach(el => {
        el.addEventListener('click',function() { playSound(clickSound)})
     })
     
     menuItems.forEach(el => {
      el.addEventListener('mouseover',function() { playSound(hoverSound)})
     })

     export function playSound(sound) {
      sound.currentTime = 0
      let play = sound.play.bind(sound)
      play()
     }