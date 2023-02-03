//Порахує і виведе в консоль кількість категорій
// в ul#categories, тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories,
//знайде і виведе в консоль текст заголовку елемента (тегу <h2>)
// і кількість елементів в категорії (усіх <li>, вкладених в нього).

//Number of categories: 3

//Category: Animals
//Elements: 4

//Category: Products
//Elements: 3

//Category: Technologies
//Elements: 5

const listEl = document.querySelector("#categories");
const itemEl = listEl.children;
const titleEl = itemEl[0].firstElementChild;

const titleItemEl = titleEl.nextElementSibling;
const allLiEl = titleItemEl.children;
//
console.log(listEl);
console.log(itemEl);
console.log(titleEl);

console.log(titleItemEl);
console.log(allLiEl);
console.log(`Number of categories: ${itemEl.length}`);
console.log(`Category: ${titleEl}`);
console.log(`Elements: ${allLiEl.length}`);
console.log(`Category: ${titleEl}`);
console.log(`Elements: ${titleItemEl}`);
console.log(`Category: ${titleEl}`);
console.log(`Elements: ${titleItemEl}`);

// firstElementChild;
// lastElementChild;
// children;
// childNodes;
// parentNode;
