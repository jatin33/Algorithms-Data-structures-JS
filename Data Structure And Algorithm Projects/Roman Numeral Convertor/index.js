const romanToDecimal = {
1 : 'I',
5 : 'V',
10 : 'X',
50 : 'L',
100 : 'C',
500 : 'D',
1000 : 'M'
};

function convertToRoman(num) {
    let romanString = '';
    let digits = [];
    while(num > 0){
        digits.shift(num % 10);
        num = Math.floor(num / 10);
    }
    console.log(digits);
    // return num;
   }

function generateRomanNumeral(num){
    if(num === 1){
        return romanToDecimal[1];
    }
}   

