function spinalCase(str) {

  return str;
}

function extractWords(phrase){
  //creates array of words and returns array of words all in lowercase
  
}

function isUpperCase(letter){
  return letter === letter.toUpperCase();
}

function spinalItUp(arr){
//takes array of words and returns string with hyphens in bw
let spinaledString = '';
for(let i = 0; i < arr.length - 1; i++){
  spinaledString = arr[i] + '-';
}
spinaledString = spinaledString + arr[arr.length-1];
return spinaledString;
}

spinalCase('This Is Spinal Tap');
