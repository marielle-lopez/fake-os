updateClock = () => {
  const clock = document.querySelector("#clock");
  const now = new Date();

  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  let monthString = null;

  switch (month) {
    case 0:
      monthString = "Jan";
      break;
    case 1:
      monthString = "Feb";
      break;
    case 2:
      monthString = "Mar";
      break;
    case 3:
      monthString = "Apr";
      break;
    case 4:
      monthString = "May";
      break;
    case 5:
      monthString = "Jun";
      break;
    case 6:
      monthString = "Jul";
      break;
    case 7:
      monthString = "Aug";
      break;
    case 8:
      monthString = "Sep";
      break;
    case 9:
      monthString = "Oct";
      break;
    case 10:
      monthString = "Nov";
      break;
    case 11:
      monthString = "Dec";
      break;
    default:
      monthString = null;
  }

  const clockString = `${day} ${monthString} ${year} \xa0\xa0 ${hours
    .toString()
    .padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

  clock.innerText = clockString;
};

toggleDropdown = (element) => {
  document
    .querySelector(`#${element.target.nextElementSibling.id}`)
    .classList.toggle("show");
};

window.onclick = function (event) {
  if (!event.target.matches(".dropdown__button")) {
    let dropdowns = document.querySelectorAll(".dropdown__content");

    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];

      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

showAbout = () => {
  document.querySelector(".app-area").innerHTML = `
    <div class="about-window">
      <div class="about-window__title-bar">
        <p class="about-window__title-bar__title">About</p>
        <span class="about-window__title-bar__close">✖</span>
      </div>

      <h1>About this OS</h1>
      <p>Made by Marielle Louisse Lopez :)</p>
    </div>
  `;
};

showSettings = () => {
  document.querySelector(".app-area").innerHTML = `
    <div class="settings-window">
      <div class="settings-window__title-bar">
        <p class="settings-window__title-bar__title">Settings</p>
        <span class="settings-window__title-bar__close">✖</span>
      </div>

      <h1>Change Background Colour</h1>
    </div>
  `;
};

showHelp = () => {
  document.querySelector(".app-area").innerHTML = `
    <div class="help-window">
      <div class="help-window__title-bar">
        <p class="help-window__title-bar__title">Help</p>
        <span class="help-window__title-bar__close">✖</span>
      </div>

      <h1 class="help-window__title">How do I use this?</h1>
      <p class="help-window__text">Some taskbar options display a corresponding dropdown menu with a single click. Double-click desktop icons to open them up!</p>
    </div>
  `;
};

async function setWeather() {
  const weather = document.querySelector("#weather");
  const url =
    "http://api.weatherapi.com/v1/current.json?key=deaee7e239224b5c83c90948231612&q=auto:ip";
  const response = await fetch(url);

  let data = await response.json();

  const currentWeather = {
    condition: data.current.condition.text,
    temperature: data.current.temp_c,
  };

  const weatherString = `${currentWeather.temperature}°C ${currentWeather.condition}`;

  weather.innerText = weatherString;
}

document
  .querySelector("#banana-image")
  .addEventListener("click", toggleDropdown);

document
  .querySelector("#settings-option")
  .addEventListener("click", toggleDropdown);

document
  .querySelector("#help-option")
  .addEventListener("click", toggleDropdown);

document.querySelector("#about").addEventListener("click", showAbout);

document.querySelector("#settings").addEventListener("click", showSettings);

document.querySelector("#help").addEventListener("click", showHelp);

setWeather();
updateClock();
setInterval(updateClock, 1000);
