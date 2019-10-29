function zeroMatrix(arr) {
    let rowToZerofy = [];
    let columnToZerofy = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] === 0) {
                if (!rowToZerofy.includes(i)) {
                    rowToZerofy.push(i);
                }
                if (!columnToZerofy.includes(j)) {
                    columnToZerofy.push(j);
                }
            }
        }
    }

    for (let k = 0; k < rowToZerofy.length; k++) {
        nullifyRow(arr, rowToZerofy[k]);
    }

    for (let m = 0; m < columnToZerofy.length; m++) {
        nullifyColumn(arr, columnToZerofy[m]);
    }

    return arr;
}

function nullifyRow(arr, row) {
    for (let i = 0; i < arr.length; i++) {
        arr[row][i] = 0;
    }
}

function nullifyColumn(arr, col) {
    for (let i = 0; i < arr.length; i++) {
        arr[i][col] = 0;
    }
}

console.log(zeroMatrix([[1, 0, 1, 1], [3, 4, 5, 0], [5, 6, 7, 8]]));