let images = document.querySelectorAll(".images");
let options = { threshold: 0.5 };
const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle("images");
    observer.unobserve(entry.target);
  });
}, options);
images.forEach((image) => {
  observer.observe(image);
});

let colorChange = document.querySelector(".interOb__color-change");
let colorChangeObserver = new IntersectionObserver(function (
  entries,
  observer
) {
  entries.forEach((entry) => {
    entry.target.classList.toggle("interOb__color-change");
  });
},
options);
colorChangeObserver.observe(colorChange);

// Round Numbers
let toBeFixedExample = document.querySelector(".toBeFixed");
let fixedExample = document.querySelector(".fixed");

let toBeFixed = 1.123321312321;
let fixed = toBeFixed.toFixed(2);

toBeFixedExample.append(toBeFixed);
fixedExample.append(fixed);

// Numbers
let stringNumberExample = document.querySelector(".stringNumber");
let stringNumber = "22";
stringNumber += 8;
let myNumber = Number(stringNumber) + 8;
stringNumberExample.append(stringNumber + " " + myNumber);

// Join
const myArrayToBeJoined = ["I", "love", "chocolate", "frogs"];

let notJoinedArray = document.querySelector(".arrayNotJoined");
let arrayJoined = document.querySelector(".arrayJoined");

notJoinedArray.textContent = myArrayToBeJoined;
arrayNowJoined = myArrayToBeJoined.join("");
arrayJoined.textContent = arrayNowJoined;

// objects with more than one value, values as functions
const person = {
  name: ["Bob", "Smith"],
  age: 32,
  bio: function () {
    console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
  },
  introduceSelf: function () {
    console.log(`Hi! I'm ${this.name[0]}.`);
  },
};

console.log(person.name, person.name[0], person.age);
person.bio();
// Bob Smith is 32 years old.
person.introduceSelf();
// Hi! I'm Bob.

let backToTop = document.querySelector(".backToTop");
let htmlSection = document.querySelector("nav");

let backToTopInt = new IntersectionObserver((entries, backToTopInt) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      backToTop.classList.add("backToTop--active");
    }
    if (entry.isIntersecting) {
      backToTop.classList.remove("backToTop--active");
    }
  });
});
backToTopInt.observe(nav);

// let htmlHeadings = [];
// let cssHeadings = [];
// let jsHeadings = [];
// let regexHeadings = [];
// let gitHeadings = [];
// let vsHeadings = [];
// let quizTexts = [];

// // get headings

// function getRegexHeading() {
//   let regexContainer = document.querySelector(".regex__container");
//   let regexHeading = regexContainer.getElementsByTagNameNS("*", "h3");
//   for (let f = 0; f < regexHeading.length; f++) {
//     regexHeadings.push(regexHeading[f]);
//   }
// }
// function getVSHeading() {
//   let vsContainer = document.querySelector(".vs__container");
//   let vsHeading = vsContainer.getElementsByTagNameNS("*", "h3");
//   for (let e = 0; e < vsHeading.length; e++) {
//     vsHeadings.push(vsHeading[e]);
//   }
// }
// function getGITHeading() {
//   let gitContainer = document.querySelector(".git__container");
//   let gitHeading = gitContainer.getElementsByTagNameNS("*", "h3");
//   for (let d = 0; d < gitHeading.length; d++) {
//     gitHeadings.push(gitHeading[d]);
//   }
// }
// function getJSHeading() {
//   let jsContainer = document.querySelector(".js__container");
//   let jsHeading = jsContainer.getElementsByTagNameNS("*", "h3");
//   for (let c = 0; c < jsHeading.length; c++) {
//     jsHeadings.push(jsHeading[c]);
//   }
// }
// function getCSSHeading() {
//   let cssContainer = document.querySelector(".css__container");
//   let cssHeading = cssContainer.getElementsByTagNameNS("*", "h3");
//   for (let b = 0; b < cssHeading.length; b++) {
//     cssHeadings.push(cssHeading[b]);
//   }
// }

// function getHTMLHeadings() {
//   let htmlContainer = document.querySelector(".html__container");
//   let htmlHeading = htmlContainer.getElementsByTagNameNS("*", "h3");
//   for (let a = 0; a < htmlHeading.length; a++) {
//     htmlHeadings.push(htmlHeading[a]);
//   }
// }

// getHTMLHeadings();

// // stores arrays to allow them to be used on the quiz html
// let navQuiz = document.querySelector(".nav__quiz");

// navQuiz.addEventListener("click", () => {
//   sessionStorage.setItem("setHTML", JSON.stringify(htmlHeadings));
// });

// // get text under headings
// function getTexts() {
//   let htmlContainer = document.querySelector(".html__container");
//   let htmlTexts = htmlContainer.getElementsByTagNameNS("*", "p");
//   for (let a = 0; a <= htmlTexts.length; a++) {
//     quizTexts.push(htmlTexts[a]);
//   }

//   let cssContainer = document.querySelector(".css__container");
//   let cssTexts = cssContainer.getElementsByTagNameNS("*", "p");
//   for (let b = 0; b <= cssTexts.length; b++) {
//     quizTexts.push(cssTexts[b]);
//   }

//   let jsContainer = document.querySelector(".js__container");
//   let jsText = jsContainer.getElementsByTagNameNS("*", "p");
//   for (let c = 0; c <= jsText.length; c++) {
//     quizTexts.push(jsText[c]);
//   }

//   let gitContainer = document.querySelector(".git__container");
//   let gitTexts = gitContainer.getElementsByTagNameNS("*", "p");
//   for (let d = 0; d <= gitTexts.length; d++) {
//     quizTexts.push(gitTexts[d]);
//   }

//   let vsContainer = document.querySelector(".vs__container");
//   let vsTexts = vsContainer.getElementsByTagNameNS("*", "p");
//   for (let e = 0; e <= vsTexts.length; e++) {
//     quizTexts.push(vsTexts[e]);
//   }

//   let regexContainer = document.querySelector(".regex__container");
//   let regexTexts = regexContainer.getElementsByTagNameNS("*", "p");
//   for (let f = 0; f <= regexTexts.length; f++) {
//     quizTexts.push(regexTexts[f]);
//   }

//   quizTexts.forEach((text) => {
//     console.log(text);
//   });
// }
// getText();
