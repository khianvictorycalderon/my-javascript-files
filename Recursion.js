
function factorial(number) {
    if(number == 0 || number == 1) {
        return 1;
    } else {
        x = number * factorial(number - 1);
        return x;
    }
}

console.log(factorial(5));