
const changeColorBtn = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", changeRandomColor);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function changeRandomColor() {
  const rndCol = getRandomHexColor();
  body.style.backgroundColor = rndCol;
  nameOfColor.textContent = rndCol;
}