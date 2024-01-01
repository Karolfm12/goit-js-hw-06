const textBox = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

textBox.addEventListener("input", (e) => {
  if (e.currentTarget.value === "") {
    output.textContent = "Anonymous!";
  } else {
    output.textContent = e.currentTarget.value;
  }
});
