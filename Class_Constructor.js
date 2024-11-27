class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    welcome() {
        return `Hello there ${this.name}, ${this.age} years old`;
    }
}
const person1 = new Person("Jane",17);
const person2 = new Person("John",18);
const person3 = new Person("Clark",21);
const person4 = new Person("Bonny",23);
let a = person1.welcome();
let b = person2.welcome();
let c = person3.welcome();
let d = person4.welcome();
console.log(a);
console.log(b);
console.log(c);
console.log(d);