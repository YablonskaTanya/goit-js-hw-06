const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];
//== 1
// const listEl = document.querySelector("#ingredients");
// const newArray = [];

// ingredients.forEach((ingredient) => {
//   const itemEl = document.createElement("li");
//   itemEl.textContent = ingredient;
//   itemEl.classList.add("item");
//   newArray.push(itemEl);
// });

// listEl.append(...newArray);

//== 2

const listEl = document.querySelector("#ingredients");
const newListEl = ingredients.map((ingredient) => {
  const itemEl = document.createElement("li");
  itemEl.textContent = ingredient;
  itemEl.classList.add("item");

  return itemEl;
});

listEl.append(...newListEl);

//== 3
// const listEl = document.querySelector("#ingredients");

// ingredients.reduce((acc, ingredient) => {
//   const itemEl = document.createElement("li");

//   itemEl.textContent = ingredient;
//   itemEl.classList.add("item");

//   acc.appendChild(itemEl);

//   return acc;
// }, listEl);
