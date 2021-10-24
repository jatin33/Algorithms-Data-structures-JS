const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 15, 17];

function iterativeBinarySearch(data, key) {
  //   console.log(mid);

  let start = 0;
  let end = data.length - 1;

  while (start < end) {
    let mid = Math.floor((start + end) / 2);
    if (data[mid] === key) {
      return mid;
    } else if (data[mid] > key) {
      end = mid;
    } else if (data[mid] < key) {
      start = mid + 1;
    }
  }
}

// needs to return the key index but returns the key itself
function recursiveBinarySearch(data, key) {
  let start = 0;
  let end = data.length - 1;
  let mid = Math.floor((start + end) / 2);
  console.log(data);
  if (data[mid] === key) {
    return mid;
  } else if (data[mid] > key) {
    return recursiveBinarySearch(data.slice(0, mid), key);
  } else if (data[mid] < key) {
    return recursiveBinarySearch(data.slice(mid + 1), key);
  }
}

console.log(iterativeBinarySearch(arr, 11));
console.log(recursiveBinarySearch(arr, 11));
