// Problem statement
//======================
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  // Remove all the values
  let args = Array.from(arguments);
  let arrToDestroy = args[0];

  for(let i = 1; i < args.length; i++){
    arrToDestroy.splice(arrToDestroy.indexOf(args[i]),1);
  }
  return arrToDestroy;
}

// Test cases
//=================

//  Failed
//  destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1] but returns [1, 1, 2, 3] so try using Regular expression.

//  Failed
//  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].

//  Failed
//  destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].

//  Failed
//  destroyer([2, 3, 2, 3], 2, 3) should return [].

//  Passed
//  destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

//  Passed
//  destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"],
//  "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
