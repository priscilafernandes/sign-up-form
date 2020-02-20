const formInput = document.getElementById("form-input");
const btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener("click", submit);

function submit(e) {
  e.preventDefault();

  let name = document.getElementById("name");
  let lastName = document.getElementById("last-name");
  let email = document.getElementById("email");
  const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let password = document.getElementById("password");

  if (name.value.length <= 0) {
    renderError(name, "First name cannot be empty");
  } else if (lastName.value.length <= 0) {
    renderError(lastName, "Last name cannot be empty");
  } else if (email.value.length <= 0 || !validateEmail.test(email.value)) {
    renderError(email, "Looks like this is not an email");
  } else if (password.value.length <= 0) {
    renderError(password, "Password cannot be empty");
  } else {
    alert("Submit!");
    formInput.reset();
  }
}

function renderError(el, text) {
  let elMsg = document.getElementById(`${el.id}-msg`);
  let node = document.createElement("p");
  let msg = document.createTextNode(text);

  el.classList.add("error-icon");
  el.classList.remove("form__input__item--margin");
  node.classList.add("error-msg");
  
  node.appendChild(msg);  
  elMsg.appendChild(node);

  btnSubmit.removeEventListener("click", submit);
}