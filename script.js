const image = document.querySelector(".image");
const options = {rootMargin:"150px"};
const observer = new IntersectionObserver(function(entries,observer){entries.forEach(entry => {
        console.log(entry);
    });
},options);
observer.observe(image);