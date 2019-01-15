// What is rest operator?
// ... is the rest operator(3 dots)

// Why it is used?
//  With the rest operator, you can create functions that take a variable number of arguments. 
//  These arguments are stored in an array like object that can be accessed later from inside the function.
//  It is an array like object. Therefore performing some operations on “arguments” will give an error.
 
//  =================
//  Task defined :
//  Modify the function sum so that it uses the rest operator and it works in the same way with any number of parameters.
//  =================
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
