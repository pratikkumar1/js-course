const myObj = {
    js: "javascript",
    cpp: "C++",
    rb: "ruby",
    swift: "swift by apple",
};

for (const key in myObj) {
    // console.log(`${key} :- ${myObj[key]}`);
}

const programming = ["js", "rb", "py", "cpp"];
for (const key in programming) {
    // console.log(programming[key]);
}

const map = new Map();
map.set("IN", "India");
map.set("US", "United States of America");
map.set("FR", "France");

for (const key in map) {
    console.log(key);
}
