function nonMutatingConcat(original, attach) {
  // Add your code below this line
  let concatedArr = [];
  for(let i = 0; i < original.length; i++){
    concatedArr.push(original[i]);
  }  
  for(let j = 0; j < attach.length; j++){
    concatedArr.push(attach[j]);
  }
  return concatedArr;
  // Add your code above this line
}
var first = [1, 2, 3];
var second = [4, 5];
nonMutatingConcat(first, second);
