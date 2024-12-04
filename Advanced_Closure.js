
var value = 0
function OutSide() {
    function InSide() {
        value++;
        console.log("Hello");
    }
    return InSide;
}

const fn = OutSide(); // Acts like a middleware
fn();