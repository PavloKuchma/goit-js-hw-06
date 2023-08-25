function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const inputRef = document.querySelector("input[type='number']");
const createBtn = document.querySelector("[data-action='create']");
const destructBtn = document.querySelector("[data-action='destroy']");
const boxRef = document.querySelector("#boxes");

inputRef.addEventListener("blur", amountLog);
function amountLog(evt) {
  const amount = Number(evt.currentTarget.value);
  // inputRef.reset();
  console.log(amount);
  return amount;
}

createBtn.addEventListener("click", createBoxes);
function createBoxes(amount) {
  const hexVal = getRandomHexColor();
  let dimension = 20;
  for (let i = 1; i <= amount; i += 1) {
    const markup = `<div width="${dimension + 10} + 'px'" height="${
      dimension + 10
    } + 'px'" style="backgroundcolor: ${hexVal}, display: flex, flexwrap: wrap, justify-content: space-between"></div>`;
  }
  boxRef.insertAdjacentHTML("afterbegin", markup);
}
