var New_Array = [143, "I Love you", "God", 21, 29, 2004, 2002, true, false];

// These 2 functions make my life easier
function line() {
    console.log("----------------------------------");
}
function print(x) {
    console.log(x);
}

// For of method
print("For of Method: \n");
for (item of New_Array) {
    // Returns the array value
    print(item);
}
line();

// Map Method
print("Map Method: \n")
New_Array.map((item, index)=> {
    // Returns the index and value of the array
    print("Array index is: " + index + " and the value is: " + item);
});
line();

// For Each Method
print("For Each Method: \n")
New_Array.forEach(function(item,index) {
    // Returns the index and value of the array
    print("Array index is: " + index + " and the value is: " + item);
});
line();

// Every Method
print("Every Method: \n");
let everyMethod = New_Array.every(item => !isNaN(item)); // Test if every element in the array is a number, returns boolean value only
let everyMethodBool = everyMethod ? "Every element is a number" : "Not every element is a number";
print(everyMethodBool);
line();

// Some Method
print("Every Method: \n");
let someMethod = New_Array.some(item => !isNaN(item)); // Test if some element in the array is a number, returns boolean value only
let someMethodBool = someMethod ? "Some element is a number" : "There is no number element";
print(someMethodBool);
line();