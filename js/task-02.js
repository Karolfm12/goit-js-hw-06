const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ulIngredients = document.querySelector("#ingredients");

const list = ingredients.map((ingredient) => `<li>${ingredient}</li>`).join("");
ulIngredients.innerHTML = list;

// for (const item of ingredients) {
//   const createItem = document.createElement("li");
//   createItem.textContent = item;
//   ulIngredients.append(createItem);
// }
