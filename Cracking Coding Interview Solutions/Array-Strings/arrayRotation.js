function rotateArray(arr, d) {
    let originalArr = [...arr];
    let toBeRotatedItems = originalArr.splice(0, d);
    let rotatedArray = [...originalArr];
    rotatedArray.push.apply(rotatedArray, toBeRotatedItems);
    return rotatedArray;
}

rotateArray([1, 2, 3, 4, 5], 1);