function sliceArray(anim, beginSlice, endSlice) {
  // Add your code below this line
  // endSlice nonInclusive
  let slicedArr = [];
  for(let i = beginSlice; i < endSlice; i++){
    slicedArr.push(anim[i]);
  }
  return slicedArr;
  // Add your code above this line
}
var inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);
