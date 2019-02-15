// Dot notation

let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line
console.log(dog.name);
console.log(dog.numLegs);

// Bracket notation

let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line
console.log(dog['name']);
console.log(dog['numLegs']);
// P.S -> keys are always string in javascript.(Property(key:value))


// when should we use bracket over dot notation?
// 1. when property name is dynamic
// 2. when property name starts with a number
// 3. when property name is invalid identifier
