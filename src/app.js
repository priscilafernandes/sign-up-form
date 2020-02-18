const btnSubmit = document.getElementById("btn-submit");
btnSubmit.addEventListener("click", submit);

function submit(e) {
  e.preventDefault();
  
  const name = document.getElementById("name");
  const lastName = document.getElementById("last-name");
  const email = document.getElementById("email");
  // const validateEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/
  const password = document.getElementById("password");

  if (name.value.length <= 0) {
    renderError(name, "First name cannot be empty");
  } 
  
  if (lastName.value.length <= 0) {
    renderError(lastName, "Last name cannot be empty");
  } 
  
  if (email.value.length <= 0 || !validateEmail.test(email)) {
    renderError(email, "Looks like this is not an email");
  }
  
  if (password.value.length <= 0) {
    renderError(password, "Password cannot be empty");
  } 
  
  else {
    alert("Submit!");
  }

  console.log(validateEmail.test(email))
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