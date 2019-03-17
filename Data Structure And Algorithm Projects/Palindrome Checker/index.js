 const palindrome = function (str){ 
   const arrOfLetters = buildAlphaNumericString(str).split('');
   const Stack = [...arrOfLetters];
   let isPalindrome = true;
   for(let i = 0; i < arrOfLetters.length;i++){
       if(arrOfLetters[i] !== Stack.pop()){
        isPalindrome = false;
       }
   } 
   return isPalindrome; 
}

const buildAlphaNumericString = function (str){
    return str.replace(/[^a-zA-Z0-9+]/gi,'').toLowerCase();
}

module.exports = {
    'palindrome' : palindrome,
    'buildAlphaNumericString': buildAlphaNumericString
}
