const control = document.querySelector("#font-size-control");
const spanText = document.querySelector("#text");
spanText.style.fontSize = `${control.valueAsNumber}px`;

control.addEventListener("input", (e) => {
  const currentValue = control.valueAsNumber;
  spanText.style.fontSize = `${currentValue}px`;
});
