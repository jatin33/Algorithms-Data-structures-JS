// const arr = [8, 7, 1, 5, 3];
const arr = [8, 1, 2, 3, 4, 5, 6, 7];
// const arr = [1, 2, 3, 5, 8, 9];

function swap(idx1, idx2, arr) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}
let iterationCount = 1;
function selectionSort(data) {
  for (let i = 0; i < data.length; i += 1) {
    let min = i;
    for (let j = i + 1; j < data.length; j += 1) {
      iterationCount += 1;
      if (data[j] < data[min]) {
        min = j;
      }
    }

    // below check reduces unnecessary swaps
    if (i !== min) {
      swap(i, min, data);
    }
  }
}

selectionSort(arr);

console.log(arr);
console.log(iterationCount);

// time complexity: O(n2)

// difference between bubble and selection sort: no. of swaps in selection < bubble
