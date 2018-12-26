function sumPrimes(num) {
  let primeList = [];
  for(let i = 0; i <= num; i++){
    if(isPrime(i)){
      primeList.push(i);
    }
  }
  return primeList.reduce((acc,curr)=> acc + curr,0);
}


// isPrime(97);

function isPrime(number){
  let flag = 0;
  for(let i = 2; i < number; i++){
    if(number % i === 0){
      return false;
    }
  }
    return number > 1;
}
 sumPrimes(10);
