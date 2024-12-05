

function Greet(Argument_Name) {
    this.name = "Hello " + Argument_Name;
}

// Similar to creating objects
const newProp1 = new Greet("Jash");
const newProp2 = new Greet("Vlad");

console.log(newProp1.name);
console.log(newProp2.name);