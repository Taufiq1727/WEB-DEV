let smallImages = document.getElementsByClassName("images");

for(let i = 0 ; i < smallImages.length; i++){
    console.dir(smallImages[i].src);
}

let x = document.getElementsByTagName("p");
console.log(x);


console.dir(document.querySelector("p"));


console.dir(document.querySelector("div a"));
console.dir(document.querySelectorAll("div a"));  