function greet(name) {
    console.log(name);
}

function passGreet(name, callback) {
    const myGreet = `Hello ${name}`;
    callback(myGreet);
}

passGreet("John",greet);