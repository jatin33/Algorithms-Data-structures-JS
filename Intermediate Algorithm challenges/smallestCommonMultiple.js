// Problem statement:Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

// The range will be an array of two numbers that will not necessarily be in numerical order.

// For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by all numbers between 1 and 3. The answer here would be 6.

function smallestCommons(arr) {
 let begin = arr[0]>arr[arr.length-1]?arr[arr.length-1]:arr[0];
 let end = arr[0]<arr[arr.length-1]?arr[arr.length-1]:arr[0];
 for(let i = begin; i <= end;i++){
   begin = lcm(begin,i);
 }
 return begin;
}


smallestCommons([1,5]);

//gcd(15,25);
//lcm(15,25);

function gcd(a,b){
  if(a === 0){
    return b;
  }else if(b === 0){
    return a;
  }else if(a>b){
   return gcd(b,a % b);
  }else if(b>a){
  return gcd(a, b % a); 
  }else{
    return a;
  }
}

function lcm(a,b){
  let prod = a * b;
  let hcf = gcd(a,b);
  return prod/hcf;
}


//=====================Test Cases========================
// smallestCommons([1, 5]) should return a number.
// Passed
// smallestCommons([1, 5]) should return 60.
// Passed
// smallestCommons([5, 1]) should return 60.
// Passed
// smallestCommons([2, 10]) should return 2520.
// Passed
// smallestCommons([1, 13]) should return 360360.
// Passed
// smallestCommons([23, 18]) should return 6056820.
// Passed
