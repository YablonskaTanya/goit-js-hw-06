const inputSizeControlEl = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

inputSizeControlEl.addEventListener("input", onInputSizeControl);

function onInputSizeControl(event) {
  console.log(event.currentTarget.value);
  textEl.style.fontSize = event.currentTarget.value + "px";
}
