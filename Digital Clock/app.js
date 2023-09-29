// Clock

let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

setInterval(() => {
  let currentTime = new Date();

  hours.textContent =
    (currentTime.getHours() < 10 ? "0" : "") + currentTime.getHours();
  minutes.textContent =
    (currentTime.getMinutes() < 10 ? "0" : "") + currentTime.getMinutes();
  seconds.textContent =
    (currentTime.getSeconds() < 10 ? "0" : "") + currentTime.getSeconds();
}, 1_000);

// Decoration
let leftDecoration = document.querySelector(".decoration-left");
let rootFontSize = parseFloat(
  getComputedStyle(document.documentElement).getPropertyValue("font-size")
);
let topPositionPx = parseFloat(
  getComputedStyle(leftDecoration).getPropertyValue("top")
);
let topPosition = topPositionPx / rootFontSize;
let goingUp = true;

setInterval(() => {
  if (goingUp) {
    topPosition -= 0.05;
  } else {
    topPosition += 0.05;
  }

  if (topPosition <= 10 || topPosition >= 18) {
    goingUp = !goingUp;
  }

  let newTopPositionPx = topPosition * rootFontSize;

  leftDecoration.style.top = `${newTopPositionPx}px`;
}, 5);
