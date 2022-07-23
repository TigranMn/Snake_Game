import { onSnake, snakeBody } from "./snake.js";
import { myReq } from "./main.js";
import { onWall } from "./wall.js";
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
function noBorder() {
   // Checking snakes intersection with wall or itself 
   if(onSnake(snakeBody[0],true) || onWall(snakeBody[0])) {
      let restart = confirm('Would you like to start again?')
      if(restart) {
         cancelAnimationFrame(myReq)
         window.location = 'index.html'
      }
      else {
         cancelAnimationFrame(myReq)
      }
   }
  
   }
   export function outsideBox() {
      return snakeBody[0].x > 21 || snakeBody[0].x < 1 || snakeBody[0].y > 32 || snakeBody[0].y < 1
   }

   function border() {
      if(outsideBox() || onSnake(snakeBody[0],true) || onWall(snakeBody[0])) {
         let a = confirm('Would you like to start again')
         if(a) {
            cancelAnimationFrame(myReq)
            window.location = 'index.html'
         }
         else {
            cancelAnimationFrame(myReq)
         }
      }
      }
     export function gameMode() {
      //checking death based on game mode
      noBorderMode ? noBorder() : border()
     }