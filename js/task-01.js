const ulCat = document.querySelector("#categories");
const itemCat = document.querySelector(".item");
// console.dir(ulCat);

function consoleResult(selector) {
  const catNumber = selector.children.length;
  const selectorArray = selector.children;
  console.log(selectorArray);
  selectorArray.forEach((element) => {
    console.log(element);
    // const msg = `Category: ${element.length} \n Elements: ${element.length}`;
    // return msg;
  });
  // return console.log(`Number of categories: ${catNumber}`);
}

consoleResult(ulCat);
// console.log(consoleResult(ulCat));
