import { onSnake, snakeBody } from "./snake.js";
import { myReq } from "./main.js";
import { onWall } from "./wall.js";
export let noBorderMode = true
export let level = 0
export let difficulty = 0

// let difficultyBtn = document.querySelector('.difficulty')
// difficultyBtn.addEventListener('click', changeDifficulty)

// function changeDifficulty() {
//    if(difficultyBtn.innerHTML === 'Easy') {
//       difficultyBtn.innerHTML = 'Medium'
//       difficulty = 1
//    }
//    else if(difficultyBtn.innerHTML === 'Medium') {
//       difficultyBtn.innerHTML = 'Hard'
//       difficulty = 2
//    }
//    else if(difficultyBtn.innerHTML === 'Hard') {
//       difficultyBtn.innerHTML = 'Easy'
//       difficulty = 0
//    }
// }

// let lvlBtn = document.querySelector('.level')
// lvlBtn.addEventListener('change',getLevel)
// function getLevel() {
//    level = lvlBtn.value
//    console.log(level)
// }
// let toggle = document.querySelector('.toggleGameMode')
// toggle.addEventListener('click',function() {
//    noBorderMode ? noBorderMode = false : noBorderMode = true
//    console.log(noBorderMode)
// })
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