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
