function sayMyName() {
  console.log("P");
  console.log("R");
  console.log("A");
  console.log("T");
  console.log("I");
  console.log("K");
}

// sayMyName();

// function addTwo(num1, num2) {
//   console.log(num1 + num2);
// }

function addTwo(num1, num2) {
  //   let result = num1 + num2;
  //   return result;
  return num1 + num2;
}

const result = addTwo(6, 9);

// console.log("result: ", result);

function loginUserMessage(username = "someone") {
  if (!username) {
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hehe"));

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

// console.log(calculateCartPrice(200, 400, 500, 499));

const user = {
  username: "Pratik",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}.`
  );
}
handleObject(user);

const myArray = [20, 30, 40];

function returnSecondValue(getArray) {
  return getArray[1];
}
// console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200, 300, 400]));
