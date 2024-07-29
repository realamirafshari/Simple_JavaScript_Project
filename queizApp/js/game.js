const level = localStorage.getItem("level");
console.log(level);
const URL =
  `https://opentdb.com/api.php?amount=10&difficulty=${level}` || "medium";
import formatData from "./helper.js";
const loader = document.getElementById("loader");
const container = document.querySelector(".container");
const questionText = document.querySelector(".question-text");
const answerlist = document.querySelectorAll(".answer-text");
const scoreText = document.getElementById("score");
const questionNumberText = document.getElementById("question-number");
const nextBtn = document.querySelector(".next-btn");
const finishBtn = document.querySelector(".finish-btn");
const erorText = document.querySelector(".eror-text");
const CORRECT_BONS = 10;
let formattedData = null;
let questionIndex = 0;
let correctAnswer = null;
let isAccepted = true;
let score = 0;

const fetchData = async () => {
  try {
    const respons = await fetch(URL);
    const json = await respons.json();
    formattedData = formatData(json.results);
    start();
  } catch {
    loader.style.display = "none";
    erorText.style.display = "block";
  }
};

const start = () => {
  showQuestion();
  loader.style.display = "none";
  container.style.display = "flex";
};

function showQuestion() {
  const { question, answers, correctAnswerIndex } =
    formattedData[questionIndex];
  correctAnswer = correctAnswerIndex;
  console.log("Correct Answer :", correctAnswerIndex);
  questionText.innerText = question;
  answerlist.forEach((button, index) => {
    button.innerText = answers[index];
  });
}

const checkAnswer = (event, index) => {
  if (isAccepted == false) return;
  isAccepted = false;
  const isCorrect = index === correctAnswer ? true : false;
  if (isCorrect) {
    event.target.classList.add("correct");
    score += CORRECT_BONS;
    scoreText.innerText = score;
  } else {
    event.target.classList.add("incorrect");
    answerlist[correctAnswer].classList.add("correct");
  }
};

const nextHandler = () => {
  questionIndex++;
  questionNumberText.innerText = questionIndex + 1;
  if (questionIndex < formattedData.length) {
    isAccepted = true;
    removeClass();
    showQuestion();
  } else {
    finishHandler();
  }
};

const removeClass = () => {
  answerlist.forEach((button) => (button.className = "answer-text"));
};

function finishHandler() {
  localStorage.setItem("score", JSON.stringify(score));
  window.location.assign("/view/endGame.html");
}

window.addEventListener("load", fetchData);
nextBtn.addEventListener("click", nextHandler);
finishBtn.addEventListener("click", finishHandler);
answerlist.forEach((button, index) => {
  button.addEventListener("click", (event) => checkAnswer(event, index));
});
