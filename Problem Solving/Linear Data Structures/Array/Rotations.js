// Brute force method where each element is moved one by one
function rotLeft(a, d) {
    let temp = 0;
    for(let i = 0; i < d; i++){
      temp = a[0];
      for(let j = 0 ; j < a.length; j++){
        a[j] = a[j + 1];
      }
      a[a.length - 1] = temp;
    }
    return a;
}

rotLeft([1,2,3,4,5],1);
