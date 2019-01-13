function alphabeticalOrder(arr) {
  // Add your code below this line
  
  arr.sort((a,b)=> a > b ? 1 : -1);
  // Add your code above this line
  return arr;
}
alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);
