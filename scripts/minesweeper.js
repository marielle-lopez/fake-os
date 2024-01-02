let board = [];
let rows = 8;
let columns = 8;
let minesCount = 5;
let minesLocation = [];
let tilesClicked = 0;
let flagEnabled = false;
let gameOver = false;

hideMinesweeper = () => {
  document.querySelector(".app-area").innerHTML = "";
  gameOver = false;
  minesLocation = [];
  tilesClicked = 0;
};

showMinesweeper = () => {
  board = [];

  document.querySelector(".app-area").innerHTML = `
    <div class="minesweeper">
      <div class="minesweeper__title-bar">
        <p class="minesweeper__title-bar__title">Minesweeper</p>
        <span class="minesweeper__title-bar__close">✖</span>
      </div>

      <div class="minesweeper__wrapper">
        <h1>Mines: <span id="mines-count">0</span></h1>
        
        <div class="minesweeper__board" id="board"></div>
        <br />
        
        <button class="minesweeper__flag-button" id="flag-button">🚩</button>
      </div>
    </div>
  `;

  document
    .querySelector(".minesweeper__title-bar__close")
    .addEventListener("click", hideMinesweeper);

  document.querySelector("#mines-count").innerText = minesCount;
  document.querySelector("#flag-button").addEventListener("click", setFlag);
  setMines();

  for (let r = 0; r < rows; r++) {
    let row = [];

    for (let c = 0; c < columns; c++) {
      let tile = document.createElement("div");
      tile.id = `${r}-${c}`;
      tile.className = "minesweeper__board__tile";
      tile.addEventListener("click", clickTile);
      document.querySelector("#board").appendChild(tile);
      row.push(tile);
    }

    board.push(row);
  }
};

document
  .querySelector("#minesweeper-desktop-icon")
  .addEventListener("dblclick", showMinesweeper);

setMines = () => {
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
};

setFlag = () => {
  if (flagEnabled) {
    flagEnabled = false;
    document.querySelector("#flag-button").style.backgroundColor = "lightgray";
  } else {
    flagEnabled = true;
    document.querySelector("#flag-button").style.backgroundColor = "darkgray";
  }
};

clickTile = (event) => {
  if (
    gameOver ||
    event.target.classList.contains("minesweeper__board__tile--clicked")
  ) {
    return;
  }

  let tile = event.target;

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
};

revealMines = () => {
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < columns; c++) {
      let tile = board[r][c];
      if (minesLocation.includes(tile.id)) {
        tile.innerText = "💣";
        tile.style.backgroundColor = "red";
      }
    }
  }
};

checkMines = (r, c) => {
  if (r < 0 || r >= rows || c < 0 || c >= columns) {
    return;
  }

  if (board[r][c].classList.contains("minesweeper__board__tile--clicked")) {
    return;
  }

  board[r][c].classList.add("minesweeper__board__tile--clicked");

  tilesClicked += 1;

  let minesFound = 0;

  minesFound += checkTile(r - 1, c - 1);
  minesFound += checkTile(r - 1, c);
  minesFound += checkTile(r - 1, c + 1);
  minesFound += checkTile(r, c - 1);
  minesFound += checkTile(r, c + 1);
  minesFound += checkTile(r + 1, c - 1);
  minesFound += checkTile(r + 1, c);
  minesFound += checkTile(r + 1, c + 1);

  if (minesFound > 0) {
    board[r][c].innerText = minesFound;
    board[r][c].classList.add(
      "minesweeper__board__tile--" + minesFound.toString()
    );
  } else {
    checkMines(r - 1, c - 1);
    checkMines(r - 1, c);
    checkMines(r - 1, c + 1);
    checkMines(r, c - 1);
    checkMines(r, c + 1);
    checkMines(r + 1, c - 1);
    checkMines(r + 1, c);
    checkMines(r + 1, c + 1);
  }

  if (tilesClicked == rows * columns - minesCount) {
    document.querySelector("#mines-count").innerText = "Cleared!";
    gameOver = true;
  }
};

checkTile = (r, c) => {
  if (r < 0 || r >= rows || c < 0 || c >= columns) {
    return 0;
  }

  if (minesLocation.includes(`${r}-${c}`)) {
    return 1;
  }

  return 0;
};
