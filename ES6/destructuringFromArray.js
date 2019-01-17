// ES6 makes destructuring arrays as easy as destructuring objects.

// One key difference between the spread operator and array destructuring is that the spread operator unpacks all contents of an array into a comma-separated list. Consequently, you cannot pick or choose which elements you want to assign to variables.

// Destructuring an array lets us do exactly that:

// const [a, b] = [1, 2, 3, 4, 5, 6];
// console.log(a, b); // 1, 2
// The variable a is assigned the first value of the array, and b is assigned the second value of the array.

// We can also access the value at any index in an array with destructuring by using commas to reach the desired index:

// const [a, b,,, c] = [1, 2, 3, 4, 5, 6];
// console.log(a, b, c); // 1, 2, 5
let a = 8, b = 6;
(() => {
  "use strict";
  // change code below this line
  [ a , b] = [b , a];
  // change code above this line
})();
console.log(a); // should be 6
console.log(b); // should be 8

// What is destructuring ? 
// It is a way of extracting data from given object or array. 


// Why destructuring needed?
// We can achieve same results using Dot notation to extract data but we can do it using destructuring using few lines of code. 
