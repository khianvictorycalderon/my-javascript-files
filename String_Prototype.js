String.prototype.capitalizeFirstLetter = function() {
    const str = String(this); // Explicitly convert `this` to a string
    if (str.length === 0) return ''; // Handle empty string
    return str.charAt(0).toUpperCase() + str.slice(1);
};

const text1 = "hello";
const text2 = "world";

console.log(text1.capitalizeFirstLetter()); // Output: Hello
console.log(text2.capitalizeFirstLetter()); // Output: World