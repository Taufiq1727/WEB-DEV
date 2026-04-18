// if statements
let age = 23;
if (age >=18){
    console.log("you can vote");

}

//else if statements 

let a = 14;
if(a >= 18){
    console.log("You can vote");
}
else if(a <=18){
    console.log("You cannot vote");
}


//else statement
let x = 18;
if(x >= 18){
    console.log("You can vote");
}
else if(x <18){
    console.log("You cannot vote")
}

else{
    console.log("Invalid age");
}

//nested if-else...
marks = 99
if (marks >= 30){
    if (marks >= 80){
        console.log("grade : O");
    }
    else{
        console.log("Grade : A");
    }
}
else{
    console.log("Better luck next time")
}


// switch statements
let color = "red"

switch(color){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Gooooo.....");
        break;
        
    default:
        console.log("Broken light")
}


//alerts and prompts 


console.error("This is a error")
console.warn("This is a Warning")


//prompts 
let FirstName = prompt("enter your  FirstNamename")
let LastName = prompt("enter your LastName name")
console.log(FirstName, LastName);

let msg = "Welcome " + FirstName +" "+ LastName + "!";
alert(msg);





