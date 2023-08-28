let questions = ["how many eggs", "what is your shoe size"];
let answer = ["2", "2 1/2"];

let showAnswer = document.querySelector(".quiz__revealAnswer-toggle");
let nextQuestion = document.querySelector(".quiz__nextQuestions-toggle");
let previousQuestion = document.querySelector(".quiz__backQuestions-toggle");

let quiz__question = document.querySelector(".quiz__question");
let quiz__answer = document.querySelector(".quiz__answer");

let i = 0;
quiz__question.textContent = questions[i];

showAnswer.addEventListener("click", () => {
  if (quiz__question.textContent == "") {
    quiz__answer.textContent = "";
    quiz__question.textContent = questions[i];
  } else {
    quiz__answer.textContent = "";
    quiz__question.textContent = "";
    quiz__answer.textContent = answer[i];
  }
});

nextQuestion.addEventListener("click", () => {
  i++;
  if (questions[i] || answer[i] != undefined) {
    quiz__answer.textContent = answer[i];
    quiz__question.textContent = questions[i];
  }
  return;
});
