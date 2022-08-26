const sus = document.querySelector("#font-size-control");
const amogus = document.querySelector("#text");

// console.log(sus);
// console.log(amogus.textContent);

// sus.value = 58;
// amogus.classList.add('font-size');
// amogus.style.fontSize = "100px";
// amogus.style.fontSize = "sus.value";

sus.addEventListener("input", onBlur);

function onBlur(a) {
  amogus.style.fontSize = a.currentTarget.value + "px";
}
