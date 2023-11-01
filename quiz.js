// some issues to work on
// 1. Store all wrong ones to be reviewed, more important currently
// 2. When changing decks all right and wrong answers must be cleared, there is current carry over, or make a setItem for local storage?

import { QandA } from "./quizQ&A.js";

let htmlQuestions = QandA.htmlQuestions;
let htmlAnswers = QandA.htmlAnswers;
let cssQuestions = QandA.cssQuestions;
let cssAnswers = QandA.cssAnswers;
let jsQuestions = QandA.jsQuestions;
let jsAnswers = QandA.jsAnswers;

let reviewQuestions = QandA.reviewQuestions;
let reviewAnswers = QandA.reviewAnswers;

let selectHTML = document.querySelector(".quiz__html");
let selectCSS = document.querySelector(".quiz__css");
let selectJS = document.querySelector(".quiz__js");
let selectGIT = document.querySelector(".quiz__git");
let selectVS = document.querySelector(".quiz__vs");
let selectRegex = document.querySelector(".quiz__regex");
let selectReview = document.querySelector(".quiz__review");
let card = document.querySelector(".quiz__card");

let textArea = document.createElement("textarea");

let question;
let answer;

question = htmlQuestions;
answer = htmlAnswers;

// i value of 0 starts at the first item in the array.
let i = 0;

// variables that hold the html "buttons" that moves the quiz forward, backwards, and "flips" the card
let flip = document.querySelector(".quiz__revealAnswer-toggle");
let forward = document.querySelector(".quiz__nextQuestions-toggle");
let backwards = document.querySelector(".quiz__backQuestions-toggle");

// variables that hold the html paragraphs that will display the htmlQuestions and answer
let questionText = document.querySelector(".quiz__question");
let answerText = document.querySelector(".quiz__answer");

// shows the correct answer/question when toggled
flip.addEventListener("click", () => {
  if (questionText.textContent != "") {
    questionText.textContent = "";
    answerText.textContent = answer[i];
  } else {
    answerText.textContent = "";
    questionText.textContent = question[i];
  }
  flip.classList.toggle("flip--glow");
  setTimeout(function () {
    flip.classList.toggle("flip--glow");
  }, 300);
});

// number on deck
let positionInDeck = document.querySelector(".cardNumber__current");
let totalLengthOfDeck = document.querySelector(".cardNumber__total");

// logic that allows it to go forward, if i is larger than the array, i is subtracted by one, which holds it's place in the array.

function moveForwards() {
  i++;
  if (i >= question.length) {
    i--;
  }
  questionText.textContent = question[i];
  answerText.textContent = "";
}
forward.addEventListener("click", () => {
  moveForwards();
  getDeckPosition(i);
  rightShake();
  changeBorder();
});

function rightShake() {
  setTimeout(() => {
    forward.classList.remove("shakeRight");
  }, 500);
  forward.classList.add("shakeRight");
}

// if the array is smaller than 0, which can't happen due to the array index, it is halted, otherwise, shows the previous question and answers
function moveBackWards() {
  i--;
  if (i < 0) {
    i++;
    return;
  }
  questionText.textContent = question[i];
  answerText.textContent = "";
}
backwards.addEventListener("click", () => {
  moveBackWards();
  getDeckPosition(i);
  leftShake();
  changeBorder();
});

function leftShake() {
  setTimeout(() => {
    backwards.classList.remove("shakeLeft");
  }, 500);
  backwards.classList.add("shakeLeft");
}

// takes the question from the array and displays it
// always starts with the first question of the selected deck
function showFirstQuestion(question) {
  i = 0;
  questionText.textContent = question[i];
  answerText.textContent = "";
  totalLengthOfDeck.textContent = question.length;
}

showFirstQuestion(htmlQuestions);
// this find the active deck and removes it once another deck is selected.
let findActiveDeck;
function removeActiveDeck() {
  findActiveDeck = document.querySelector(".quiz__selection--active");
  if (findActiveDeck == null) {
    return;
  } else {
    findActiveDeck.classList.remove("quiz__selection--active");
  }
}

// controls which 'stack' of cards is being active
// also controls the toggle of active for css style
selectHTML.addEventListener("click", () => {
  removeActiveDeck();
  question = htmlQuestions;
  answer = htmlAnswers;
  selectHTML.classList.toggle("quiz__selection--active");
  changeBorder();
  showFirstQuestion(htmlQuestions);
  getDeckPosition(0);
});
selectCSS.addEventListener("click", () => {
  removeActiveDeck();
  question = cssQuestions;
  answer = cssAnswers;
  selectCSS.classList.toggle("quiz__selection--active");
  showFirstQuestion(cssQuestions);
  getDeckPosition(0);
  changeBorder();
});

selectJS.addEventListener("click", () => {
  removeActiveDeck();
  question = jsQuestions;
  answer = jsAnswers;
  selectJS.classList.toggle("quiz__selection--active");
  showFirstQuestion(jsQuestions);
  changeBorder();
  getDeckPosition(0);
});

selectReview.addEventListener("click", () => {
  removeActiveDeck();
  question = reviewQuestions;
  answer = reviewAnswers;
  selectReview.classList.toggle("quiz__selection--active");
  showFirstQuestion(reviewQuestions);
  getDeckPosition(0);
  changeBorder();
});

function getDeckLength(num) {
  totalLengthOfDeck.value = num + 1;
}

