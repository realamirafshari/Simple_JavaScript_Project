import { saveToLocalStorage } from "./saveToLocalStorage.js";
const modal = document.querySelector(".success-modal");
const createAccount = (nameInputValue, emailInputValue, passwordInputValue) => {
  if (emailInputValue === "") {
    console.log("Please Enter valid Email");
    return;
  } else if (passwordInputValue === "") {
    console.log("Please Enter valid password");
    return;
  } else {
    const userData = {
      name: nameInputValue,
      email: emailInputValue,
      password: passwordInputValue,
    };
    const activeUser = JSON.parse(localStorage.getItem("userData")) || [];
    activeUser.push(userData);
    saveToLocalStorage(activeUser);
    modal.classList.add("active");
    setTimeout(() => {
      window.location.assign("../view/home.html");
    }, 4000);
  }
};
export { createAccount };
