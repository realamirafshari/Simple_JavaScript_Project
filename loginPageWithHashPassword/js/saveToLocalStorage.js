const saveToLocalStorage = (userData) => {
  localStorage.setItem("userData", JSON.stringify(userData));
};

const loadDataFromLocalStorage = () => {
  const storedData = localStorage.getItem("userData");
  return storedData ? JSON.parse(storedData) : []; // اگر داده‌ای وجود نداشته باشد، آرایه خالی برگردانده می‌شود
};

export { saveToLocalStorage, loadDataFromLocalStorage };
