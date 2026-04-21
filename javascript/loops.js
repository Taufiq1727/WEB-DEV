for(let i=1;i<5;i++)
{
    console.log(i);
}


console.log("Printing Odd numbers");

for(let i = 1 ; i <=15 ; i = i+2){
    console.log(i);
}

console.log("printing even numbers");
for(let i = 2; i <=10 ; i = i+2){
    console.log(i);
}


console.log("Printing the multiplication table of 5");

for(let i = 5; i<=50; i= i+5){
    console.log(i);
}

console.log("Nested loops");
for(let i = 1 ; i <=3 ;i++){
    for(let j = 1 ; j <=3; j++){
        console.log(j);
    }
}


console.log("While loops");

let i = 1;
while(i<=5){
    console.log(i);
    i++;
}


console.log("Break keyword");

let j = 1;
while(j<=5){
    if(j==3){
        break;
    }
    console.log(j);
    j++
}


console.log("Loops with arrays");

let fruits = ["Apple", "mango", "banana","orange"];

for(let i = 0 ; i < fruits.length; i++){
    console.log(i , fruits[i]);
}


console.log("Loops in nested array");

let heroes = [["ironman","batman","spiderman"],["wonder-women","superman","shaktiman"]];


for(let i = 0;i<heroes.length;i++){
    console.log(heroes[i]);
    for(let  j= 0 ;j<heroes[i].length;j++){
        console.log(`j = ${j}, ${heroes[i][j]}`)
    }
}