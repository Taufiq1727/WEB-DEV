//constructors-doesn't return anything and start with captital
function Person(name, age) {
  this.name = name;
  this.age = age;
  console.log(this);
}

Person.prototype.talk = function () {
  console.log(`Hi,my name is ${this.name}`);
};
let p1 = new Person("adam", 25);
let p2 = new Person("eve", 25);

//classes
class NewPerson {
  constructor(naam, umar) {
    this.naam = naam;
    this.umar = umar;
  }
  talk() {
    console.log(`Hi,my name is ${this.name}`);
  }
}
let p3 = new NewPerson("Taufiq", 25);
let p4 = new NewPerson("Simran", 25);

//inheritance

class School {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  talk() {
    console.log(`Hi I am ${this.name}`);
  }
}

class Student extends School {
  constructor(name, age, marks) {
    super(name, age);
    this.marks = marks;
  }
}
class Teacher extends School {
  constructor(name, age, subject) {
    super(name, age);
    this.subject = subject;
  }
}

let s1 = new Student("Taufiq",19,99);