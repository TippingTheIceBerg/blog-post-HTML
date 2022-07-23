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