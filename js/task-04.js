const decrBut = document.querySelector("[data-action='decrement']");
const incrBut = document.querySelector("[data-action='increment']");
const interfaceValue = document.querySelector("#value");
let counterValue = 0;
// console.log(decrBut);
// console.log(incrBut);
// console.log(Number(interfaceValue.textContent));
decrBut.addEventListener("click", decrementAction);
function decrementAction() {
  counterValue -= 1;
  interfaceValue.textContent = counterValue;
  //   console.log("decrement");
  //   console.log(counterValue);
}
incrBut.addEventListener("click", incrementAction);
function incrementAction() {
  counterValue += 1;
  interfaceValue.textContent = counterValue;
  //   console.log("increment");
  //   console.log(counterValue);
}
