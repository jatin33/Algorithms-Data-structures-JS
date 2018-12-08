// problem statement : Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
//In other words, return the symmetric difference of the two arrays.


function diffArray(arr1, arr2) {
  return arr1.concat(arr2).filter((item)=>
    !arr1.includes(item) || !arr2.includes(item)
  );
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// test cases covered
//=================================
// 1. if both array have nothing in common (that's why used concat)

// 2. if either of the arrays is empty (that's why used concat)

// 3. if arrays are of different length (that's why I used filter so dont have to keep track of lengths)
