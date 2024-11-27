class Person {
    constructor(age) {
        this.age = age;
    }
    testage() {
        return `You are ${this.age} years old`;
    }
  }
  const jake = new Person(12);
  console.log(jake.testage());