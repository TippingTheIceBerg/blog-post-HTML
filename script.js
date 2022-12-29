let headings = document.qu

let images = document.querySelectorAll(".images")
let options = {threshold: .5};
const observer = new IntersectionObserver(function(entries,observer){entries.forEach(entry => {
    if(!entry.isIntersecting){
        return;
    }
        entry.target.classList.toggle("images");
        observer.unobserve(entry.target)
    });
},options);
images.forEach(image =>{
    observer.observe(image);
})

let colorChange = document.querySelector(".interOb__color-change");
let colorChangeObserver = new IntersectionObserver(function(entries,observer){
    entries.forEach(entry =>{
        entry.target.classList.toggle("interOb__color-change")
    });
},options);
colorChangeObserver.observe(colorChange);


// Round Numbers
let toBeFixedExample = document.querySelector('.toBeFixed');
let fixedExample = document.querySelector('.fixed');

let toBeFixed = 1.123321312321;
let fixed = toBeFixed.toFixed(2);

toBeFixedExample.append(toBeFixed);
fixedExample.append(fixed);

// Numbers
let stringNumberExample = document.querySelector('.stringNumber');
let stringNumber = "22";
stringNumber += 8;
let myNumber = Number(stringNumber) + 8
stringNumberExample.append(stringNumber + " "+ myNumber);


// Join
const myArrayToBeJoined = ['I', 'love', 'chocolate', 'frogs'];

let notJoinedArray = document.querySelector(".arrayNotJoined");
let arrayJoined = document.querySelector(".arrayJoined");

notJoinedArray.textContent = myArrayToBeJoined;
arrayNowJoined = myArrayToBeJoined.join("")
arrayJoined.textContent = arrayNowJoined;



// objects with more than one value, values as functions
const person = {
    name: ['Bob', 'Smith'],
    age: 32,
    bio: function () {
      console.log(`${this.name[0]} ${this.name[1]} is ${this.age} years old.`);
    },
    introduceSelf: function () {
      console.log(`Hi! I'm ${this.name[0]}.`);
    }
  };

console.log(person.name, person.name[0], person.age)
person.bio();
// Bob Smith is 32 years old.
person.introduceSelf();
// Hi! I'm Bob.

let backToTop = document.querySelector(".backToTop");
let htmlSection = document.querySelector("nav");

let backToTopInt = new IntersectionObserver((entries,backToTopInt)=>{
entries.forEach(entry =>{
   if(!entry.isIntersecting){
    backToTop.classList.add("backToTop--active")

   }
 if(entry.isIntersecting){
    backToTop.classList.remove("backToTop--active")
 }
})
})
backToTopInt.observe(nav);




