let isPlayerOne = true;  // Jugador1 -> true | Jugador2 -> false
let cells = document.getElementsByClassName("cell");  // captura todas las celdas desde su padre

for (let i = 0; i < cells.length; i++) {
  // agregar EventListener a cada celda
  cells[i].addEventListener("click", userMove);
}

function userMove(e) {
  let cellValue = e.target.innerHTML;
  if (!cellValue.length) {
    // Si la celda no está usada, pregunta cuál es el jugador, 
    // pone una x u o, y luego cambia de jugador
    e.target.innerHTML = isPlayerOne? 'x' : 'o';
    isPlayerOne = !isPlayerOne;

    // prueba todas las líneas para ver si hay ganador
    checkLine(0, 1, 2);
    checkLine(3, 4, 5);
    checkLine(6, 7, 8);
    checkLine(0, 3, 6);
    checkLine(1, 4, 7);
    checkLine(2, 5, 8);
    checkLine(0, 4, 8);
    checkLine(6, 4, 2);
    console.log(" ");
  }
}

function checkLine(c1, c2, c3) {
  if (
    cells[c1].innerHTML.length &&
    cells[c1].innerHTML == cells[c2].innerHTML &&
    cells[c2].innerHTML == cells[c3].innerHTML
  ) {
    // si c1 == c2 == c3 hay ganador,
    // mostrar mensaje y reiniciar juego
    showWinner(cells[c1].innerHTML);
  }
}

function showWinner(player) {
  // muestra quién es el ganador
  document.getElementById('results').innerHTML = player + " win!!!";
}