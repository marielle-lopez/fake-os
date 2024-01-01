showGallery = () => {
  document.querySelector(".app-area").innerHTML = `
    <div class="gallery">
      <div class="gallery__title-bar">
        <p class="gallery__title-bar__title">Gallery</p>
        <span class="gallery__title-bar__close">✖</span>
      </div>

      <h1 class="gallery__heading">Gallery</h1>
      <p class="gallery__text">Sorry, this application isn't available yet. Come back another time!</p>
    </div>
  `;

  document
    .querySelector(".gallery__title-bar__close")
    .addEventListener("click", hideGallery);
};

hideGallery = () => {
  document.querySelector(".app-area").innerHTML = "";
};

document
  .querySelector("#gallery-desktop-icon")
  .addEventListener("dblclick", showGallery);
