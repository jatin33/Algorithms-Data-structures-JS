function sumAll(arr) {
  let memSum = arr[0] + arr[1];

  let sumBw = 0;
  
  if(arr[0]>arr[1])
  {
    for(let i = arr[1] + 1; i < arr[0];i++)
    {
      sumBw = sumBw + i; 
    }
    
  }
  else{
    for(let i = arr[0] + 1; i < arr[1];i++)
    {
      sumBw = sumBw + i; 
    }
  }

  return memSum + sumBw;
}

sumAll([1, 4]);