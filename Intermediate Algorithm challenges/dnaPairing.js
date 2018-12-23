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
