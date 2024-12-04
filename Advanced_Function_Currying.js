
function Average(a, b, c) {
    // A normal way to average 3 numbers using one function
    let average = (a + b + c) / 3;
    return average;
}
console.log("The average is " + Average(5, 6, 4));

// This is a function currying
function Currying(x) {
    return function(a) {
        return function(b) {
            return function(c) {
                return x(a, b, c); // Pass all three arguments to x
            };
        };
    };
}
const PassedCurry = Currying(Average);
console.log("The average using function currying is " + PassedCurry(19)(5)(6)); // Outputs 10