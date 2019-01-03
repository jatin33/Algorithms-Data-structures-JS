var Person = function(firstAndLast) {
  var fullName = firstAndLast;

  this.getFirstName = function() {
    return fullName.split(" ")[0];
  };

  this.getLastName = function() {
    return fullName.split(" ")[1];
  };

  this.getFullName = function() {
    return fullName;
  };

  this.setFirstName = function(name) {
    fullName = name + " " + fullName.split(" ")[1];
  };

  this.setLastName = function(name) {
    fullName = fullName.split(" ")[0] + " " + name;
  };

  this.setFullName = function(name) {
    fullName = name;
  };
};

var bob = new Person('Bob Ross');
bob.getFullName();

// //============= Test Cases ==============
// Object.keys(bob).length should return 6.
// Passed
// bob instanceof Person should return true.
// Passed
// bob.firstName should return undefined.
// Passed
// bob.lastName should return undefined.
// Passed
// bob.getFirstName() should return "Bob".
// Passed
// bob.getLastName() should return "Ross".
// Passed
// bob.getFullName() should return "Bob Ross".
// Passed
// bob.getFullName() should return "Haskell Ross" after bob.setFirstName("Haskell").
// Passed
// bob.getFullName() should return "Haskell Curry" after bob.setLastName("Curry").
// Passed
// bob.getFullName() should return "Haskell Curry" after bob.setFullName("Haskell Curry").
// Passed
// bob.getFirstName() should return "Haskell" after bob.setFullName("Haskell Curry").
// Passed
// bob.getLastName() should return "Curry" after bob.setFullName("Haskell Curry")
