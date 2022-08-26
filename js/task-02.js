const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsElement = document.querySelector('#ingredients');

const createItemEl = ingredients.map(el => {
  const liEl = document.createElement("li");
  liEl.textContent = el;
  liEl.classList.add("item");

  return liEl;
});


ingredientsElement.append(...createItemEl);