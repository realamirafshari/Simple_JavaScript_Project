const level = document.querySelectorAll(".action-button");
level.forEach((item) => {
  item.addEventListener("click", levelHandler);
});

function levelHandler(event) {
  const deficultyLevel = event.target.innerText.toLowerCase();
  localStorage.setItem("level", deficultyLevel);
  window.location.assign("/home.html");
  console.log(deficultyLevel);
}
