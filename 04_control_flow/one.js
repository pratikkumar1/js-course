//if

// const isUserLoggedIn = true;
// const temp = 55;
// if (temp < 50) {
//   console.log(`temp less than 50`);
// } else {
//   console.log(`temp more than 50`);
// }

// Operators: <, >, <=, >=, == (check if equal), != (notequal), === (checks type)

// const score = 200;

// if (score > 100) {
//   const power = "fly";
//   console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);

// const balance = 654;

// if (balance > 500) console.log(`test`);

// if (balance < 500) {
//   console.log("less than 500");
// } else if (balance < 750) {
//   console.log("less than 750");
// } else if (balance < 900) {
//   console.log("less than 900");
// } else {
//   console.log("less than 1200");
// }

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

if (userLoggedIn && debitCard && 2 == 3) {
  console.log(`allow to buy course`);
}

if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("user logged in.");
}
