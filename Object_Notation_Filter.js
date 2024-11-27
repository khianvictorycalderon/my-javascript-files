var people = [
    {
        "name":"bob",
        "age": 17
    },
    {
        "name":"smith",
        "age": 18
    },
    {
        "name":"marlon",
        "age": 21
    }
];
var filteredPeople = people.filter(function(person) {
 return person.age >= 18;
});
filteredPeople.forEach(function(person) {
 console.log(person.name);
});