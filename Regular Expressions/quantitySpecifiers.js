// Recall that you use the plus sign + to look for one or more characters and the asterisk * to look for zero or more characters.
// These are convenient but sometimes you want to match a certain range of patterns.

// You can specify the lower and upper number of patterns with quantity specifiers.
// Quantity specifiers are used with curly brackets ({ and }). 
// You put two numbers between the curly brackets - for the lower and upper number of patterns.

// For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.

// let A4 = "aaaah";
// let A2 = "aah";
// let multipleA = /a{3,5}h/;
// multipleA.test(A4); // Returns true
// multipleA.test(A2); // Returns false

// ==============Task defined==============
// Change the regex ohRegex to match only 3 to 6 letter h's in the word "Oh no"
let ohStr = "Ohhh no";
let ohRegex = /[^h]h{3,6}[^h]/; // Change this line
// 1. string should not start with h
// 2. first character should be followed by 3 to 6 h's
// 3. following character should not be h
let result = ohRegex.test(ohStr);
