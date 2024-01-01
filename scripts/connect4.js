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
      <h1>Connect 4</h1>
      <h2 class="winner"></h2>

      <div class="connect4-board"></div>
    </div>
  `;

  setGame();
}

function setGame() {
  board = [];
  currColumns = [5, 5, 5, 5, 5, 5, 5];

  for (let r = 0; r < rows; r++) {
    let row = [];

    for (let c = 0; c < columns; c++) {
      row.push(" ");

      let tile = document.createElement("div");
      tile.id = `${r}-${c}`;
      tile.classList.add("connect4-board__tile");
      tile.addEventListener("click", setPiece);
      document.querySelector(".connect4-board").appendChild(tile);
    }

    board.push(row);
  }
}
