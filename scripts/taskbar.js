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

function toggleDropdown(dropdown) {
  console.log(`${dropdown} was clicked!`);
  document.querySelector(dropdown).classList.toggle("show");
  console.log(document.querySelector(dropdown).classList);
}

updateClock();
setInterval(updateClock, 1000);
