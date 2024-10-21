//singleton
//Object.create
//object literals

const mySym = Symbol("key1");

const JsUser = {
  name: "Pratik",
  "full name": "Pratik Kumar",
  [mySym]: "mykey1",
  age: 18,
  email: "pratik@gmail.com",
  isLoggedIn: false,
  lastLoginDays: ["monday", "saturday"],
};

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(typeof JsUser[mySym])

// JsUser.email = "kumar@gmail.com"
// console.log(JsUser)

// Object.freeze(JsUser)
// JsUser.email = "hehe@gmail.com"
// console.log(JsUser)

JsUser.greeting = function () {
  console.log("hello js user");
};

JsUser.greeting2 = function () {
  console.log(`hello js user, ${this.name}`);
};

console.log(JsUser.greeting());
console.log(JsUser.greeting2());
