//Problem statement:Think about things people see everyday, like cars, shops, and birds. These are all objects: tangible things people can observe and interact with.
// What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.
// These qualities, or properties, define what makes up an object. Note that similar objects share the same properties, but may have different values for those properties. For example, all cars have wheels, but not all cars have the same number of wheels.

//Object Literal notation
let dog = {
 name : '',
 numLegs : 2  
};

//=======When to use which approach/ pros-cons of each approach

// Using function constructor
// we use this approach when we want to create multiple objects with same properties but different values
function Dog(name,numLegs){
  this.name = name;
  this.numLegs = numLegs;
}
let dog = new Dog('puggy',4);

// Using Object.create() method
// Object.create() methord is used to create a new object with the specified prototype object and properties. 
// Object.create() method returns a new object with the specified prototype object and properties.
// Object.create() is used for implementing inheritance as there is no mechanism of sub-class in js.
function Animal(name,numLegs){
  this.name = name;
  this.numLegs = numLegs;
}
function Dog(name,numLegs){
  Animal.call(this,name,numLegs);
}

Dog.prototype = Object.create(Animal.prototype);
let dog = new Dog('boi',4);



// using ES6 class
