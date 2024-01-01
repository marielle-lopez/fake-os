showRecycleBin = () => {
  document.querySelector(".app-area").innerHTML = `
    <div class="recycle-bin">
      <div class="recycle-bin__title-bar">
        <p class="recycle-bin__title-bar__title">Recycle Bin</p>
        <span class="recycle-bin__title-bar__close">✖</span>
      </div>
      <img class="recycle-bin__image" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTlrbndhendobjQ1M21yejFzM2IwYjlsanJoeDU4ZHJlcnVkM2RhayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/12zV7u6Bh0vHpu/giphy.gif" alt="Animated cartoon duck searching for something in the distance" />

      <p class="recycle-bin__text">Nothing to see here...</p>
    
      </div>
  `;

  document
    .querySelector(".recycle-bin__title-bar__close")
    .addEventListener("click", hideRecycleBin);
};

hideRecycleBin = () => {
  document.querySelector(".app-area").innerHTML = "";
};

document
  .querySelector("#recycle-bin-desktop-icon")
  .addEventListener("dblclick", showRecycleBin);
