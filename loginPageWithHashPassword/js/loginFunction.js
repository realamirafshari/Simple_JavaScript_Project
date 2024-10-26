import { loadDataFromLocalStorage } from "./saveToLocalStorage.js";
import { hashFunction } from "./hashFunction.js";
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const loginButton = document.querySelector(".login-button");
const sucessModal = document.querySelector(".success-modal");
const erorModal = document.querySelector(".eror-modal");

function generateLoginData() {
  const userInformation = loadDataFromLocalStorage();
  const hashPassword = hashFunction(passwordInput.value);
  const matchedUser = userInformation.filter((user) => {
    return emailInput.value === user.email && hashPassword === user.password;
  });

  if (matchedUser.length > 0) {
    sucessModal.classList.add("active");
    setTimeout(() => {
      window.location.assign("./home.html");
    }, 3000);
  } else {
    erorModal.classList.add("active");
    setTimeout(() => {
      erorModal.classList.remove("active");
    }, 3000);
  }
}

loginButton.addEventListener("click", generateLoginData);
