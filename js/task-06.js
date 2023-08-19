const symInput = document.querySelector("#validation-input");
// const inputValue = expression;
// console.log(symInput.target.value);
symInput.addEventListener("blur", warningFunc);
function warningFunc(event) {
  const characters = event.currentTarget.value;
  if (Number(symInput.dataset.length) <= characters.trim().length) {
    symInput.classList = "valid";
  } else {
    symInput.classList = "invalid";
  }
}
