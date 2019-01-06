// Understand Where an Object’s Prototype Comes From
// Just like people inherit genes from their parents, an object inherits its prototype directly from the constructor function that created it. For example, here the Bird constructor creates the duck object:

// function Bird(name) {
//   this.name = name;
// }

// let duck = new Bird("Donald");
// duck inherits its prototype from the Bird constructor function. You can show this relationship with the isPrototypeOf method:

// Bird.prototype.isPrototypeOf(duck);
// // returns true

// Task to complete : Use isPrototypeOf to check the prototype of beagle.

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Add your code below this line

Dog.prototype.isPrototypeOf(beagle);

// Some questions lingering in my mind
// ========================================================================================================
// What is the difference between functionality of instanceof operator and isPrototypeOf() method ?
// We can also create same result with beagle.constructor = Dog then why should we prefer isPrototypeOf() method ?
