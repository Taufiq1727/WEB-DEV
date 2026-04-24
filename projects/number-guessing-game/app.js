const max = prompt("enter the max number");
// console.log(max);


let random = Math.floor(Math.random() * max) + 1
// console.log(random);

let guess = prompt("guess the number:");

while(true){
    if(guess == "quit"){
        console.log("User quit");
        break;
    }

    if(guess == random){
        console.log("You are right! congrats,random number was :",random);
        break;

    }else if(guess < random){
        guess = prompt("Hint:Your guess is small try entering a larger number")
    }else{
        guess = prompt("Hint:Your guess is large try entering a smaller number")
    }
  
}