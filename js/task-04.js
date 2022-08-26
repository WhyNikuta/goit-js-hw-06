// const butMin = document.querySelectorAll("button");
// console.log(butMin[0].textContent);
// console.log(butMin[1].textContent);

// const counterValue = document.querySelector("#value");
// console.log(counterValue.textContent);

// butMin[0].addEventListener("click", () => {
//   console.log(counterValue.textContent-- - 1);
// });

// butMin[1].addEventListener("click", () => {
//   console.log(counterValue.textContent++ + 1);
// });

// 

let counterValue = document.querySelector('#value');

const decrementBt = document.querySelector('button[data-action="decrement"]');
const incrementBt = document.querySelector('button[data-action="increment"]');

const increment = () => {
    counterValue.textContent = Number(counterValue.textContent) + 1;
};

const decrement = () => {
    counterValue.textContent = Number(counterValue.textContent) - 1;
};

decrementBt.addEventListener('click', decrement);
incrementBt.addEventListener('click', increment);