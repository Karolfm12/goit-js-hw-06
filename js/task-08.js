const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  if (email === "" || password === "") {
    alert("wszystkie pola powinny zostać wypełnione");
  } else {
    console.log(`${form.elements.email.name}: ${email}
${form.elements.password.name}: ${password}`);
  }
  form.reset();
});
