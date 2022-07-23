import { onSnake, snakeBody } from "./snake.js";
import { myReq } from "./main.js";
import { onWall } from "./wall.js";
import { resetAll, startGame } from "./flow.js";
import { GAME_BOARD } from "./constants.js";
export let noBorderMode = true
export let level = 0
export let difficulty = 0

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

let lvlBtn = document.querySelector('.level')
lvlBtn.addEventListener('change',getLevel)
function getLevel() {
   level = lvlBtn.value
}
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
   document.querySelector('.losingMenu').style.display = 'none'
         resetAll()
         startGame()
}
//Main menu buttons ↓

let mainMenu = document.querySelectorAll('.mainMenu')
mainMenu.forEach(el => {
   el.addEventListener('click',goToMenu)
})
function goToMenu() {
   document.querySelector('.pauseMenu').style.display = 'none'
   document.querySelector('.losingMenu').style.display = 'none'
   GAME_BOARD.style.display = 'none'
   document.querySelector('.menu').style.display = 'flex'
   resetAll()
}
function noBorder() {
   // Checking snakes intersection with wall or itself 
   if(onSnake(snakeBody[0],true) || onWall(snakeBody[0])) {
      cancelAnimationFrame(myReq)
      document.querySelector('.losingMenu').style.display = 'flex'
   }
  
   }
   export function outsideBox() {
      return snakeBody[0].x > 21 || snakeBody[0].x < 1 || snakeBody[0].y > 21 || snakeBody[0].y < 1
   }

   function border() {
      if(outsideBox() || onSnake(snakeBody[0],true) || onWall(snakeBody[0])) {
         cancelAnimationFrame(myReq)
         document.querySelector('.losingMenu').style.display = 'flex'
      }
      }
     export function gameMode() {
      //checking death based on game mode
      noBorderMode ? noBorder() : border()
     }