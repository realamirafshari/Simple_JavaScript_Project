const highScores = JSON.parse(localStorage.getItem("highScore")) || [];
console.log(highScores);
const list = document.querySelector("ul");

const content = highScores.map((score, index) => {
  return `<li>
        <span>${index + 1}</span>
        <p>${score.name}</p>
        <span class="score">${score.score}</span>
</li>`;
});

list.innerHTML = content.join("");
