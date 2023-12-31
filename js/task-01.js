const categories = document.querySelector("#categories");
const headerName = document.querySelectorAll("h2");
const elements = document.querySelectorAll(".item ul");
console.log(`Number of categories: ${categories.children.length}\n\n`);
for (const [i, category] of headerName.entries()) {
  console.log(`Category: ${headerName[i].innerText}`);
  console.log(`Elements: ${elements[i].children.length}\n\n`);
}
