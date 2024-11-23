let timeInMinutes = 10;
let timeInSeconds = timeInMinutes * 60;
const countDownReloadPage = (element,responsiveElement) => {
  let minutes = Math.floor(timeInSeconds / 60);
  let seconds = timeInSeconds % 60;

  // نمایش تایمر با فرمت دقیقه:ثانیه
  element.innerText = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  responsiveElement.innerText = `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

  if (timeInSeconds > 0) {
    timeInSeconds--;
  } else {
    location.href = "../view/404page.html";
  }
};



let timeInSecondsOPT = 2 * 60; // 2 دقیقه
const countDownSentOTP = (element, timerInterval) => {
  let minutes = Math.floor(timeInSecondsOPT / 60);
  let seconds = timeInSecondsOPT % 60;
  element.innerText = `${minutes < 10 ? "0" : ""}${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;

  if (timeInSecondsOPT > 0) {
    timeInSecondsOPT--;
  } else {
    clearInterval(timerInterval);
    element.innerText = "ارسال مجدد";
    element.disabled = false;
    timeInSecondsOPT = 2 * 60;
  }
};

export { countDownReloadPage, countDownSentOTP };
