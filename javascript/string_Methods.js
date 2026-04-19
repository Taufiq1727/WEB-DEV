// Trim method

// in the console type msg.trim(); to remove the extra spaces



let password = prompt("set your password");
let newpass = password.trim();
console.log(password);


// lower and upper case

let n = "Taufiq";

console.log(n.toLowerCase());




let msg =  "      hello      ";

let newMsg = msg.trim().toUpperCase();
console.log("Trimmed and uppercased message:", newMsg);

// string slicing
let str = "Ilovecoding";

console.log(str.slice(0,4));
console.log(str.slice(-1));

//replacing

console.log(str.replace("love","do"));

//repeating

console.log(str.repeat(4));