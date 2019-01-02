function truthCheck(collection, pre) {
  // Is everyone being true?
  let count = 0;
  let hasNoProp = 0;
  collection.forEach((item)=>{
    if(item.hasOwnProperty(pre)){
      if(!item[pre]){count++;}
    }else{
      hasNoProp++;
    }
  });
  if(count > 0 || hasNoProp > 0){
    return false;
  }else{
    return true;
  }
}



truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex");
