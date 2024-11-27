class Utility {
    getInput(x) {
        x = prompt("Enter Input: ");
        return x;
    }
    detect(x) {
        if(x > 0) {
            x = "Positive";
        } else if (x < 0) {
            x = "Negative";
        } else if (x == 0) {
            x = "Exactly Zero";
        } else {
            x = "Input is not a number";
        }
        return x;
    }
}

var a = new Utility();
var b = a.detect(15);
console.log(b);