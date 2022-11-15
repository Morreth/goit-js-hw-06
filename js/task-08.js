const form = document.querySelector(".login-form");
console.dir(form);

form.addEventListener("submit", onSubmitForm);

function onSubmitForm(event) {
  const emptyString = "";
  const formElements = event.currentTarget.elements;
  const mail = formElements.email.value;
  const password = formElements.password.value;
  const formData = {
    mail,
    password,
  };
  event.preventDefault();

  if (mail === emptyString || password === emptyString) {
    alert("Все поля должны быть заполнены");
  }
  console.log(formData);
  form.reset();
}
