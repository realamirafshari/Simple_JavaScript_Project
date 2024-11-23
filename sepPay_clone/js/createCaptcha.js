const generateCaptchaCode = () => {
  let captchaString = "";
  const letterString =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$&";
  for (let i = 0; i < 6; i++) {
    captchaString +=
      letterString[Math.floor(Math.random() * letterString.length)];
  }
  return captchaString;
};

const generateRandomColor = () => {
  let captchaString = "#";
  const letterString = "abcdef0123456789";
  for (let i = 0; i < 6; i++) {
    captchaString +=
      letterString[Math.floor(Math.random() * letterString.length)];
  }
  return captchaString;
};

const generateCaptcha = (element) => {
  element.innerHTML = `<h3>${generateCaptchaCode()}</h3>`;
  element.style.backgroundColor = `${generateRandomColor()}`;
};

export { generateCaptcha };
