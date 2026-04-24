const student = {
    name: "Taufiq",
    age: 18,
    marks: 95.5

};
console.log(student);
console.log(student["name"]);

const item = {
    Price: 100.99,
    discount:50,
    colors:["red","pink"]
};
console.log(item);
console.log(item.Price)


const student2 = {
    name :"Simran",
    age: 18,
    marks: 94.5,
    city :"Bangalore",
}
// To change the city of the literal
student2.city = "Mumbai";
console.log(student2)
// to add something in the literal 
student2.gender = "female"
console.log(student2)

// to delete something from the literal
delete student2.marks;
console.log(student2);


// nested objects 
const classInfo ={
    aman:{
        grade: "A+",
        city:"Bangalore",
    },
    Taufiq:{
        grade:"A",
        city:"Hoskote",
    },
    Simran:{
        grade:"O",
        city:"Mumbai",
    },
};

console.log(classInfo);


//Array of objects
const classInfo2 = [
    {
        name :"Taufiq",
        grade:"A+",
        city:"Bangalore",
    },
    {
        name :"Simran",
        grade:"A",
        city:"Hoskote",
    },
    {
        name :"Khushi",
        grade:"A",
        city:"Mumbai"
    }
    
];

console.log(classInfo2)


//generating random numbers by math function
let num = Math.random();
num = num*10;
num = Math.floor(num);
num = num +1;
console.log(num);
