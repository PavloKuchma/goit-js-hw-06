const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function render(arr) {
  const initDoc = document.querySelector("#ingredients");
  const textToInclude = arr.map((item) => {
    const markUp = document.createElement("li");
    markUp.textContent = item;
    markUp.classList = "item";
    return markUp;
  });
  initDoc.append(...textToInclude);
}
render(ingredients);
