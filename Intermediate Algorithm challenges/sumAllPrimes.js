// Problem statement:Sum all the prime numbers up to and including the provided number.
// A prime number is defined as a number greater than one and having only two divisors, one and itself. 
// For example, 2 is a prime number because it's only divisible by one and two.
// The provided number may not be a prime.

function sumPrimes(num) {
  let primeList = [];
  for(let i = 0; i <= num; i++){
    if(isPrime(i)){
      primeList.push(i);
    }
  }
  return primeList.reduce((acc,curr)=> acc + curr,0);
}


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

// ===============Test Cases Updated=================
// sumPrimes(10) should return a number.
// Passed
// sumPrimes(10) should return 17.
// Passed
// sumPrimes(977) should return 73156.
// Passed
