// const
const passwordInput = document.querySelector(".password-input");
const showPassword = document.querySelector(".show-password");
function validatePassword() {
  const passwordValue = passwordInput.value;
  const maxLengthSpan = document.querySelector("#max-length");
  const upperLetterSpan = document.querySelector("#upper-letter");
  const lowerLetterSpan = document.querySelector("#lower-letter");
  const numberLetterSpan = document.querySelector("#number-letter");
  const specialSignSpan = document.querySelector("#special-sign");
  const checkTick = document.querySelectorAll(".check-tick");

  const uppercase = /[A-Z]/.test(passwordValue);
  const lowercase = /[a-z]/.test(passwordValue);
  const number = /[0-9]/.test(passwordValue);
  const specialSign = /[*\/_@#$.&()!~]/.test(passwordValue);

  if (passwordValue.length >= 8) {
    maxLengthSpan.classList.add("active");
    checkTick[0].classList.add("active");
  } else {
    maxLengthSpan.classList.remove("active");
    checkTick[0].classList.remove("active");
  }

  if (uppercase) {
    upperLetterSpan.classList.add("active");
    checkTick[1].classList.add("active");
  } else {
    upperLetterSpan.classList.remove("active");
    checkTick[1].classList.remove("active");
  }

  if (lowercase) {
    lowerLetterSpan.classList.add("active");
    checkTick[2].classList.add("active");
  } else {
    lowerLetterSpan.classList.remove("active");
    checkTick[2].classList.remove("active");
  }

  if (number) {
    numberLetterSpan.classList.add("active");
    checkTick[3].classList.add("active");
  } else {
    numberLetterSpan.classList.remove("active");
    checkTick[3].classList.remove("active");
  }

  if (specialSign) {
    specialSignSpan.classList.add("active");
    checkTick[4].classList.add("active");
  } else {
    specialSignSpan.classList.remove("active");
    checkTick[4].classList.remove("active");
  }
}

function showPasswordHandler() {
  if (passwordInput.getAttribute("type") === "password") {
    passwordInput.setAttribute("type", "text");
    showPassword.innerHTML = `<i class="ri-eye-close-line"></i>`;
  } else {
    passwordInput.setAttribute("type", "password");
    showPassword.innerHTML = `<i class="ri-eye-line"></i>`;
  }
}

passwordInput.addEventListener("input", validatePassword);
showPassword.addEventListener("click", showPasswordHandler);
