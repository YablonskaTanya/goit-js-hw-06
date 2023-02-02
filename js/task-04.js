const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

const decrementBtnEl = document.querySelector('[data-action="decrement"]');
const incrementBtnEl = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector("#value");

decrementBtnEl.addEventListener("click", function () {
  counterValue.decrement();
  valueEl.textContent = counterValue.value;
});

incrementBtnEl.addEventListener("click", function () {
  counterValue.increment();
  valueEl.textContent = counterValue.value;
});
