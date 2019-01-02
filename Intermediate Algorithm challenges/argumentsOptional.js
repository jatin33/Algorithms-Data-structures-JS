function addTogether() {
  const args = [...arguments];
  if(args.length === 1){
    if(checkNum(args[0])){
      return function(num){
        if(checkNum(num)){
          return num + args[0];
        }else{
          return undefined;
        }
      }
    }else{
      return undefined;
    }
  }else if(args.length > 0){
     let notNum = false;
     let sum = 0;
     args.forEach((item)=>{
       if(checkNum(item)){
         sum += item;
       }else{
         notNum = true;
       }
     });
     return notNum ? undefined : sum;
  }
}

function checkNum(num){
 return typeof(num) === 'number' ? true : false;
}

 addTogether(2,3);
