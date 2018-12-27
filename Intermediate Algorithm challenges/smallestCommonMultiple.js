function smallestCommons(arr) {
 console.log(arr[0]);
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
