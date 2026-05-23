// console.log("Hello node");
// // console.log(process.argv);

// let args = process.argv;
// for(i = 2;i <args.length;i++){
//     console.log("Hello",args[i]);
// }

// const math = require("./math");
// console.log(math);
// console.log(math.sum(2,3));


const fruits = require("./export_directory");
console.log(fruits);    
console.log(fruits[0]);     
