// What is currying?
// The arity of a function is the number of arguments it requires.
// Currying a function means to convert a function of N arity into N functions of arity 1.
// In other words, it restructures a function so it takes one argument, then returns another function that takes the next argument, and so on.

// =========================================
// Why do we need it?
// This is useful in your program if you can't supply all the arguments to a function at one time.
// You can save each function call into a variable, which will hold the returned function reference that takes the next argument when it's available. 
// Here's an example using the curried function in the example above:

// Call a curried function in parts:
// var funcForY = curried(1);
// console.log(funcForY(2)); // Prints 3
// =========================================

// Real world example of currying
// https://lukajcb.github.io/blog/scala/2016/03/08/a-real-world-currying-example.html

function add(x) {
  // Add your code below this line
  return function(y){
    return function(z){
      return x + y + z;
    }
  }
  // Add your code above this line
}
add(10)(20)(30);
