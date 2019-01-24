// Sometimes whitespace characters around strings are not wanted but are there.
// Typical processing of strings is to remove the whitespace at the start and end of it.


// ========Task defined========
// Write a regex and use the appropriate string methods to remove whitespace at the beginning and end of strings.

// Note
// The .trim() method would work here, but you'll need to complete this challenge using regular expressions.

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Change this line
let result = hello.replace(wsRegex,''); // Change this line
console.log(result);


// =======Test cases=======
// result should equal to "Hello, World!"
// Passed
// You should not use the .trim() method.
// Passed
// The result variable should not be set equal to a string.
// Passed
