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

let currentTime = new Date();
