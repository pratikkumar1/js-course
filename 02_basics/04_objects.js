const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "hehe@gmail.com",
  fullname: {
    userfullname: {
      firstname: "pratik",
      lastname: "kumar",
    },
  },
};

// console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {
  1: "a",
  2: "b",
};

const obj2 = {
  3: "c",
  4: "d",
};

// const obj3 = Object.assign({}, obj1, obj2); // first is target, so empty object allows to put all the sources to an empty target
// console.log(obj3);

const obj3 = { ...obj1, ...obj2 }; // spread operator
// console.log(obj3);

const users = [
  {
    id: 1,
    email: "hehe@g",
  },
  {},
];

users[1].email;

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("hehe"));

// +++++++ destructuring +++++++

const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "jack",
};

// course.courseInstructor // if used in multiple places we have to write that again and again, theres a better syntax to solve this

const { courseInstructor: instructor } = course;

console.log(instructor);

// {
//   "name": "pratik",
//   "courseName": "js in hindi",
//   "price": "free"
// }

// [
//   {},
//   {},
//   {}
// ]
