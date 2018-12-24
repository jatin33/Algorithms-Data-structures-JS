// Problem statement : Find the missing letter in the passed letter range and return it.
// If all letters are present in the range, return undefined.

function fearNotLetter(str) {
  let missedLetter = '';
  let noMissedLetterFreq = 0;
  for(let i = 0; i < str.length - 1; i++){
    let consDiff = Math.abs(str.charCodeAt(i)-str.charCodeAt(i+1));
    if(consDiff!==1){
      missedLetter = String.fromCharCode(str.charCodeAt(i)+1);
    }else{
      noMissedLetterFreq++;
    }
  }
  if(noMissedLetterFreq === (str.length-1)){
    return undefined;
  }else{
    return missedLetter;
  }
}
fearNotLetter("bcdf");

// =================Test Cases=================
// fearNotLetter("abce") should return "d".
// Passed
// fearNotLetter("abcdefghjklmno") should return "i".
// Passed
// fearNotLetter("stvwx") should return "u".
// Passed
// fearNotLetter("bcdf") should return "e".
// Passed
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
