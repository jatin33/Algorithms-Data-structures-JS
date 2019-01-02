// Problem statement : Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true if its value is truthy. Otherwise, return false.

// In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.

// Remember, you can access object properties through either dot notation or [] notation.

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
