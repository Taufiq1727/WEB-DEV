let marks = [1,2,3,4];

// array methods 

let cars = ["audi","bmw", "toyota","xuv"];
//push method
cars.push("maruthi");
cars.push("Farrari");
//pop method
cars.pop();// removes the last element from the array 


// shift and unshift
cars.unshift("toyota");
cars.unshift("Supra");
cars.shift();

//concate and reverse methods
let primary = ["red","blue","green"];
let secondary = ["orange", "green", "violet"];

console.log(primary.concat(secondary));

console.log(primary.reverse());


//slice methods 

console.log(cars.slice(1));
console.log(cars.slice(2,4));
console.log(cars.slice(-2));

//sort method
console.log(cars.sort());






 