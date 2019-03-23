const unitPlaces = 
{ 0:'',1 :'I',2 :'II',3 :'III',4:'IV',5:'V',6:'VI',7:'VII',8:'VIII',9:'IX'
};

const tensPlaces =  {0:'',1:'X',2:'XX',3:'XXX',4:'XL',5:'L',6:'LX',7:'LXX',8:'LXXX',9:'XC'};
const hundredsPlaces = {0:'',1:'C',2:'CC',3:'CCC',4:'CD',5:'D',6:'DC',7:'DCC',8:'DCCC',9:'CM'};
const thousandsPlaces = {0:'',1:'M',2:'MM',3:'MMM'};

function convertToDigits(num) {
    let digits = [];
    while(num > 0){
        digits.push(num % 10);
        num = Math.floor(num / 10);
    }
    return digits;
   }

function convertToRoman(num) {
 let digits = convertToDigits(num);
 if(digits.length === 1){
   return unitPlaces[digits[0]];
 } else if(digits.length === 2){
   return tensPlaces[digits[1]] + unitPlaces[digits[0]]; 
 } else if(digits.length === 3){
   return hundredsPlaces[digits[2]] + tensPlaces[digits[1]] + unitPlaces[digits[0]];
 } else if(digits.length === 4){
   return thousandsPlaces[digits[3]] + hundredsPlaces[digits[2]] + tensPlaces[digits[1]] + unitPlaces[digits[0]]
 }
}

convertToRoman(36);