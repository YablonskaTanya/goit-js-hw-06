function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
const refs = {
  inputEl: document.querySelector("#controls>input"),
  createBtn: document.querySelector("[data-create]"),
  destroyBtn: document.querySelector("[data-destroy]"),
  divEl: document.querySelector("#boxes"),
};

//Створи функцію createBoxes(amount),
//яка приймає один параметр - число.
// Функція створює стільки <div>, скільки
// вказано в amount і додає їх у div#boxes.

//Розміри найпершого <div> - 30px на 30px.
//Кожен елемент після першого повинен бути
// ширшим і вищим від попереднього на 10px.
//Всі елементи повинні мати випадковий колір
//фону у форматі HEX. Використовуй готову функцію
//getRandomHexColor для отримання кольору.

//Створи функцію destroyBoxes(), яка очищає вміст
// div#boxes, у такий спосіб видаляючи всі створені елементи.
