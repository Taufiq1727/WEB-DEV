//Create a new input and button element on the page using JavaScript only. Set thetext of button to "Click me'
//Ans
let button = document.createElement("button");
let input = document.createElement("input");
button.innerText = "Click me";
document.querySelector("body").append(input);
document.querySelector("body").append (button);

// Add following attributes to the element :Change placeholder value of input to "username" Change the id of button to "btn'
// Ans :
input.setAttribute("placeholder","username");
button.setAttribute("id","btn");

// Access the btn using the querySelector and button id. Change the button background
// color to blue and text color to white.\
let btn = document.querySelector("#btn")
btn.style.backgroundColor = "blue";
btn.style.color = "white";


// Create an hl element on the page and set its text to "DOM Practice" underlined.
// Change its color to purple.
let h1 = document.createElement("h1");
h1.innerHTML = "<u>DOM PRACTICE</u>";
h1.style.color = "purple"
document.querySelector("body").append(h1)

// Create a p tag on the page and set its text to "Hello World",
// where World is bold.
let p = document.createElement("p")

p.innerHTML = "<b>Hello World</b>";
document.querySelector("body").append(p);


