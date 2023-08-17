const nameInput = document.querySelector("#name-input");
const nameOutput = document.querySelector("#name-output");

nameInput.addEventListener("input", outputValue);

function outputValue(event) {
  const enteringVal = event.currentTarget.value;
  if (!enteringVal) {
    return (nameOutput.textContent = "Anonymous");
  }
  return (nameOutput.textContent = enteringVal);
}
