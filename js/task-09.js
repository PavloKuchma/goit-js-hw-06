//Альтернативний варіант при якому колір тексту міняється разом з кольором фону.
//
// function getRandomHexColor() {
//   const hexArr = [];
//   const random = Math.random() * 16777215;
//   const floor = Math.floor(random);
//   const reverseFloor = Number(floor.toString().split("").reverse().join(""));
//   if (floor === reverseFloor) {
//     reverseFloor += 99999;
//   }
//   const bgdHex = floor.toString(16).padStart(6, 0);
//   const textHex = reverseFloor.toString(16).padStart(6, 0);
//   hexArr.push(bgdHex);
//   hexArr.push(textHex);

//   return hexArr;
// }
// const bodyEl = document.querySelector("body");
// const changeColBtn = document.querySelector(".change-color");
// const hexText = document.querySelector(".color");
// changeColBtn.addEventListener("click", colorChange);
// function colorChange(event) {
//   const hexVal = getRandomHexColor();

//   bodyEl.style.backgroundColor = `#${hexVal[0]}`;
//   bodyEl.style.color = `#${hexVal[1]}`;
//   hexText.textContent = `#${hexVal[0]}`;
// }
//
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
