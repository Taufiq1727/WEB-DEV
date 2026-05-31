let arr1 = [1, 2, 3];
let arr2 = [1, 2, 3];
console.log(arr1.map === arr2.map);


//factory functions

function PersonMaker(name,age) {
    const person = {
        name : name,
        age : age,
        talk(){
            console.log(`Hi,my name is ${this.name}`);
        },
    };
    return person;
}

let p1 = PersonMaker("Taufiq",18)
let p2 = PersonMaker("Simran",18)