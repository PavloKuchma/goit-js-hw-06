const ulCat = document.querySelector("#categories");
const itemCat = document.querySelectorAll(".item");

const title = ulCat.children.length;
console.log(`Number of categories: ${title}`);
itemCat.forEach((itemCat) => {
  const elCat = itemCat.firstElementChild.textContent;
  const childOfCategory = itemCat.lastElementChild;
  console.log(
    `Category: ${elCat}\nElements: ${childOfCategory.children.length}`
  );
});
