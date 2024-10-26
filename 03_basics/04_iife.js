// +++++++ immediately invoked function expressions ++++++

(function chai() {
  console.log(`DB Connected`);
})(); //named iife

((name) => {
  console.log(`DB connected2 ${name}`);
})("pratik"); //unnamed iife
