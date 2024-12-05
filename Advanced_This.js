

function Greet(Argument_Name) {
    this.name = "Hello " + Argument_Name;
}

// Similar to creating objects
const newProp1 = new Greet("Jash");
const newProp2 = new Greet("Vlad");

console.log(newProp1.name);
console.log(newProp2.name);



// Similar to dynamically creating objects
class WelcomePeople {
    constructor(First_Name, Last_Name) {
        this.firstname = First_Name;
        this.lastname = Last_Name;
    }

    Welcome() {
        return `Welcome ${this.firstname} ${this.lastname}`;
    }
}

const RandomPerson = new WelcomePeople("Jake", "Reyes").Welcome();
console.log(RandomPerson);