// Problem statement:The DNA strand is missing the pairing element. Take each character, get its pair, and return the results as a 2d array.
//Base pairs are a pair of AT and CG. Match the missing element to the provided character.
//Return the provided character as the first element in each array.
//For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]
//The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.

function pairElement(str) {
  let dnaSequence = [];
  for(let i = 0; i < str.length; i++){
    let pair = [];
    pair.push(str[i]);
    if(str[i]==='A'){
      pair.push('T');
    }else if(str[i]==='T'){
      pair.push('A');
    }else if(str[i]==='C'){
      pair.push('G');
    }else{
      pair.push('C');
    }
    dnaSequence.push(pair);
  }
  return dnaSequence;
}

pairElement("GCG");

//========================Test Cases==================
// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// Passed
// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// Passed
// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
