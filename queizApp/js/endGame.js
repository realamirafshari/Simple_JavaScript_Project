const score = JSON.parse(localStorage.getItem("score"));
const highScore = JSON.parse(localStorage.getItem("highScore")) || [];
console.log(score);
const scoreElement = document.querySelector(".score-number");
const btn = document.getElementById("save-btn");
const textBox = document.getElementById("text-box");

scoreElement.innerText = score;

btn.addEventListener("click", saveHandler);

function saveHandler() {
  // console.log("object");
  if (!textBox.value || !score) {
    alert("eror");
  } else {
    const finalScore = { name: textBox.value, score: score };
    highScore.push(finalScore);
    highScore.sort((a, b) => b.score - a.score);
    highScore.splice(10);

    localStorage.setItem("highScore", JSON.stringify(highScore));
    localStorage.removeItem("score");
    window.location.assign("./highScores.html");
  }
}

