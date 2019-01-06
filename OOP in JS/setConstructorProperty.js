// Remember to Set the Constructor Property when Changing the Prototype
// There is one crucial side effect of manually setting the prototype to a new object. 
// It erased the constructor property! The code in the previous challenge would print the following for duck:

// console.log(duck.constructor)
// // prints ‘undefined’ - Oops!
// To fix this, whenever a prototype is manually set to a new object, remember to define the constructor property:

// Bird.prototype = {
//   constructor: Bird, // define the constructor property
//   numLegs: 2,
//   eat: function() {
//     console.log("nom nom nom");
//   },
//   describe: function() {
//     console.log("My name is " + this.name); 
//   }
// };
// ===============================================================
// Task given:
// Define the constructor property on the Dog prototype.

function Dog(name) {
  this.name = name; 
}

// Modify the code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom"); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
};

// Note:
// The constructor property returns a reference to the Object constructor function that created the instance object. 
// Note that the value of this property is a reference to the function itself, not a string containing the function's name.
// The value is only read-only for primitive values such as 1, true and "test".
