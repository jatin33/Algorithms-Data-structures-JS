// Why we use this keyword
// The last challenge introduced a method to the duck object.
// It used duck.name dot notation to access the value for the name property within the return statement:
// sayName: function() {return "The name of this duck is " + duck.name + ".";}

// While this is a valid way to access the object's property, there is a pitfall here. 
// If the variable name changes, any code referencing the original name would need to be updated as well. 
// In a short object definition, it isn't a problem, but if an object has many references to its properties 
// there is a greater chance for error.
// A way to avoid these issues is with the this keyword

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();
