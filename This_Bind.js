const x = {
    a: "Yeh",
    b: "Huy"
};
  
const y = {
    a: "Yah",
    b: "Hey"
}  

function printValues() {
    console.log(`${this.a} and ${this.b}`);
}
  
const boundPrintValues = printValues.bind(y);
boundPrintValues(); // Output: Yeh and Huy