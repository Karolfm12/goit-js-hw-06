const loginForm = document.querySelector(".login-form");
const objLogin = {};

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    alert("wszystkie pola powinny zostać wypełnione");
  } else {
    objLogin.email = email;
    objLogin.password = password;
    console.log(objLogin);
  }
  form.reset();
});
