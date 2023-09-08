let selectHTML = document.querySelector(".quiz__html");
let selectCSS = document.querySelector(".quiz__css");
let selectJS = document.querySelector(".quiz__js");
let selectGIT = document.querySelector(".quiz__git");
let selectVS = document.querySelector(".quiz__vs");
let selectRegex = document.querySelector(".quiz__regex");

let question;
let answer;

// holds question and answer based off of i value;
let htmlQuestions = [
  "In forms, what is the purpose of the action attribute?",
  "In forms, what is the purpose of the method?",
  "For labeling buttons, what is the best HTML tagname?",
  "What do we need to do to connect a label and input/button together?",
  "If we are grouping sections of a form, what are the best ways to get this done?",
  "In what way can we label a fieldset with a 'title' to group like minded things",
];

let htmlAnswers = [
  "The action attribute tells us which URL we want to send our data, typically this will be where we add the backend.",
  "the method tells us which HTTP request we want, POST or GET to do",
  "We can use label to define our buttons",
  "to connect, the label needs a for attribute and the input needs an ID that matches the for of the label.",
  "To group forms, we can separate the form areas with either fieldset, divs, or even p's",
  "We can add a legend, if a legend tagname is included inside a fieldset, the section will be labeled with a heading and be given a border to separate it from other areas.",
];

let cssQuestions = [
  "The hardest styling of inputs are which two?",
  "If we want to reset just a radio or a checkbox, how is this done in css?",
  "What are three original psuedocodes for forms?",
  "how can we style forms so that optional vs required inputs can be styled differently from each other",
  "when styling radios, what way would we select in the css to even select it? ",
];

let cssAnswers = [
  "The hardest input styles are radios and checkboxes",
  "resetting styles we have to set the appearance to none and selecting the style with input[type = 'checkbox'] if we want to style the checkbox input. For a more in depth style please look into the 'The hard Styles, radios and checkboxes' section under HTML for examples.  ",
  "three original pseudo codes for forms will be hover, focus, and active.",
  "setting the pseudocode input:required and input:optional will allow you to style the different requirements differently if needed.",
  "selecting the proper css, we need to select as input[type='radio']::before, remember to set a content otherwise it won't work.",
];

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

flip.addEventListener("click", () => {
  if (questionText.textContent != "") {
    questionText.textContent = "";
    answerText.textContent = answer[i];
  } else {
    answerText.textContent = "";
    questionText.textContent = question[i];
  }
});

// logic that allows it to go forward, if i is larger than the array, i is subtracted by one, which holds it's place in the array.
forward.addEventListener("click", () => {
  i++;
  if (i >= question.length) {
    i--;
  }
  questionText.textContent = question[i];
  answerText.textContent = "";
});

// if the array is smaller than 0, which can't happen due to the array index, it is halted.
backwards.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i++;
    return;
  }
  questionText.textContent = question[i];
  answerText.textContent = "";
});

// takes the question from the array and displays it
// always starts with the first question of the selected deck
function showFirstQuestion() {
  questionText.textContent = question[i];
}

showFirstQuestion();
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
  showFirstQuestion();
});
selectCSS.addEventListener("click", () => {
  removeActiveDeck();
  question = cssQuestions;
  answer = cssAnswers;
  selectCSS.classList.toggle("quiz__selection--active");
  showFirstQuestion();
});

// selectJS.addEventListener("click", () => {
//   question = jsQuestions;
//   answer = jsAnswers;
//   showFirstQuestion();
// });
// selectVS.addEventListener("click", () => {
//   question = vsQuestions;
//   answer = vsAnswers;
//   showFirstQuestion();
// });
// selectGIT.addEventListener("click", () => {
//   question = gitQuestions;
//   answer = gitAnswers;
//   showFirstQuestion();
// });
// selectRegex.addEventListener("click", () => {
//   question = regexQuestions;
//   answer = regexAnswers;
//   showFirstQuestion();
// });
