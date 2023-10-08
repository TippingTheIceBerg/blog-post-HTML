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
const htmlQuestions = [
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

const htmlAnswers = [
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

const cssQuestions = [
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

const cssAnswers = [
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

const jsQuestions = [
  "How many ways can JS code be organized?",
  "Create a simple intersection observer with options.",
  "if we create an option for intersection observer, what options do we have?",
  "Define what does threshold and rootMargin do in intersection observer",
  "What is the largest difference in multiple classes or elements in intersection observer?",
  "What is the setup for create a toggle?",
  "What can isIntersecting help us with?",
  "If we want to trigger a reaction and leave it, what can we do for intersectionObserver?",
  "What's a common cause of this error TypeError...not an object",
  "What's a common cause for Reference errors",
  "Common cause for type errors?",
  "If we have an array, what is wrong with this code and how can we fix it? let array = document.querySelector(mySong); array.map(....)",
  "What is key in naming variables in JS?",
  "How do you modify a string?",
  "What is an easy way to convert a string into a number?",
  "How do you change a number into a string?",
  "What is the shorthand method of Number()?",
  "What are the three ways to extract a string?",
  "What is a key feature about string extractions?",
  "What is the difference from slice and substr?",
  "if we wanted to join an array, what can we do, and what are some consequences of doing it?",
  "If we use the replace method, how would we replace all of one word?",
  "The strength of ___ is that it now allows us to manipulate a string like array.",
  "A common issue when using && and || is when choosing a variable, it must ___. ",
  "if creating a switch, what must a switch have after each choice?",
  "what does default to in a switch?",
  "Create a simple ternary function",
  "How to edit CSS with JS",
  "When wanting to cause things to vanish from the site, it's better to look into transform:_____ where _ is most likely going to be 0px, and then applying a transition on the main class.",
  "What are the two most important things needed for local storage?",
  "How does setItem work?",
  "How does getItem work and create a way that if the variable exists, the title of the page will change?",
  "What is the difference in Scroll Height vs offset Height vs Client Height",
  "If we want the max height of a document, what can we do?",
  "How do we find the scroll position from the top of the page?",
  "If we set a variable to let outside a function, if we assign that variable inside a function, tell me the difference of using let and not using let if assigned inside the function.",
  "Correct this code, let navItem = document.querySelectorAll('.nav__item'); navItem.classList.toggle('nav__move')",
  "Create a random number between 0 - 2",
  "How do we declare an array?",
  "What is the difference? When to use [] vs {}?  ",
  "Whats a for loop for arrays?",
  "How do we add an element to the end of an array?",
  "How do we convert an array into a string?",
  "___ Works at the start of array, removes the first element and shifts all elements to the lower index.The ___ method of Array instances adds the specified elements to the beginning of an array and returns the new length of the array.",
  "If we want to merge two arrays, what can we do?",
  "The ___ method adds new items to an array. The first parameter defines the position where new elements should be added. The second parameter defines how many elements should be removed.The rest of the parameters define the new elements to be added.",
  "Slice method does not ____.If the other value is added it will go up to but not count that value. If no value is added for the second one, then it will slice the whole thing.",
  "Create a for of loop for an array about cats.",
  "What's the difference from a forEach and forOf loop?",
  "How do we create an array map that takes a function?",
  "What is the difference between an argument and parameter?",
  "What method is this? Take a collection and create change to each item in the collection.",
  "What method is this? Take a collection and depending on the criteria, create a new collection. ",
  "How does filter work?",
  "What are function expressions and when are they used most?",
  "Make this into a function expressions. function lCat(cat){return cat.startsWith('L')} const filtered = cats.filter(lCat)",
  "What is the correct flow in creating a paragraph and adding it onto a header?",
  "tell me what does this code output for(let i = 0; i < 10; i++) if(i % 2 == 0) continue; alert(i)?",
  "What works opposite to continue?",
  "How to reverse a string?",
  "When considering arrays, always think of the big three, __,__,and __ if you want some sort of modification to an array.",
  "What does the spread operator do?",
  "While wanting rounded numbers, ____ allows us to get an equal distribution of random numbers within a range. However, ___ is better suited if we want just a rounded number for math purposes or when choosing to make a number more readable to humans.",
  "What is the DOM?",
  "What are some issues with querySelectorAll? ",
  "How would we set an attribute, get the value of that attribute, and then remove that attribute from an element?",
  "While we can add classes with ___ and remove them with ___, it's almost always better to toggle it instead with __",
  "What is one of the best ways to clear content?",
  "What are objects?",
  "How do we create an object?",
  "A property is a ____, where ___ is a string  and ___ can be anything.(taken from javascript.info )",
  "What are the two ways we can created objects?",
  "When you think of objects what should you think of first?  ",
  "How do we delete properties?",
  "What must be done when a key has  two or more words?",
  "What is a trailing comma?",
  "If wanting to access a value that's greater than one word, we ____. Remember that the ____ still needs quotation marks.",
  "Imagine we create a variable that takes a prompt, and that prompt is a value that matches a key, how would we call this?",
  "Why do some key value pairs have the same name?  ",
  "How many ways are there to detect if a property is present, and what are they?",
  "in this example, how will you display all possible keys and values? let user = {name: 'peter', food:'pie',}",
  "How will a key with multiple values looks like?",
  "Can you create a functions as objects?",
  "If a function is made as an object, if needed, how do you involve other key value pairs?",
  "how do you call a function in an object?",
  "Similar to properties, a key with a function is called a ___",
  "Is this acceptable? bio : console.log(`${this.name}`), if so, what is this?",
  "How would you create property within another property?",
  "Create a constructor for objects called person, which has two parameters of name, and password, then invoke and create one",
  "___ will always reduce the amount ",
  "if using a filter and an object, filter so that only years above 1500 and under 1900 shows",
  "If an object is made called people, and each key value has a key of first and last, please show all first and last names per person",
  "If you have a bunch of inventors that each have a year of birth, sort it from oldest to youngest",
  "if we wanted to build values over time, what should we do?",
  "Like sort, it must return something. Also, reduce has so far always either had a black with {} or a value of __ at the end.",
  "What does a and b do in the sor method?",
  "If we don't have age, but we have date born and date deceased, how will we sort by oldest age?",
  "Why should we care that querySelectorAll gives a node list?",
  "if we have gained all names off a wiki page, how do we make sure we only get words that have the letters de?",
  "What are the two options with dealing with reduce?",
  "If we want to count how much times a key is called upon, but also create the key if not present, how will this be done?",
  "__ checks to see if at least one is true",
  "To get the current year, use the ___ and __",
  "___ can be used when we want to delete something from our arrays since we need to know the position of them.",
  "After find index, how do we delete it from the array?",
  "Similar to reduce,whenever we have a value we want to manipulate with a previous value, we can use this instead",
  "Create a simple recursion where we take 9 and multiply it with the next number down",
];
const jsAnswers = [
  "Plain Old JavaScript Objects and Object Constructors, Factory Functions and the Module Pattern ,Classes,and ES6 Modules",
  " let options = {}; let observer = new IntersectionObserver function(entries) {entries.forEach(entry => {console.log('test')})})",
  "Root, threshold, and rootMargin",
  "threshold - is a  0 to 1 scale.  0 is when any piece of the section is in view, while 1 is when 100% of the section is visible. rootMargin - works like margins in CSS. If wanted, it must be in parenthesis and must be in either percentage or px base. Dictates when it's fired.",
  "1. We will use querySelectorAll, 2. When we call the observer, we need to perform a forEach before calling the observer to make sure they each get it. IE images.forEach(image => {observer.observe(image)})",
  "TCT, target; classList; toggle",
  "prevents preemptive firing, also when you leave the focus area, it won't fire again. IE if(!entry.isIntersecting){return}",
  "We can unobserve it as observer.unobserve(entry.target)",
  "Most likely due to JS running before the element even exists on the page. Move the JS to the bottom of the webpage.",
  "A ReferenceError is thrown when one refers to a variable that is not declared and/or initialized within the current scope.",
  " a TypeError may be thrown when:an operand or argument passed to a function is incompatible with the type expected by that operator or function;or when attempting to modify a value that cannot be changed;or when attempting to use a value in an inappropriate way",
  "querySelector create a nodeList which can use array methods. Convert to an array with a spread operator. let songs = [...document.querySelector(mySongs)]. Or we can use Array.from(document.querySelector(mySongs))",
  "Be verbose if you want to and explain what it is doing with a verb if possible. Functions are actions. So their name is usually a verb. It should be brief, as accurate as possible and describe what the function does, so that someone reading the code gets an indication of what the function does. It is a widespread practice to start a function with a verbal prefix which vaguely describes the action.",
  "strings are IMMUTABLE meaning that any change to a string must be done with creating a new variable and setting some sort of method to the string we want to change.",
  "having the string surrounded by Number() will convert a string into a number",
  ".toString causes a number variable to change.",
  "simply adding a + in front of the string will convert it",
  "slice, substring, and substr",
  "They all must be assigned to a variable and they all take a start and an end",
  "Substr works at the start like slice, but the second value is a count from value, meaning using substr(7,6) means start at 7 and count up 6 spots instead of position based like in slice.",
  "We can join an array with .join(''), this however causes the array to become a string.",
  "we will use regex, let newText = text.replace(/word/ig, 'newWord')",
  "split",
  "be called upon each time",
  "a switch is typically placed inside a function, switch(var) {case 'option' break;} where we have one variable be used as the value to decide what is going to happen, follow by a break phrase to end the option.",
  "A default is a catch all if the comparison hasn't been made",
  " a >= b?true:false",
  "There are three ways to edit two ways require the style phrase. 1. style.color/opacity/etc...  '' 2 style.cssText, the last way is div.setAttribute('style','color:blue;background:white;')",
  "translate3d(xpx,ypx,zpx), x is a negative value, while y,z, and opacity are set to 0",
  "setItem and getItem",
  "window.localStorage.setItem('varNameWeCreate',itemWeWantStored) the item we want stored will now be stored as the varNameWeCreate",
  "window.localStorage.getItem('username') != ''? document.title = a: document.title = b",
  "scrollHeight value is equal to the minimum height the element would require in order to fit all the content in the viewport without using a vertical scrollbar,ClientHeight: it includes the element’s padding, but not its border, margin or horizontal scrollbar (if present).offsetHeight: is a measurement in pixels of the element’s CSS height, including border, padding and the element’s horizontal scrollbar",
  "docElem = document.documentElement; let userDocHeight = Math.max(docElement.scrollHeight, docElement.clientHeight, docElement.offSetHeight)",
  "the scrollTop property sets or returns the number of pixels an element's content is scrolled vertically. document.documentElement.scrollTop",
  "Setting a variable with let will only allow change to the outside if we set the variable to another variable WITHOUT the let phrase. If we do decide to give the variable a new value, but use let, it WON'T change the value of the global variable. So let does not effect global",
  "When selecting multiple classes, we must use a for loop,let navItem = document.querySelectorAll('.nav__item');for(let i = 0; i < navItem.length; i++) navItem[i].classList.toggle('nav__move')",
  "let randomNumber = Math.floor(Math.random()*2)",
  "Most arrays are declared with const instead of let or var",
  "[] are array, {} are objects , {},when you want the element names to be strings (text).You should use arrays, [],when you want the element names to be numbers.",
  "Arrays have the extra benefit of using forEach. called by ArrName.forEach()",
  "Use array.push()",
  "we must assign the about to be converted string into a var, then do arrName.toString();",
  "shift and unshift",
  "let newArr = arrA.concat(arrB)",
  "splice",
  "modify an old array, it creates a new one.",
  "for(const cat of cats){console.log(cat)}",
  "Only use the for-each loop when you want to loop through all the values in an array or list. If you only want to loop through part of an array or list use a for loop instead.",
  "first create the function, function toUpper(string){ return string.toUpperCase()}; let upperCase = name.map(toUpper); this works by first having a function have an parameter, once we create the map of the array, each item inside the array will be act as an argument for the parameter and invoke the function.",
  "parameters are just placeholders for the function, arguments are the actual values that are passed during the function call.",
  "Array Map",
  "Array Filter",
  "Filter works by checking to see if each item in the array gives a truth or false value, if true, it will be assigned into the new array, if false, it will be excluded.",
  "function expressions makes using a function either map or filter easier.",
  "const filtered = cats.filter((cat) => cat.startsWith('L')) so instead of calling a function, we just use the arrow to say what we want to do",
  "Create a child, add text, append the child let para = document.createElement('p'), para.textContent = 'word', header.appendChild(para)",
  "1,3,5,7,9",
  "break",
  "To reverse a string first convert it into an array, then reverse, then join; let rString = string.split('').reverse().join('')",
  "map,filter, and reduce",
  "Spread operator allows an iterable to expand in places where 0+ arguments are expected. Best when an unknown amount of arguments (multiple) are going to be included., ie let test = function(arr,...numbers); test([1,2],1,2,3) in this case the 1,2,3 will all be tested ",
  "Math.floor and Math.random",
  "DOM stands for Document Object Model, which is a tree like representation of the contents of the page. This is how we classify elements as parents, children, or siblings.",
  "SelectAll looks like an array, but is actually a nodeList, meaning not all array methods work. One solution is it use the spread operator on the nodeList.",
  "div.setAttribute('id','madeId'); div.getAttribute('id') (will return madeID); div.removeAttribute('id')",
  "div.classList.add, div.classList.remove, div.classList.toggle.",
  "A newer approach is to use (container).replaceChildren(); This method allows us to clear the children and if wanted, replace it with new children. However if the goal is simply to clear the children,leave it blank.",
  "Objects are used to store keyed collections of various data and more complex entities",
  "An object can be created with figure brackets {…}",
  "key: value” pair",
  "We can create objects with an object literal ;  let user = {}; or an object constructor syntax; let user = new Object();",
  "Key: value pairs, all objects follow this. And a key: value pair together are called properties.",
  "delete object:key, ie delete user.age ",
  "They must be in quotations",
  "Each key:value pair needs a comma ",
  "MUST use square bracket notation",
  "Since the key is assigned to a variable, it can only be called with bracket notation with the name of the variable",
  "Typically keys will have the same value as the parameters used for the value, so to combat this, we simply call the property as name, or age, etc",
  "1. user.propName === undefined, if true no such property, 2. 'keyName' in user, true exists, false does not",
  "Use a for in loop, for(let key in user) {alert user}; alert user[key]",
  "let person = {name : ['Bob','Peter']}, it will be in a bracket and separated by comma",
  "yes, the key will be the name of the function, the value will be function () {} as plain old function creation.",
  "We will use this within the function, this always refers back to the object name. IE BIO: function(){console.log(this.name[0])} will refer to the main object name, and if the key of name has two values, will refer to the first value.",
  "similar to dot notation except we must include a () since these can take arguments, user.bio()",
  "method",
  "Yes, this is a shorter syntax for creating a function which excludes the function phrase.",
  "let person = {name: {first: 'fred', last: 'johnson', },}",
  "Make sure the name is Capital. function Person(name,password){this.name = name ; this.password = password;}. let person1 = new Person ('Frank','password1'). person1.name and person1.password will now show",
  "filter",
  "let selectAge = people.filter(person.year >= 1500 && person.year < 1900)",
  "let fullName = people.map(people => people.first + '' + people.last)",
  "let order = inventors.sort((a,b)=> {a.year - b.year? 1: -1})",
  "We should use reduce, ",
  "reduce, 0",
  "a and b are placeholders for the location of the array, think of it as arr[0] is a, and arr[1] being b.",
  "We will use sort. let oldest = inventors.sort(function(a,b) => let lastGuy = a.death - a.birth); let nextGuy = b.death - b.birth;  return lastGuy > nextGuy? -1: 1",
  "Since if we want to use any of the array function to sort,map, filter,etc data we need to change it, and this includes using data from other sites",
  "We will use a map to get all textContent then a filter to only include the words with de. IE let de = links.map(link => link.textContent).filter(streetName => streetName.includes('de'))",
  "reduce can either end with 0, or {} at the end, these help with undefined variables",
  "let a = arr.reduce(function(object,item){if(!object[item]){object[item] = 0;}object[item]++; return object;},{})",
  "some",
  "newDate().getFullYear()",
  "findIndex",
  "arr.splice(indexOfFoundIndex,1)",
  "recursion",
  "let factorial = function(num){if(num == 0){return 1;}return num*factorial(num-1)}",
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
