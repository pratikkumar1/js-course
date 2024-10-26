const user = {
  username: "pratik",
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this);
  },
};

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// function chai() {
//   let username = "pratik";
//   console.log(this.username);
// }

// chai(); //cant use inside funtion, only inside object.

// const chai =  () => {
//   let username = "pratik";
//   console.log(this.username);
// };

// const chai = () => {
//   let username = "pratik";
//   console.log(this.user);
// };

// chai();

// const addtwo = (num1, num2) => {
//   return num1 + num2;
// };

// const addtwo = (num1, num2) => num1 + num2;

// const addtwo = (num1, num2) => ( num1 + num2 );
// const addtwo = (num1, num2) => ({
//   username: "pratik",
// });

// console.log(addtwo(2, 4));

// const myArr = [2, 3, 4, 5];

// myArr.forEach(() => {});
