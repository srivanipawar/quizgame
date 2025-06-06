const startBtn = document.getElementById("start-btn");
const nextBtn = document.getElementById("next-btn");
const restartBtn = document.getElementById("restart-btn");

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const scoreText = document.getElementById("score");

const questions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correct: 1
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    answers: ["Charles Dickens", "Mark Twain", "Shakespeare", "Leo Tolstoy"],
    correct: 2
  },
  {
    question: "Which is the largest ocean?",
    answers: ["Atlantic", "Indian", "Arctic", "Pacific"],
    correct: 3
  },
  {
    question: "Which language is used for web apps?",
    answers: ["Python", "JavaScript", "C++", "Java"],
    correct: 1
  }
];

let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener("click", startQuiz);
nextBtn.addEventListener("click", () => {
  currentQuestionIndex++;
  showQuestion();
});
restartBtn.addEventListener("click", startQuiz);

function startQuiz() {
  startScreen.classList.add("hide");
  resultScreen.classList.add("hide");
  quizScreen.classList.remove("hide");
  currentQuestionIndex = 0;
  score = 0;
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.answers.forEach((answer, index) => {
    const button = document.createElement("li");
    button.innerHTML = `<button class="answer-btn">${answer}</button>`;
    answerButtons.appendChild(button);
    button.querySelector("button").addEventListener("click", () => {
      if (index === currentQuestion.correct) score++;
      if (currentQuestionIndex < questions.length - 1) {
        nextBtn.classList.remove("hide");
      } else {
        showResult();
      }
    });
  });
}

function resetState() {
  nextBtn.classList.add("hide");
  answerButtons.innerHTML = "";
}

function showResult() {
  quizScreen.classList.add("hide");
  resultScreen.classList.remove("hide");
  scoreText.textContent = `Your Score: ${score} out of ${questions.length}`;
}
