let counterValue = Number(document.querySelector("#value").textContent);
let value = document.querySelector("#value");
const incButton = document.querySelector('button[data-action="increment"]');
const decButton = document.querySelector('button[data-action="decrement"]');

console.log(counterValue);
incButton.addEventListener("click", () => {
  counterValue += 1;
  value.textContent = counterValue;
});

decButton.addEventListener("click", () => {
  counterValue -= 1;
  value.textContent = counterValue;
});
