var a = [2, 1, 2, 3, 4, 5];
let output = "";

var b = a.every(num => num > 0); // Check if all values are greater than 0
if (b) {
    output = "Every value is greater than 0";
} else {
    output = "Not every value is greater than 0";
}

console.log(output);