let turn = "x";
let symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
let active = true; // A: dodatkowo dodaję zmienną do dezaktywowania dalszej gry po wygranej

const board = document.querySelector(".board");
const tiles = Array.from(document.querySelectorAll(".tile"));
const info = document.querySelector("#info");

board.addEventListener("click", ({ target }) => {
  if(active) {
    const classes = Array.from(target.classList);
    if (classes.includes("tile") && classes.length !== 1) return;

    const idx = tiles.indexOf(target);

    target.classList.add(`tile-${turn}`);
    symbols[idx % 3][Math.floor(idx / 3)] = turn;
    turn = turn === "x" ? "o" : "x";

    displayTurn(turn);

    checkWin();
  }
});

function displayTurn(turn) {
  // 1. zmień text elementu h1 z klasą "turn" zależnie od tego, czyja jest aktualnie tura

  document.querySelector(".turn").innerHTML = turn.toUpperCase() + " turn";
}

function checkWin() {
  // 2. sprawdź czy któryś z graczy wygrał pojedynek - jeśli tak wyświetla komunikat (możesz użyć np. funkcji "alert(...)")

  // A: wiersze/kolumny
  for (i=0; i<3; i++) {
    if (symbols[i][0] == symbols[i][1] && symbols[i][1] == symbols[i][2] && symbols[i][0] != "") {
      info.innerHTML = "GAME OVER! <br/> Winner: "+ symbols[i][0].toUpperCase();
      active = false;
      break;
    }
      
    if (symbols[0][i] == symbols[1][i] && symbols[1][i] == symbols[2][i] && symbols[0][i] != "") {
      info.innerHTML = "GAME OVER! <br/> Winner: "+ symbols[0][i].toUpperCase();
      active = false;
      break;
    }
  }

  // A: skos
  if(symbols[0][0] == symbols[1][1] && symbols[1][1] == symbols[2][2] && symbols[1][1] != "") {
    info.innerHTML = "GAME OVER! <br/> Winner: "+ symbols[1][1].toUpperCase();
    active = false;
  }
  else if(symbols[0][2] == symbols[1][1] && symbols[1][1] == symbols[2][0] & symbols[1][1] != "") {
    info.innerHTML = "GAME OVER! <br/> Winner: "+ symbols[1][1].toUpperCase();
    active = false;
  }
}

// 3. dodaj listener pod przycisk z napisaem "reset" tak, aby po jego kliknięciu wywołać funkcję reset

const resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", reset);

function reset(event) {
  // 4. zresetuj stan gry

  event.preventDefault();
  symbols = [["", "", ""], ["", "", ""], ["", "", ""]];
  tiles.forEach( cla => { cla.className = "tile" })
  info.innerHTML = "";
  active = true;
}