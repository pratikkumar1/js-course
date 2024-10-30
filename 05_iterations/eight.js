const myNums = [1, 2, 3, 43, 53, 63, 63, 657];

// const sumWithInitial = myNums.reduce(function name(acc, currval) {
//     console.log(`acc: ${acc} & currval:${currval}`);
//     return acc + currval;
// }, 0);

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0);

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "Nike",
        price: 29999,
    },
    {
        itemName: "Puma",
        price: 7899,
    },
    {
        itemName: "Jordan",
        price: 54999,
    },
];
const cartTotal = shoppingCart.reduce((acc, item) => acc + item.price, 0);
console.log(cartTotal);
