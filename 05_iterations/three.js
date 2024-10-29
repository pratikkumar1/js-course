// for of

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    // console.log(num);
}

const greetings = "hello pratik";
for (const greet of greetings) {
    if (greet == " ") {
        // console.log("space is detected");

        break;
    }
    // console.log(`each char is: ${greet}`);
}

// Maps

const map = new Map();
map.set("IN", "India");
map.set("US", "United States of America");
map.set("FR", "France");

// console.log(map);

for (const [key, value] of map) {
    console.log(key, ":-", value);
}

const myObj = {
    game1: "NFS",
    game2: "SPIDERMAN",
};

for (const [key, value] of myObj) {
    console.log(key, "=", value);
}
