
function getFunctionCode(functionName) {
    return typeof functionName === "function" ? functionName.toString() : "The argument is not a function.";
}

// Example
function Add(a, b) {
    return a + b;
}
function Subtract(x, y) {
    return x - y;
}

// Using custom function
console.log(getFunctionCode(Add));

// Using built-in function
console.log(Subtract.toString());