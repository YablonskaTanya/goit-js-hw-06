const validationInput = document.querySelector("#validation-input");

validationInput.addEventListener("blur", onInputValidation);

function onInputValidation(event) {
  console.log(event.currentTarget.value);
  validationInput.classList.remove("invalid", "valid");
  if (
    event.currentTarget.value.length === Number(validationInput.dataset.length)
  ) {
    validationInput.classList.add("valid");
    // validationInput.classList.remove("invalid");
  } else {
    validationInput.classList.add("invalid");
    // validationInput.classList.remove("valid");
  }
}
