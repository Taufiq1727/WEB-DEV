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
