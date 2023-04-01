const refs = {
  inputEl: document.querySelector("#controls>input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  divEl: document.querySelector("#boxes"),
};

function createBoxes(amount) {
  let elementsToAddMarkup = [];

  for (let i = 0; i < amount; i += 1) {
    const div = document.createElement("div");
    div.style.height = `${30 + 10 * i}px`;
    div.style.width = `${30 + 10 * i}px`;
    div.style.backgroundColor = getRandomHexColor();
    elementsToAddMarkup.push(div);
  }
  return elementsToAddMarkup;
}

function destroyBoxes() {
  refs.divEl.innerHTML = "";
}

refs.createBtn.addEventListener("click", () => {
  let boxesToAdd = createBoxes(refs.inputEl.value);
  refs.divEl.append(...boxesToAdd);
  console.log(refs.inputEl.value);
});

refs.destroyBtn.addEventListener("click", () => {
  destroyBoxes();
  refs.inputEl.value = "";
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
