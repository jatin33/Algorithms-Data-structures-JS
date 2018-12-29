
function steamrollArray(arr) {
  // I'm a steamroller, baby
  let flattendArr = [];

  let flatten = function(element){
    if(!Array.isArray(element)){
      flattendArr.push(element);
    }else{
      element.forEach(flatten);
    }
  }

  arr.forEach(flatten);
  return flattendArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
