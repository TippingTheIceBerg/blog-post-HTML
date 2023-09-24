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
  "What is a way we can add responsive images with html only?",
  "If we highlight a word, how do we select all those mentions of the highlighted word?",
  "What are SVGs?",
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
  " By using picture with a source with a fall back img we can create a responsive design. To see this, look at the CSS heading 'Add pseudo to images and choosing images based on mobile vs desktop viewing'",
  "Command + d",
  "Scalable vectors graphs. These are highly scalable and don't lost quality with size changes.since they are defined by math, not any grids or pixels.",
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
  "What's the difference in background size vs background position?",
  "How do you choose a sites colors?",
  "What's a good default img setting?",
  "What are four low cost animations?",
  "What is a site that has pre-created css styles animations",
  "What is the importance of border-box?",
  "If a box has a height and width of 100px, tell me what the height and width will be with and without border box if we add 10px of padding.",
  "What is the difference in outer displays and inner displays?",
  "How many outer display types are there?",
  "  ____ will take up its own line, it will take up the full width of the container, and border,margin, and padding will push things away from it.  ___ .A new line won't be made, height and width won't apply, only horizontal padding,margins, and border will push things away.",
  "Does padding take negative or positive values?",
  "Since ____ does not effect inline elements like __ and ___, using ___ allows us to make sure these don't form on a new line, but allows us to apply padding,height,width, and does now all overlapping",
  "How do we apply horizontal centering, and what are the requirements?",
  "What's the difference in space-around and space-evenly and space-between?",
  "What axis does align-items operates in?",
  "When a flex items is not taken up as much space as you would like, try giving it a __, this causes the item to not grow smaller.",
  "What does Flex-Wrap do?",
  "If we want to align individual items in a flex, like the children of a flex parent, how will we move things on their own?",
  "What's the best line-height for reading?",
  "What are some examples where the pseudocode of before and after won't work?",
  "In some designs you will have things overlap, in order to remove interference in clickable events, simply use __.  ",
  "For display grid, how would we repeat columns/rows if we want 3 that take up 1fr each?",
  "How goes grid areas work?",
  "Where is justify items used, and what does it do?",
  "Grid-auto-columns/rows purpose is what?",
  "What are other ways we can define row and grid placement?",
  "How do we control item placement, children inside a parent grid?",
  "When using repeat in grid, what is a good practice for sizes?",
  "We can create a shorthand for both the rows and columns with simply calling ___. Give us 2 rows and 3 columns.",
  "If we know the start and end for both rows and columns, we can treat ___ as a shorthand for all these. ",
  "If we are performing a grid-column-start, and omit an end, what happens?",
  "Is this valid code? grid-template-columns: repeat(2,2fr) repeat(2,1fr)",
  " ___ is saying what is our ideal size, if it reaches that size, keep it that way unless it reaches the min or max values.",
  "with ___, we can tell our grid that we want to have as many columns as possible, using the constraints of our ___ to determine each column's size, without it overflowing our grid.  ",
  "How does auto-fit work in grids?",
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
  "Background size controls how large you want it, with contain being the actual size without a crop while cover will try to cover everything.Background-position has to do with where you want the img to be viewed, this is the one where you use center,left,right,etc",
  "a lighter shade works more for fresh energy brands, while darker ones are more for corporate serious brands. Most sites use three colors, gray, light gray, and white. The gray is a darker gray used for texts.The main color, or the color you decide as your site color, will be for icons and large areas.  The accent color for buttons and smaller areas, call to action areas.",
  "Setting a height and width on the HTML is a good start to take up white space. Next set the height to auto, and if not decided, max-width: 100%;",
  "Position - transform: translate(npx,npx), Scale - transform: scale(n), Rotation - transform: rotate(ndeg), Opacity - opacity: 0...1",
  "We can find some popular animation at animista.",
  "The purpose of border-box involves the box model, where the padding and border are included in the height of the element.",
  "Without border box the box will now have 120px of height and width. With border box the height and width stays at 100px",
  "inner display type determines how the boxes inside the element behave while the outer display type dictates how the box will display alongside other elements ",
  "There are only two outer displays, inline and block. ",
  "block and inline",
  "Padding does not take negative values",
  "padding, a, span, inline-block",
  "For this to work, you need a defined width.Then set margin as margin: 0 auto.",
  "space around causes the space on the left and right the same, Space-evenly causes all spaces to be even, including the end points,Space between makes sure that each space between them are laid out evenly, but end points are pushed to the edge.",
  "align-items works by placing items on the cross axis, which is typically vertical. ",
  "flex-shrink of 0",
  "Flex wrap allows us to negate the shrinking ability of flex to fit on a line that too small for the container.Instead it will force the object to form a new line.Two properties of flex-wrap will be nowrap and wrap. If wrap a new line will be formed, by default it is set to no wrap, if space isn't available, it will scale down and not form a new line",
  "align effects one item on the flex container, justify-content does not have a similar method, we simply need to margin-left:auto;. This forces the flex items to push all the way to the right if space is available for example.",
  "1.5 without any units",
  "Things that are NOT containers such as inputs,buttons,imgs,etc",
  "pointer-events",
  "grid-template-rows: repeat(3,1fr)",
  "Grid-template-areas is given to main container, and we set the names of the grid-area as the name we want to have the main container take. If a name is not present/wanted, we can use a dot.",
  "justify items is used on display grid of the container,",
  "if we defined only 2 card in a row, and we add another card in the html, it will follow this rule. As you position some items, other items on the grid will continue to be laid out using the auto-placement rules.",
  "grid-column-start/end and grid-row-start/end - these can be a number, where they will start and end given the line, or you can use span and then a number and it will go expand over those grid tracks. Done as grid-column: 1 or grid-row: 1/ span 2;",
  "self: justify-self, align-self, and place-self(both align and justify)",
  "When we use repeat, we set the size as minxmax(10px, 1fr)",
  "grid-template: 50px 50px/ 50px 50px 50px",
  "grid area: 1 / 1 / 3 /6",
  "In practice if an item only spans one track you can omit the grid-column-end or grid-row-end value. Grid defaults to spanning one track. ",
  "Yes, the most basic way to make our grid items dynamic is by using fractional units, also known as fr. We can also create disproportionate grids by setting different fr repeats.",
  "Clamp",
  "grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)), and we should set an overflow: auto to allow the adjustable size",
  "Auto fit will return the highest value. First it must know the width, either one we made or the width of the window. Next it sees how many columns can fit into that width, and this is done with the min value of the minmax, lets say it was 150px. If the width was 500px, it will create 3 columns. Once it decides how many to be done, the max value of min max, if it was 1fr, will make sure each one of the columns takes up 1fr of space.",
];

let jsQuestions = [
  "How many ways can JS code be organized?",
  "Create a simple intersection observer with options.",
  "if we create an option for intersection observer, what options do we have?",
  "Define what does threshold and rootMargin do in intersection observer",
];
let jsAnswers = [
  "Plain Old JavaScript Objects and Object Constructors, Factory Functions and the Module Pattern ,Classes,and ES6 Modules",
  " let options = {}; let observer = new IntersectionObserver function(entries) {entries.forEach(entry => {console.log('test')})})",
  "Root, threshold, and rootMargin",
  "threshold - is a  0 to 1 scale.  0 is when any piece of the section is in view, while 1 is when 100% of the section is visible. rootMargin - works like margins in CSS. If wanted, it must be in parenthesis and must be in either percentage or px base. Dictates when it's fired.",
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

selectJS.addEventListener("click", () => {
  removeActiveDeck();
  question = jsQuestions;
  answer = jsAnswers;
  selectJS.classList.toggle("quiz__selection--active");
  showFirstQuestion(jsQuestions);
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
