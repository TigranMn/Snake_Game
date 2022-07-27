export const GAME_BOARD = document.querySelector('.gameboard')
export const GRID_SIZE = {x:21,y:21} // Gameboard size
export const SNAKE_SPEED = [5,10,20] // Difficulty levels
export const PAUSE_MENU = document.querySelector('.pauseMenu')
export const LOSING_MENU = document.querySelector('.losingMenu')
export const MENU = document.querySelector('.menu')
export const SCORE = document.querySelector('.score')
export const HIGH_SCORE = document.querySelector('.highscore')
export const STORAGE = window.localStorage

// walls of all levels ↓
export const WALL = [
   //Level 1
   [{x:20,y:10},{x:20,y:9},{x:20,y:12},{x:20,y:13},{x:20,y:11},{x:19,y:8},{x:19,y:14},
   {x:2,y:10},{x:2,y:9},{x:2,y:12},{x:2,y:13},{x:2,y:11},{x:3,y:8},{x:3,y:14}]
   // Level 2
,  [{x:9,y:2},{x:10,y:2},{x:11,y:2},{x:12,y:2},{x:13,y:2},{x:14,y:2},{x:15,y:3},{x:8,y:3},
   {x:9,y:20},{x:10,y:20},{x:11,y:20},{x:12,y:20},{x:13,y:20},{x:14,y:20},{x:15,y:19},{x:8,y:19}]
   // Level 3
,  [{x:3,y:4},{x:4,y:4},{x:5,y:4},{x:6,y:4},{x:6,y:7},{x:7,y:7},{x:8,y:7},{x:9,y:7 },{x:9,y:10 },
   {x:10,y:10 },{x:11,y:10 },{x:12,y:10 },{x:12,y:13 },{x:13,y:13},{x:14,y:13},{x:15,y:13},{x:15,y:16},
,  {x:16,y:16},{x:17,y:16},{x:18,y:16},{x:17,y:4},{x:18,y:4},{x:19,y:4},{x:19,y:5},{x:19,y:6},{x:3, y:14}
,  {x:3, y:15},{x:3, y:16},{x:4, y:16},{x:5, y:16}
   ],
   // Level 4
   [{x:3,y:3},{x:3,y:7},{x:3,y:11},,{x:3,y:15},{x:3,y:19},
    {x:7,y:3},{x:7,y:7},{x:7,y:11},{x:7,y:15},{x:7,y:19},
    {x:11,y:3},{x:11,y:7},{x:11,y:11},{x:11,y:15},{x:11,y:19},
    {x:15,y:3},{x:15,y:7},{x:15,y:11},{x:15,y:15},{x:15,y:19},
    {x:19,y:3},{x:19,y:7},{x:19,y:11},{x:19,y:15},{x:19,y:19},
   ]]