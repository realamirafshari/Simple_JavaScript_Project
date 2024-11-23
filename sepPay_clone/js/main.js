import { generateCaptcha } from "./createCaptcha.js";
import { countDownReloadPage, countDownSentOTP } from "./timer.js";
import { acardeonActionHandler } from "./acardeonAction.js";
import { logoBankHandler } from "./banklogo.js";
const timerDisplay = document.querySelectorAll(".timer-container");
const captchaValue = document.querySelector(".captcha-value");
const buttonShowMore = document.querySelector(".button-show-more");
const sideMenuContainer = document.querySelector(".side-menu");
const cardNumberInput = document.getElementById("card-number");
const refreshCaptchaButton = document.querySelector(".refresh-captcha");
const sendOtpButton = document.querySelector(".send-otp-button");
const confirmModal = document.querySelector(".confirm-modal");
const closeModal = document.querySelector(".close-modal");
const reportEmailSms = document.querySelector(".user-email-phone");
const reportEmailSmsButton = document.querySelector(".sms-report-button");
const acardeonItems = document.querySelectorAll(".acardeon-item");
const bankLogo = document.querySelector(".bank-logo-input");
const cartListButton = document.querySelector(".cart-list");

function moveToNextInput(current, next) {
  if (current.value.length === current.maxLength) {
    next.focus(); // انتقال خودکار به فیلد بعدی
  }
}

cardNumberInput.addEventListener("input", () => {
  const firstNumber = cardNumberInput.value;
  const binNumber = firstNumber.split(" ").join("").slice(0, 6).toString();
  logoBankHandler(binNumber, bankLogo, cartListButton);
});

function formatInput() {
  // فقط عدد مجاز است
  let input = cardNumberInput.value.replace(/[^0-9]/g, "");

  // جداسازی به گروه‌های ۴ تایی
  let formattedInput = input.match(/.{1,4}/g)?.join(" ") || input;

  // بازنویسی مقدار input با فرمت جدید
  cardNumberInput.value = formattedInput;
}

const openSideMenu = () => {
  sideMenuContainer.classList.toggle("close-side-menu");
  if (sideMenuContainer.classList.contains("close-side-menu")) {
    buttonShowMore.innerText = "بستن";
  } else {
    buttonShowMore.innerText = "بیشتر";
  }
};

const startCountdown = () => {
  sendOtpButton.disabled = true; // غیرفعال کردن دکمه
  sendOtpButton.classList.add("active-opt-button");
  generateCaptcha(captchaValue);
  confirmModal.classList.add("active-modal");
  const timerInterval = setInterval(
    () => countDownSentOTP(sendOtpButton, timerInterval),
    1000
  );
};

sendOtpButton.addEventListener("click", startCountdown);
buttonShowMore.addEventListener("click", openSideMenu);
cardNumberInput.addEventListener("input", formatInput);
closeModal.addEventListener("click", () => {
  confirmModal.classList.remove("active-modal");
});
reportEmailSmsButton.addEventListener("click", () => {
  reportEmailSms.classList.toggle("active-report-section");
});
refreshCaptchaButton.addEventListener("click", () => {
  generateCaptcha(captchaValue);
});
document.addEventListener("DOMContentLoaded", () => {
  setInterval(
    () => countDownReloadPage(timerDisplay[0], timerDisplay[1]),
    1000
  );
  generateCaptcha(captchaValue);
  acardeonActionHandler(acardeonItems);
});

window.addEventListener("load", function () {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input, index) => {
    // چک کردن اینکه آیا ورودی بعدی وجود دارد یا نه
    const nextInput = inputs[index + 1];
    input.addEventListener("input", function () {
      moveToNextInput(input, nextInput);
    });
  });
});
