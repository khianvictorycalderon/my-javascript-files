
const Ages = [
    12,
    24,
    53,
    25,
    26,
    10,
    2,
    57
];

// Return data that are not minor
const adults = Ages.filter(age => age >= 18);

console.log(adults);