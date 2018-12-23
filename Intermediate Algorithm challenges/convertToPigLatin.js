// Problem statement : Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

let re = /[^aeiou]+/; // regular expression for consonants (1 or more times)
let str = 'bcde';

function translatePigLatin(str) {
  //console.log(str.search(re));
  console.log(indexOfFirstVowel(str));
  return str;
}

translatePigLatin("bcde");

function indexOfFirstVowel(word){
  let matches = word.match(re);
  return matches[0].length;
}

function startsWithVowel(word){
  // determines if word starts with vowel
  return word.search(/[aeiou]/) === 0 ? true : false;
}

function hasNoVowel(word){
  // checks if word has no vowel at all
  return word.search(/[aeiou]/) === -1 ? true:false;
}
