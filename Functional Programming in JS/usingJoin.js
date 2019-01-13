// Problem statement : 
// Use the join method (among others) inside the sentensify function to make a sentence from the words in the string str. 
// The function should return a string.
// For example, "I-like-Star-Wars" would be converted to "I like Star Wars". 
// For this challenge, do not use the replace method.
// ================================

function sentensify(str) {
  // Add your code below this line
  let re = /[-|,|.]/g;
  return str.split(re).join(' ');
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");

// ==============Test Cases===========
// Your code should use the join method.
// Passed
// Your code should not use the replace method.
// Passed
// sentensify("May-the-force-be-with-you") should return a string.
// Passed
// sentensify("May-the-force-be-with-you") should return "May the force be with you".
// Passed
// sentensify("The.force.is.strong.with.this.one") should return "The force is strong with this one".
// Passed
// sentensify("There,has,been,an,awakening") should return "There has been an awakening".
// Passed
