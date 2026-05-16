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

//  Create a button on the page using JavaScript. Add an event listener to the button
// that changes the button’s color to green when it is clicked.


//Ans:
let btns = document.createElement("button");
btns.innerText = "click";
btns.addEventListener("click", function(){
    btns.style.backgroundColor = "green";

});
document.querySelector("body").append(btns);


//  Create an input element on the page with a placeholder ”enter your name” and an
// H2 heading on the page inside HTML.
// The purpose of this input element is to enter a user’s name so it should only input
// letters from a-z, A-Z and space (all other characters should not be detected).
// Whenever the user inputs their name, their input should be dynamically visible inside
// the heading.
// [Please note that no other character apart from the allowed characters should be
// visible in the heading]



let inp = document.createElement("input");
inp.setAttribute("placeholder","enter your name");
let h2 = document.createElement("h2");
document.querySelector("body").append(inp);
document.querySelector("body").append(h2);


inp.addEventListener("input", function () {

    // Remove all characters except letters and spaces
    let filteredValue = inp.value.replace(/[^a-zA-Z ]/g, "");

    // Show filtered value inside heading
    h2.innerText = filteredValue;
});


