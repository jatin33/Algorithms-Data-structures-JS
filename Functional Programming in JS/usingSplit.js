// Problem statement: Use the split method inside the splitify function to split str into an array of words. 
// The function should return the array. 
// Note that the words are not always separated by spaces, and the array should not contain punctuation.

function splitify(str) {
  // Add your code below this line
  let re = /[-|,|\s|.]/g;
  return str.split(re);
  // Add your code above this line
}
splitify("Hello World,I-am code");

// ====================Test Cases====================
splitify("Hello World,I-am code") should return ["Hello", "World", "I", "am", "code"].
Passed
splitify("Earth-is-our home") should return ["Earth", "is", "our", "home"].
Passed
splitify("This.is.a-sentence") should return ["This", "is", "a", "sentence"].
Passed
