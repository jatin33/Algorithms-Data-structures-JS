// What does test() function does?
// One way to test a regex is using the .test() method. The .test() method takes the regex,
// applies it to a string (which is placed inside the parentheses), 
// and returns true or false if your pattern finds something or not.

// What does it take as argument and what does it output as result?
// in-args => string on which pattern matching takes place
// output => Boolean(true/false)

// =============Task Defined==============
// Apply the regex myRegex on the string myString using the .test() method.

let myString = "Hello, World!";
let myRegex = /Hello/;
let result =myRegex.test(myString); // Change this line
