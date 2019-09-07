function compressString(string) {
    let compressedString = '';
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        count++;
        let compressedChunk = '';
        if (string.charAt(i) !== string.charAt(i + 1)) {
            compressedChunk = string.charAt(i) + count;
            compressedString += compressedChunk;
            count = 0;
        }
    }
    return compressedString.length < string.length ? compressedString : string;
}

console.log(compressString('aaabbccd'));