function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputRef = document.querySelector("input[type='number']");
const createBtn = document.querySelector("[data-create]");
const destructBtn = document.querySelector("[data-destroy]");
const boxRef = document.querySelector("#boxes");

createBtn.addEventListener("click", createBoxes);
function createBoxes() {
  const amount = Number(inputRef.value);
  let dimension = 30;

  for (let i = 1; i <= amount; i += 1) {
    const hexVal = getRandomHexColor();
    const markup = `<div  style="background-color: ${hexVal}; display: block; width:${dimension}px; height:${dimension}px; margin-bottom: 10px"></div>`;

    boxRef.insertAdjacentHTML("beforeend", markup);
    dimension += 10;
  }
  inputRef.value = "";
}
destructBtn.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxRef.innerHTML = "";
}
