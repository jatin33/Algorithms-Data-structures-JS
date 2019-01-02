// Problem statement : Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
// Calling this returned function with a single argument will then return the sum:
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
// If either argument isn't a valid number, return undefined.

function addTogether() {
  const args = [...arguments];
  if(args.length === 1){
    if(checkNum(args[0])){
      return function(num){
        if(checkNum(num)){
          return num + args[0];
        }else{
          return undefined;
        }
      }
    }else{
      return undefined;
    }
  }else if(args.length > 0){
     let notNum = false;
     let sum = 0;
     args.forEach((item)=>{
       if(checkNum(item)){
         sum += item;
       }else{
         notNum = true;
       }
     });
     return notNum ? undefined : sum;
  }
}

function checkNum(num){
 return typeof(num) === 'number' ? true : false;
}

 addTogether(2,3);
