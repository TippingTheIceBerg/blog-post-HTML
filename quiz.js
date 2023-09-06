// holds question and answers based off of i value;
let questions = ["how many eggs", "what is your shoe size"];
let answers = ["2", "2 1/2"];

// i value of 0 starts at the first item in the array.
let i = 0;

// variables that hold the html "buttons" that moves the quiz forward, backwards, and "flips" the card
let flip = document.querySelector(".quiz__revealAnswer-toggle");
let forward = document.querySelector(".quiz__nextQuestions-toggle");
let backwards = document.querySelector(".quiz__backQuestions-toggle");

// variables that hold the html paragraphs that will display the questions and answers
let questionText = document.querySelector(".quiz__question");
let answerText = document.querySelector(".quiz__answer");

// takes the question from the array and displays it
questionText.textContent = questions[i];

// click on the flip item to show the answer
//      1. the content of the questions displays first
//      2. when flipped the questioned must be cleared and the answer shown
//      3. When clicked again the answer must be cleared and the question shows
flip.addEventListener("click", () => {
  if (questionText.textContent != "") {
    questionText.textContent = "";
    answerText.textContent = answers[i];
  } else {
    answerText.textContent = "";
    questionText.textContent = questions[i];
  }
});
// logic that allows it to go forward, if i is larger than the array, i is subtracted by one, which holds it's place in the array.
forward.addEventListener("click", () => {
  i++;
  if (i >= questions.length) {
    i--;
    return console.log(questions.length, i);
  }
  questionText.textContent = questions[i];
  answerText.textContent = "";
});

// if the array is smaller than 0, which can't happen due to the array index, it is halted.
backwards.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i++;
    return;
  }
  questionText.textContent = questions[i];
  answerText.textContent = "";
});
