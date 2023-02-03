const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;

  const formData = {
    mail,
    password,
  };

  if (mail === "" || password === "") {
    alert("всі поля повиннібути заповнені");
  } else {
    console.log(formData);
  }
  console.log(`${formElements.email.name} - ${mail}`);
  console.log(`${formElements.password.name} - ${password}`);
  event.currentTarget.reset();
}
