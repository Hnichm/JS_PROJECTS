window.addEventListener("keydown", moveSquare);

let dangerousSquare = {
  x: Math.floor(Math.random() * 3) + 1,
};
console.log(dangerousSquare.x);

function moveSquare(event) {
  const square = document.querySelector(".square");
  let top = parseInt(window.getComputedStyle(square).top, 10);
  let left = parseInt(window.getComputedStyle(square).left, 10);

  switch (event.code) {
    case "ArrowUp":
      square.style.top = top - 15 + "px";
      break;
    case "ArrowDown":
      square.style.top = top + 15 + "px";
      break;
    case "ArrowLeft":
      square.style.left = left - 15 + "px";
      break;
    case "ArrowRight":
      square.style.left = left + 15 + "px";
      break;
  }
}
