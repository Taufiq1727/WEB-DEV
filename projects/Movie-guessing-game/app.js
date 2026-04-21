const favMovie = "dhurandar";

let guess = prompt("guess my fav movie (Hint:It is a syp movie)");

while( (guess != favMovie) && (guess != "quit")){
    guess = prompt("Wrong answer");
}

if(guess == favMovie){
    console.log("Congrats");
}
