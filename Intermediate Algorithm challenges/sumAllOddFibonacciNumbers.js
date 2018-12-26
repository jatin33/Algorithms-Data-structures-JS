function sumFibs(num) {
  const oddFib = generateFibonacci(num).filter((x)=> isOdd(x)).reduce((acc,curr)=> acc + curr,0);
  console.log(oddFib);

  return oddFib;
}

sumFibs(75025);

function generateFibonacci(n){
  let fib = [];
    let a = 0;
    let b = 1;
    fib.push(b);
    let c = 0;
    for(;c < n;){
      c = a + b;
      // console.log(c);
      a = b;
      b = c;
      fib.push(c);
  }
  return fib.filter((num)=>num<=n);
}

function isOdd(num){
  return num % 2 == 0 ? false : true;
}

//===========Test Cases==============
// sumFibs(1) should return a number. 
// Passed
// sumFibs(1000) should return 1785.
// Passed
// sumFibs(4000000) should return 4613732.
// Passed
// sumFibs(4) should return 5.
// Passed
// sumFibs(75024) should return 60696.
// Passed
// sumFibs(75025) should return 135721
// Passed
