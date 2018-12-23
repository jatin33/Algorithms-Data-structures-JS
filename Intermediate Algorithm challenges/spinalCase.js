
function spinalCase(str) {
  let arrOfWords = extractWords(str);
  return spinalItUp(extractWords(str));
}

function extractWords(phrase){
  // creates and returns array of words
  // here word means sequence of letters followed by underscore,space or at least one Capital letter
  // regular expression helps to materialize above statement
  let re = /\s|_|(?=[A-Z])/;
  return phrase.split(re);
}

function spinalItUp(arr){
//takes array of words and returns string of lowercase words with hyphens in between
return arr.join('-').toLowerCase();
}

spinalCase('This Is Spinal Tap');
