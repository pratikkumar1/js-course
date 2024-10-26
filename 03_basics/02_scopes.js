let a = 300;

if (true) {
  let a = 10;
  const b = 20;
  //   console.log("Inner: ", a);
}

// console.log(a);

function one() {
  const username = "pratik";

  function two() {
    const website = "youtube";
    console.log(username);
  }
  //   console.log(website);

  two();
}

// one();

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const webite = " youtube";
    // console.log(username + webite);
  }
  //   console.log(website);
}
// console.log(username);

// ++++++++++++++ interesting concept +++++++++++++

console.log(addone(5));

function addone(num) {
  return num + 1;
}

addTwo(5);
const addTwo = function (num) {
  return num + 2;
};
