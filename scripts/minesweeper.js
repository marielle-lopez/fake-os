let board = [];
let rows = 8;
let columns = 8;
let minesCount = 5;
let minesLocation = [];
let tilesClicked = 0;
let flagEnabled = false;
let gameOver = false;

function showMinesweeper() {
  document.querySelector(".app-area").innerHTML = `
    <div class="minesweeper">
      <h1>Mines: <span id="mines-count">0</span></h1>

      <div class="board" id="board"></div>
      <br />

      <button class="flag-button" id="flag-button">🚩</button>
    </div>
  `;

  document.querySelector("#mines-count").innerText = minesCount;
  document.querySelector("#flag-button").addEventListener("click", setFlag);
  setMines();

  for (let r = 0; r < rows; r++) {
    let row = [];

    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      tile.id = `${r}-${c}`;
      tile.className = "board__tile";
      tile.addEventListener("click", clickTile);
      document.querySelector("#board").appendChild(tile);
      row.push(tile);
    }

    board.push(row);
  }
}

function setMines() {
  let minesLeft = minesCount;

  while (minesLeft > 0) {
    let r = Math.floor(Math.random() * rows);
    let c = Math.floor(Math.random() * columns);
    let id = `${r}-${c}`;

    if (!minesLocation.includes(id)) {
      minesLocation.push(id);
      minesLeft -= 1;
    }
  }
}

function setFlag() {
  if (flagEnabled) {
    flagEnabled = false;
    document.querySelector("#flag-button").style.backgroundColor = "lightgray";
  } else {
    flagEnabled = true;
    document.querySelector("#flag-button").style.backgroundColor = "darkgray";
  }
}

function clickTile() {
  if (gameOver || this.classList.contains("board__tile--clicked")) {
    return;
  }

  let tile = this;

  if (flagEnabled) {
    if (tile.innerText == "") {
      tile.innerText = "🚩";
    } else if (tile.innerText == "🚩") {
      tile.innerText = "";
    }
    return;
  }

  if (minesLocation.includes(tile.id)) {
    alert("Game over!");
    gameOver = true;
    revealMines();
    return;
  }

  let coords = tile.id.split("-");
  let r = parseInt(coords[0]);
  let c = parseInt(coords[1]);
  checkMines(r, c);
}
