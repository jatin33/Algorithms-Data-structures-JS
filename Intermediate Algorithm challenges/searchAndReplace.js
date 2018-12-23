// Problem statement: Perform a search and replace on the sentence using the arguments provided and return the new sentence.
// First argument is the sentence to perform the search and replace on.
// Second argument is the word that you will be replacing (before).
// Third argument is what you will be replacing the second argument with (after).

function myReplace(str, before, after) {
  if(isFirstLetterCapital(before)){
    let capitalizedWord = capitalizeFirstLetter(after);
    console.log(capitalizedWord);
    return str.replace(before,capitalizedWord);
  }else{
    return str.replace(before,after);
  }
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");

function isFirstLetterCapital(word){
  // checks if first letter of the given word is in uppercase
  return word[0].toUpperCase() === word[0] ? true : false;
}

function capitalizeFirstLetter(word){
// changes the first letter of word to uppercase
  return word[0].toUpperCase() + word.substring(1);
}

//===================================Test Cases=========================================
// myReplace("Let us go to the store", "store", "mall") should return "Let us go to the mall".
// Passed
// myReplace("He is Sleeping on the couch", "Sleeping", "sitting") should return "He is Sitting on the couch".
// Passed
// myReplace("This has a spellngi error", "spellngi", "spelling") should return "This has a spelling error".
// Passed
// myReplace("His name is Tom", "Tom", "john") should return "His name is John".
// Passed
// myReplace("Let us get back to more Coding", "Coding", "algorithms") should return "Let us get back to more Algorithms".
