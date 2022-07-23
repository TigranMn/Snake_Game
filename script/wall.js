import { GAME_BOARD, WALL } from "./constants.js";
import { level } from "./gameSettings.js";

export function drawWall() {
 //  creating all parts of wall  and drawing them ↓
   WALL[level].forEach(el => {
      let wallSegment = document.createElement('div')
      wallSegment.style.gridRowStart = el.x
      wallSegment.style.gridColumnStart = el.y
      wallSegment.classList.add('wall')
      GAME_BOARD.appendChild(wallSegment)
   })
}
export function onWall(pos) {
   //check if something has the same position as our wall's any part
   return WALL[level].some(el => {
      return (pos.x === el.x && pos.y === el.y)
   })
}