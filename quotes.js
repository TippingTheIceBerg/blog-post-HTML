let getQuotesText = document.querySelector(".purpose__quotes");
let setQuoteTimer = setInterval(change, 5500);
let i = 0;

let quotes = [
  "Constructors, as an example, were clearly introduced to give the JavaScript the appearance of other popular, class-based, object-oriented languages, but as was discussed here, they at best mislead, and at worst actively interfere with our ability to engage with the core structure of the language.",
  "Filter, map, sort, and reduce are the gateway drug to functional programming.",
  "arguments are best settled outside, so they occur outside a function",
  "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.",
  "Is this entertaining?",
  "Links and anchors defined by the A element must not be nested; an A element must not contain any other A elements.",
  "Are you chasing your dream? Or have you fallen in love with just the chase. What happened to achieving it?",
  "1rem is the font-size of the root element (either :root or html). The math works the same with rem as it did with em, but without the added complexity of keeping track of the parent's font size. ",
  "anything from 45 to 75 characters is widely regarded as a satisfactory length of line for a single-column page set in a serifed text face in a text size.",
  "Test Driven Development: The test will fail before you write your code, and you should be able to know that your code works correctly when the test passes.",
  "JavaScript is a prototype-based language, meaning object properties and methods can be shared through generalized objects that have the ability to be cloned and extended.",
  "Why don't we just create functions inside of objects vs having to use prototype when we want to? ",
  "Let's say we want to create new constructor functions, but we also want them to be connected to the original Hero, how do we connect this to a constructor of healer",
  "After we use call, can we now use the functions, if not, what do we need to do?",
  "If we call obj.method(), and the method is taken from the prototype, what is this referencing? ",
  "Every prototype object inherits from Object.prototype by default.",
  "This immediate function call is commonly referred to as an Immediately Invoked Function Expression (duh) or IIFE in short.",
];

getQuotesText.textContent = quotes[0];

function change() {
  i++;
  getQuotesText.textContent = quotes[i];
  if (i > quotes.length - 1) {
    i = 0;
    getQuotesText.textContent = quotes[i];
  }
}
