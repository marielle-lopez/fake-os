showNotepad = () => {
  document.querySelector(".app-area").innerHTML = `
    <div class="notepad">
      <div class="notepad__title-bar">
        <p class="notepad__title-bar__title">Notepad</p>
        <span class="notepad__title-bar__close">✖</span>
      </div>

      <h1 class="notepad__heading">Notepad</h1>
      <p class="notepad__text">Sorry, this application isn't available yet. Come back another time!</p>
    </div>
  `;

  document
    .querySelector(".notepad__title-bar__close")
    .addEventListener("click", hideNotepad);
};

hideNotepad = () => {
  document.querySelector(".app-area").innerHTML = "";
};

document
  .querySelector("#notepad-desktop-icon")
  .addEventListener("dblclick", showNotepad);
