// Problem statement
//======================
// You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments.
// Remove all elements from the initial array that are of the same value as these arguments.

function destroyer(arr) {
  var args = Array.from(arguments).slice(1);
  console.log(args); // gives us array from index 1 to end of arguments array
  console.log(arr); // gives us first element of argument of array
  return arr.reduce((acc,curr)=>{
    if(!args.includes(curr)) acc.push(curr)
    return acc;
  },[]);
}

// Test cases
//=================

//  Passed
//  destroyer([1, 2, 3, 1, 2, 3], 2, 3) should return [1, 1].

//  Passed
//  destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3) should return [1, 5, 1].

//  Passed
//  destroyer([3, 5, 1, 2, 2], 2, 3, 5) should return [1].

//  Passed
//  destroyer([2, 3, 2, 3], 2, 3) should return [].

//  Passed
//  destroyer(["tree", "hamburger", 53], "tree", 53) should return ["hamburger"].

//  Passed
//  destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"],
//  "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan") should return [12,92,65].
