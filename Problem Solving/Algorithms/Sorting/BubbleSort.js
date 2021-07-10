// const arr = [8, 7, 1, 5, 3];
const arr = [8, 1, 2, 3, 4, 5, 6, 7];
// const arr = [1, 2, 3, 5, 8, 9];
let iterationCount = 1;

function optimizedBubbleSort(data) {
  for (let i = 0; i < data.length; i += 1) {
    let noSwap = true;
    for (let j = 0; j < data.length - i - 1; j += 1) {
      iterationCount += 1;
      if (data[j] > data[j + 1]) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
        noSwap = false;
      }
    }
    if (noSwap) {
      break;
    }
  }
}

function bubbleSort(data) {
  for (let i = 0; i < data.length; i += 1) {
    for (let j = 0; j < data.length - i - 1; j += 1) {
      iterationCount += 1;
      if (data[j] > data[j + 1]) {
        const temp = data[j];
        data[j] = data[j + 1];
        data[j + 1] = temp;
      }
    }
  }
}

optimizedBubbleSort(arr);
console.log(arr);
console.log(iterationCount);

// Time complexity: O(n2)
