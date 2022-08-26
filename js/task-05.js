const userName = document.querySelector("#name-input");

const userCall = document.querySelector("#name-output");

userName.addEventListener("input", newInput);

function newInput(amogus) {
  userCall.textContent = amogus.currentTarget.value;

  if (amogus.currentTarget.value === "") {
    userCall.textContent = "Anonymous";
  }
}