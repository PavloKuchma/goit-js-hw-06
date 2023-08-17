const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
const initDoc = document.querySelector("#ingredients");
const textToInclude = ingredients.map((item) => {
  const markUp = document.createElement("li");
  markUp.textContent = item;
  markUp.classList = "item";
  return markUp;
});
console.log(textToInclude);
initDoc.append(textToInclude);
