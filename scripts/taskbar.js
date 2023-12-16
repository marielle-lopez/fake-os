function updateClock() {
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
}

function toggleDropdown(id) {
  document.querySelector(id).classList.toggle("show");
}

window.onclick = function (event) {
  if (!event.target.matches(".dropdown__button")) {
    let dropdowns = document.querySelectorAll(".dropdown__content");

    console.log(dropdowns);

    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];

      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
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

setWeather();
updateClock();
setInterval(updateClock, 1000);
