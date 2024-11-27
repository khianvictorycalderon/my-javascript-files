async function p1() {
    console.log("Hey 1");
    await p3();
}
async function p2() {
    console.log("Hey 2");
}
async function p3() {
    await p2();
    console.log("Hey 3");
}
p1();