function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const colorEl = document.querySelector(".color");
const changeColorBtn = document.querySelector(".change-color");
const body = document.querySelector("body");

changeColorBtn.addEventListener("click", () => {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  colorEl.textContent = color;
});
