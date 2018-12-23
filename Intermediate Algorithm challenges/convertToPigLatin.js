// Problem statement : Translate the provided string to pig latin.

// Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

// If a word begins with a vowel you just add "way" to the end.

// Input strings are guaranteed to be English words in all lowercase.

const consonantCluster = /[^aeiou]+/;//one consonant or sequence of consonants
const vowelRegex = /[aeiou]/;

function translatePigLatin(str) {
  if(startsWithVowel(str)){
    return str + 'way';
  }else if(hasNoVowel(str)){
    return str + 'ay';
  }else{
    let leadingWord = str.substring(indexOfFirstVowel(str));
    let matches = str.match(/[^aeiou]+/);
    return leadingWord + matches[0] + 'ay';
  }  
}

translatePigLatin("california");

function indexOfFirstVowel(word){
  let matches = word.match(consonantCluster);
  return matches[0].length;
}

function startsWithVowel(word){
  // determines if word starts with vowel
  return word.search(vowelRegex) === 0 ? true : false;
}

function hasNoVowel(word){
  // checks if word has no vowel at all
  return word.search(vowelRegex) === -1 ? true:false;
}

//===================Testcases=======================

//translatePigLatin("california") should return "aliforniacay".
// translatePigLatin("paragraphs") should return "aragraphspay".
// translatePigLatin("glove") should return "oveglay".
// translatePigLatin("algorithm") should return "algorithmway".
// translatePigLatin("eight") should return "eightway".
// Should handle words where the first vowel comes in the end of the word.
// Should handle words without vowels.
