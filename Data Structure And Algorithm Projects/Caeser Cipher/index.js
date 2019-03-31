function rot13(str) { // LBH QVQ VG!
  let decodedStr = '';
  for (let i = 0; i < str.length; i++) {
    if (str.charAt(i) === ' ' || str.charAt(i) === '?' || str.charAt(i) === '!' || str.charAt(i) === '.') {
      decodedStr += str.charAt(i);
    } else {
      decodedStr += decipheredAlphabet(str.charAt(i));
    }
  }
  return decodedStr;
}

// Change the inputs below to test
rot13("SERR PBQR PNZC?!.");

function decipheredAlphabet(str) {
  const alphaIndex = str.charCodeAt(0) - 65 - 13;
  const transformedAlphaCode = (alphaIndex % 26 + 26) % 26;
  return String.fromCharCode(transformedAlphaCode + 65);
};