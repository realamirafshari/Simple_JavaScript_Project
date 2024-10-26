const hashFunction = (passwordValue) => {
  const ASCII_CODE_ARRAY = [];
  for (let i = 0; i < passwordValue.length; i++) {
    const generateAsciiCode = passwordValue[i].trim().charCodeAt(0);
    ASCII_CODE_ARRAY.push(generateAsciiCode);
  }
  const password = ASCII_CODE_ARRAY.join("") * passwordValue.length;
  return password.toString();
};

export { hashFunction };
