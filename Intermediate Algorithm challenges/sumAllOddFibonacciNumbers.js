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