function getDeckPosition(position) {
  positionInDeck.value = position + 1;
}

// Controls the number counter at the bottom of the deck, shows deck position and allows manual change of deck position.

positionInDeck.addEventListener("change", () => {
  if (Number(positionInDeck.value) <= 0) {
    i = 0;
    positionInDeck.value = 1;
    questionText.textContent = question[0];
    answerText.textContent = "";
  }
  if (Number(positionInDeck.value) >= question.length) {
    positionInDeck.value = question.length;
    questionText.textContent = question[question.length - 1];
    answerText.textContent = "";
    i = question.length - 1;
  } else {
    i = Number(positionInDeck.value) - 1;
    questionText.textContent = question[i];
    answerText.textContent = "";
  }
});

// enables the ability to move flashcards forward and backwards and flips the cards with keyboard shortcuts
document.onkeydown = function (event) {
  switch (event.keyCode) {
    // space key
    case 32:
      markCorrect();
      changeBorder();
      getDeckPosition(i);
      event.preventDefault();
      break;
    // left arrow
    case 37:
      moveBackWards();
      getDeckPosition(i);
      leftShake();
      changeBorder();
      break;
    // up arrow
    case 38:
      if (questionText.textContent != "") {
        questionText.textContent = "";
        answerText.textContent = answer[i];
      } else {
        answerText.textContent = "";
        questionText.textContent = question[i];
      }
      flip.classList.toggle("flip--glow");
      setTimeout(function () {
        flip.classList.toggle("flip--glow");
      }, 300);
      event.preventDefault();
      break;
    // right arrow
    case 39:
      moveForwards();
      getDeckPosition(i);
      rightShake();
      changeBorder();
      break;
    //down arrow
    case 40:
      if (questionText.textContent != "") {
        questionText.textContent = "";
        answerText.textContent = answer[i];
      } else {
        answerText.textContent = "";
        questionText.textContent = question[i];
      }
      flip.classList.toggle("flip--glow");
      setTimeout(function () {
        flip.classList.toggle("flip--glow");
      }, 300);
      event.preventDefault();
      break;
    // c key
    case 67:
      clearAllBorders();
      clearBorders.classList.toggle("clear--glow");
      setTimeout(function () {
        clearBorders.classList.toggle("clear--glow");
      }, 300);
      break;
    // x key
    case 88:
      markIncorrect();
      changeBorder();
      getDeckPosition(i);
      event.preventDefault();
      break;
  }
};

let index;
let greenPosition = [];
let redPosition = [];
let toBeReviewed = [];

let correct = document.querySelector(".quiz__correct");
let incorrect = document.querySelector(".quiz__toReview");
let clearBorders = document.querySelector(".quiz__clearBorder");
// moves i into green position
function markCorrect() {
  if (greenPosition.includes(i)) {
    index = greenPosition.indexOf(i);
    greenPosition.splice(index, 1);
  }
  if (!greenPosition.includes(i)) {
    greenPosition.push(i);
  }
  if (redPosition.includes(i)) {
    index = redPosition.indexOf(i);
    redPosition.splice(index, 1);
    toBeReviewed.splice(index, 1);
  }
  correct.classList.toggle("correct--glow");
  setTimeout(function () {
    correct.classList.toggle("correct--glow");
  }, 300);
}

correct.addEventListener("click", () => {
  markCorrect();
  changeBorder();
});
// moves i into red position
function markIncorrect() {
  if (redPosition.includes(i)) {
    index = redPosition.indexOf(i);
    redPosition.splice(index, 1);
    reviewQuestions.splice(index, 1);
    reviewAnswers.splice(index, 1);
  }
  if (!redPosition.includes(i)) {
    redPosition.push(i);
    reviewQuestions.push(question[i]);
    reviewAnswers.push(answer[i]);
    console.log(reviewQuestions);
  }
  if (greenPosition.includes(i)) {
    index = greenPosition.indexOf(i);
    greenPosition.splice(index, 1);
  }
  incorrect.classList.toggle("incorrect--glow");
  setTimeout(function () {
    incorrect.classList.toggle("incorrect--glow");
  }, 300);
}
incorrect.addEventListener("click", () => {
  markIncorrect();
  changeBorder();
});
// removes the current i from either green or red position
function clearAllBorders() {
  if (greenPosition.includes(i)) {
    index = greenPosition.indexOf(i);
    greenPosition.splice(index, 1);
  }
  if (redPosition.includes(i)) {
    index = redPosition.indexOf(i);
    redPosition.splice(index, 1);
    reviewQuestions.splice(index, 1);
    reviewAnswers.splice(index, 1);
  }
  changeBorder();
}

clearBorders.addEventListener("click", () => {
  clearAllBorders();
  clearBorders.classList.toggle("clear--glow");
  setTimeout(function () {
    clearBorders.classList.toggle("clear--glow");
  }, 300);
});

// ONLY HANDLES COLOR CHANGE
function changeBorder() {
  if (greenPosition.includes(i)) {
    card.classList.add("quiz__card--green", "quiz__card");
    card.classList.remove("quiz__card--red");
  } else if (redPosition.includes(i)) {
    card.classList.add("quiz__card--red", "quiz__card");
    card.classList.remove("quiz__card--green");
  } else if (!redPosition.includes(i) || !greenPosition.includes(i)) {
    card.classList.add("quiz__card");
    card.classList.remove("quiz__card--green");
    card.classList.remove("quiz__card--red");
  }
}
