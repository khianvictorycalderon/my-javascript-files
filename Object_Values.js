const obj = {
    "safdsg": {
        desc: "Hehe",
        shown: "Shown"
    },
    "safjss": {
        desc: "Huhu",
        shown: "Unsent"
    },
    "sabmas": {
        desc: "Haha",
        shown: "Removed"
    }
}

Object.values(obj).map((value) => {
    if (value.shown == "Shown") {
        console.log(value.desc);
    } else {
        console.log(value.shown);
    }
})