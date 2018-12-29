// Problem statement: Flatten a nested array. You must account for varying levels of nesting.

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

// //============Test Cases==============
// steamrollArray([[["a"]], [["b"]]]) should return ["a", "b"].
// Passed
// steamrollArray([1, [2], [3, [[4]]]]) should return [1, 2, 3, 4].
// Passed
// steamrollArray([1, [], [3, [[4]]]]) should return [1, 3, 4].
// Passed
// steamrollArray([1, {}, [3, [[4]]]]) should return [1, {}, 3, 4].
// Passed
