function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const bodyEl = document.querySelector("body");
const changeColBtn = document.querySelector(".change-color");
const hexText = document.querySelector(".color");
changeColBtn.addEventListener("click", colorChange);
function colorChange(event) {
  const hexVal = getRandomHexColor();
  bodyEl.style.backgroundColor = hexVal;
  hexText.textContent = hexVal;
}
