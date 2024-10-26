import { createAccount } from "./createAccountFunction.js";
import { hashFunction } from "./hashFunction.js";
const nameInput = document.querySelector("#name-input");
const emailInput = document.querySelector("#email-input");
const passwordInput = document.querySelector("#password-input");
const registerButton = document.querySelector(".register-button");

const generateData = () => {
  const hashPassword = hashFunction(passwordInput.value);
  const nameInputValue = nameInput.value.trim();
  const emailInputValue = emailInput.value.trim();
  const passwordInputValue = hashPassword.trim();
  nameInput.innerText = "";
  emailInput.innerText = "";
  passwordInput.innerText = "";
  createAccount(nameInputValue, emailInputValue, passwordInputValue);
};

registerButton.addEventListener("click", generateData);
