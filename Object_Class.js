class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Built-in, returns a string by default
    toString() {
        return `This person's name is ${this.name}, ${this.age} years old.`;
    }

    // Custom function, must be specified in order to call
    Greet() {
        return `Hello there ${this.name}.`;
    }
}


var person1 = new Person("John", 17);
console.log(person1.toString());

var person2 = new Person("Jake", 19);
console.log(person2.toString());

var person3 = new Person("Blake", 22);
var person3Greeting = person3.Greet(); // Calling the function
console.log(person3Greeting); // Calling the variable

