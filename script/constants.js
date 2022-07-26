export const GAME_BOARD = document.querySelector('.gameboard')
export const GRID_SIZE = {x:21,y:21} // Gameboard size
export const SNAKE_SPEED = [5,10,20] // Difficulty levels
// walls of all levels ↓
export const WALL = [[{x:20,y:14},{x:19,y:14},{x:18,y:14},{x:17,y:14},{x:16,y:14}],[{x:15,y:13}]] 
export const PAUSE_MENU = document.querySelector('.pauseMenu')
export const LOSING_MENU = document.querySelector('.losingMenu')
export const MENU = document.querySelector('.menu')
export const SCORE = document.querySelector('.score')
export const HIGH_SCORE = document.querySelector('.highscore')
export const STORAGE = window.localStorage