// some issues to work on
// 1. looks weird on safari

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
  "when are articles used in html semantics?",
  "What is the fastest way to open the terminal?",
  "If you want to quickly select with a pointer dev tool, what's the best way?",
  "What's the fastest way to open the console?",
  "What is the BEM naming style?",
  "What is the skeleton structure of BEM, IE, how will it look like?",
  "What is important of lazy loading how is it done?",
  "What can you do to allow links to open a new link when clicking on links?",
  "How can we create a dropdown select?",
  "What attribute will allow images to load later if the page is running slow? Hint, not lazy loading",
  "What is the purpose of a framework",
  "What is the purpose of a preprocessor and examples",
  "What are pseudo classes?",
];

let htmlAnswers = [
  "The action attribute tells us which URL we want to send our data, typically this will be where we add the backend.",
  "the method tells us which HTTP request we want, POST or GET to do",
  "We can use label to define our buttons",
  "to connect, the label needs a for attribute and the input needs an ID that matches the for of the label.",
  "To group forms, we can separate the form areas with either fieldset, divs, or even p's",
  "We can add a legend, if a legend tagname is included inside a fieldset, the section will be labeled with a heading and be given a border to separate it from other areas.",
  "Articles are stand alone sections. Think of blog posts, newspaper article,a comment or independent gadget",
  "the terminal can be opened by hitting command + option + c",
  "Quick pointer selection is to hit command + shift + c",
  "Command + option + j, only works for chrome.",
  "BEM is Block, element, and modifier",
  "block__element--modifier, blocks are standalone, elements have no meaning without the block, and modifiers are changes. You can have a block without an element.",
  "Lazy loading is an attribute you can add to the img and it's important to load times, you an add it  as a simple 'loading='lazy''.  ",
  "add a target='_blank' to the link and a new tab will open ",
  "We can create a dropdown with select and inside with option <select> <option> --Make a choice--</option> <option value='someValue'> </option> </select>",
  "decoding:'async' will allow images to load later if the page is slow.",
  "a framework is made to cut down on common issues, common ones are tailwind and bootstrap",
  "LESS,SASS and stylus fall under these, these are pretty much adding extra functionality that can be helpful",
  "Classes have colons and act as a class and is a selector, like first child, or hover. ",
  ,
];

let cssQuestions = [
  "The hardest styling of inputs are which two?",
  "If we want to reset just a radio or a checkbox, how is this done in css?",
  "What are three original psuedocodes for forms?",
  "how can we style forms so that optional vs required inputs can be styled differently from each other",
  "when styling radios, what way would we select in the css to even select it? ",
  "If we wanted to target invalid and valid forms, how do we select these?",
  "What is the way to remove bullet from a list?",
  "If we wanted to animate an 'idle' state of a list, how will we select this?",
  "What's the best way to control and mess around with transforms and box-shadows?",
  "For interesting shapes, what site can we use?",
  "How do we center with position absolute ",
  "If a background image is not in the position you want, what can you do?",
  "if we want to set a turn away from user effect, what can we do?",
  "Structural pseudo-classes are a way to add complexity of selection,li:nth-child(__) will be every increment of 3, ___ is every odd, __ is every even,li:nth-child(___) is every 4 but starting at 7. ",
  "How do we think of min and max in css?",
  "Whats the difference between rem and bem?",
  "What's the common mobile and small desktop screen sizes?",
  "How do we decide on border colors?",
];

let cssAnswers = [
  "The hardest input styles are radios and checkboxes",
  "resetting styles we have to set the appearance to none and selecting the style with input[type = 'checkbox'] if we want to style the checkbox input. For a more in depth style please look into the 'The hard Styles, radios and checkboxes' section under HTML for examples.  ",
  "three original pseudo codes for forms will be hover, focus, and active.",
  "setting the pseudocode input:required and input:optional will allow you to style the different requirements differently if needed.",
  "selecting the proper css, we need to select as input[type='radio']::before, remember to set a content otherwise it won't work.",
  "we will use pseudocode input:valid or input:invalid",
  "remember to select either the class that aligns with li or select li directly and then style it as list-style:none.",
  "an idle state animation will require us to select input[type='radio']:indeterminate then add an animation to it, remember to set the keyframes for the animation as well.",
  "transforms and box-shadows can be manipulated under the css elements under chrome. ",
  "funky shapes can be made 'haikei' a site that can allow us to make lots of things.",
  "you can center with left :50%, top: 50%; translate: transform(-50%,-50%) OR we can do inset:0; margin: auto.",
  "you can add a px based + center,cover,left etc to mess around ie -150px center.",
  "select the parent element of whatever you want tilted away and set a perspective: 1000px, this will tilt the image away with a rotate: x 35deg",
  "3n, 2n+1, 2n, 4n+7",
  "Both seem similar but think of it like this, if you make the page larger, max will grow it, and when moved smaller it will eventually lock. If using min, when grown will lock eventually, but when shrinking, will change.",
  "We will almost always prefer to use REM, REM is based off the root. Em is based on the PARENT font size.",
  "Common screen sizes @media only screen and (min-width:0em) Mobile @media only screen and (min-width:64em) Small Desktop",
  "Choosing a border the color of the main text seems best, choose your color and lower the opacity until you get the desire color.",
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

// number on deck
let positionInDeck = document.querySelector(".cardNumber__current");

let totalLengthOfDeck = document.querySelector(".cardNumber__total");

// logic that allows it to go forward, if i is larger than the array, i is subtracted by one, which holds it's place in the array.
forward.addEventListener("click", () => {
  i++;
  if (i >= question.length) {
    i--;
  }
  questionText.textContent = question[i];
  answerText.textContent = "";
  getDeckPosition(i);
});

// if the array is smaller than 0, which can't happen due to the array index, it is halted, otherwise, shows the previous question and answers
backwards.addEventListener("click", () => {
  i--;
  if (i < 0) {
    i++;
    return;
  }
  questionText.textContent = question[i];
  answerText.textContent = "";
  getDeckPosition(i);
});

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
});

function getDeckLength(num) {
  totalLengthOfDeck.value = num + 1;
}

function getDeckPosition(position) {
  positionInDeck.value = position + 1;
}
// ability to jump the deck based on the user input of number.
// when the user enters a number, it should correspond to the card in the deck
// numbers can't be smaller than 1 or larger than the deck length, will change red to show some error
positionInDeck.addEventListener("change", () => {
  if (Number(positionInDeck.value) <= 0) {
    i = 0;
    positionInDeck.value = 1;
    questionText.textContent = question[0];
    answerText.textContent = "";
    console.log(i, "less or 0");
  }
  if (Number(positionInDeck.value) >= question.length) {
    positionInDeck.value = question.length;
    questionText.textContent = question[question.length - 1];
    answerText.textContent = "";
    i = question.length - 1;
    console.log(i, "more than length");
  } else {
    i = Number(positionInDeck.value) - 1;
    questionText.textContent = question[i];
    answerText.textContent = "";
    console.log(i, "other");
  }
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
// })
