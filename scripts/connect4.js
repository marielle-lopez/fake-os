let playerRed = "R";
let playerYellow = "Y";
let currPlayer = playerRed;
let connect4GameOver = false;
let connect4Board;
let connect4Rows = 6;
let connect4Columns = 7;
let currColumns;

function showConnect4() {
  document.querySelector(".app-area").innerHTML = `
    <div class="connect4">
      <div class="connect4__title-bar">
        <p class="connect4__title-bar__title">Connect 4</p>
        <span class="connect4__title-bar__close" onclick="hideConnect4()">✖</span>
      </div>

      <div class="connect4__board"></div>
    </div>
  `;

  setGame();
}

function setGame() {
  board = [];
  currColumns = [5, 5, 5, 5, 5, 5, 5];

  for (let r = 0; r < connect4Rows; r++) {
    let row = [];

    for (let c = 0; c < connect4Columns; c++) {
      row.push(" ");

      let tile = document.createElement("div");
      tile.id = `${r}-${c}`;
      tile.classList.add("connect4__board__tile");
      tile.addEventListener("click", setPiece);
      document.querySelector(".connect4__board").appendChild(tile);
    }

    board.push(row);
  }
}

function setPiece() {
  if (connect4GameOver) {
    return;
  }

  let coordinates = this.id.split("-");
  let r = parseInt(coordinates[0]);
  let c = parseInt(coordinates[1]);

  r = currColumns[c];

  if (r < 0) {
    return;
  }

  board[r][c] = currPlayer;
  let tile = document.getElementById(`${r}-${c}`);

  if (currPlayer == playerRed) {
    tile.classList.add("connect4__board__tile--red-piece");
    currPlayer = playerYellow;
  } else {
    tile.classList.add("connect4__board__tile--yellow-piece");
    currPlayer = playerRed;
  }

  r -= 1;
  currColumns[c] = r;

  checkWinner();
}

function checkWinner() {
  // horizontal sliding window checking
  for (let r = 0; r < connect4Rows; r++) {
    for (let c = 0; c < connect4Columns - 3; c++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r][c + 1] &&
          board[r][c + 1] == board[r][c + 2] &&
          board[r][c + 2] == board[r][c + 3]
        ) {
          setWinner(r, c);
          return;
        }
      }
    }
  }

  // vertical sliding window checking
  for (let r = 0; r < connect4Rows - 3; r++) {
    for (let c = 0; c < connect4Columns; c++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r + 1][c] &&
          board[r + 1][c] == board[r + 2][c] &&
          board[r + 2][c] == board[r + 3][c]
        ) {
          setWinner(r, c);
          return;
        }
      }
    }
  }

  // anti-diagonal checking
  for (let r = 0; r < connect4Rows - 3; r++) {
    for (let c = 0; c < connect4Columns - 3; c++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r + 1][c + 1] &&
          board[r + 1][c + 1] == board[r + 2][c + 2] &&
          board[r + 2][c + 2] == board[r + 3][c + 3]
        ) {
          setWinner(r, c);
          return;
        }
      }
    }
  }

  // diagonal checking
  for (let r = 3; r < connect4Rows; r++) {
    for (let c = 0; c < connect4Columns; c++) {
      if (board[r][c] != " ") {
        if (
          board[r][c] == board[r - 1][c + 1] &&
          board[r - 1][c + 1] == board[r - 2][c + 2] &&
          board[r - 2][c + 2] == board[r - 3][c + 3]
        ) {
          setWinner(r, c);
          return;
        }
      }
    }
  }
}

function setWinner(r, c) {
  let winner = document.createElement("h2");
  winner.classList.add("connect4__winner");

  let connect4App = document.querySelector(".connect4");
  connect4App.insertBefore(winner, connect4App.childNodes[2]);

  if (board[r][c] == playerRed) {
    winner.innerText = "Red wins!";
  } else {
    winner.innerText = "Yellow wins!";
  }

  connect4GameOver = true;
}

function hideConnect4() {
  document.querySelector(".app-area").innerHTML = "";
}
