const arr = [8, 1, 2, 3, 4, 5, 6, 7];

function search(data, key) {
  for (let i = 0; i < data.length; i += 1) {
    if (data[i] === key) {
      return i;
    }
  }
}

console.log(search(arr, 8));
