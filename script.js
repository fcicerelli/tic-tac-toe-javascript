 let isPlayerOne = true;
 let cells = document.getElementsByClassName("cell");

 for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", userMove);
 }

 function userMove(e) {
  let cellValue = e.target.innerHTML;
  if (!cellValue.length) {
    e.target.innerHTML = isPlayerOne? 'x' : 'o';
    isPlayerOne = !isPlayerOne;
  }
 }