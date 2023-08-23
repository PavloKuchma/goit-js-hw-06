const inputRange = document.querySelector("#font-size-control");
const outputText = document.querySelector("#text");

inputRange.addEventListener("input", changeFontSize);
function changeFontSize(event) {
  const fontSize = Number(event.currentTarget.value);
  outputText.style.fontSize = fontSize + "px";
}
