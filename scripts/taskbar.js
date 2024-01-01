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

hideApplication = () => {
  document.querySelector(".app-area").innerHTML = "";
};

showAbout = () => {
  document.querySelector(".app-area").innerHTML = `
    <div class="about">
      <div class="about__title-bar">
        <p class="about__title-bar__title">About</p>
        <span class="about__title-bar__close">✖</span>
      </div>

      <h1 class="about__heading">About this OS</h1>
      <p class="about__text">Welcome to Banana! This is an OS based on both the classic MacOS and Windows98. Enjoy!</p>
      <p class="about__text">Made by Marielle Louisse Lopez :)</p>
    </div>
  `;

  document
    .querySelector(".about__title-bar__close")
    .addEventListener("click", hideApplication);
};

showSettings = () => {
  document.querySelector(".app-area").innerHTML = `
    <div class="settings">
      <div class="settings__title-bar">
        <p class="settings__title-bar__title">Settings</p>
        <span class="settings__title-bar__close">✖</span>
      </div>

      <h1 class="settings__heading">Change Background Colour</h1>

      <p class="settings__text">Sorry, this feature isn't available yet. Come back another time!</p>
    </div>
  `;

  document
    .querySelector(".settings__title-bar__close")
    .addEventListener("click", hideApplication);
};

showHelp = () => {
  document.querySelector(".app-area").innerHTML = `
    <div class="help">
      <div class="help__title-bar">
        <p class="help__title-bar__title">Help</p>
        <span class="help__title-bar__close">✖</span>
      </div>

      <h1 class="help__heading">How do I use this?</h1>
      <p class="help__text">Some taskbar options display a corresponding dropdown menu with a single click. Double-click desktop icons to open them up!</p>
      <p class="help__text">To close application windows, click the '✖' symbol in the top-right of the application window.</p>
    </div>
  `;

  document
    .querySelector(".help__title-bar__close")
    .addEventListener("click", hideApplication);
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
