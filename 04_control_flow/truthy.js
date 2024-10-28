const userEmail = [];
if (userEmail) {
    console.log("got email");
} else {
    console.log("didnt get email");
}

// falsy values
// false, 0,  -0, BigInt 0n, "", null, undefined, NaN

// truthy values
// "0", "false", " ", [], {}, function(){},

if (userEmail.length === 0) {
    console.log("Array is Empty");
}

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is Empty");
}

// Nullish Coalescing Operator (??): null undefined

let val1;
// val1 = 5 ?? 10; // outputs: 5
// val1 = null ?? 10; // outputs: 10
// val1 = undefined ?? 15; // outputs: 15
val1 = null ?? 10 ?? 15; // outputs first value other than null: 10

// console.log(val1);

// Terniary Operator

// condition ? true : false;

const price = 100;

price <= 80 ? console.log("less than 80") : console.log("more than 80");
