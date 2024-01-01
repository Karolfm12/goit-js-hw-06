const textbox = document.querySelector("#validation-input");
const dataLength = Number(textbox.getAttribute("data-length"));

textbox.addEventListener("input", (e) => {
  if (e.currentTarget.value.length <= dataLength) {
    textbox.classList.remove("invalid");
    textbox.classList.add("valid");
  } else {
    textbox.classList.remove("valid");
    textbox.classList.add("invalid");
  }
});
