function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  //console.log(collection);
  //console.log(source);
  // Only change code below this line
    // arr = collection.filter((obj)=>{
    //   return obj.hasOwnProperty(source);
    // });
    //console.log(Object.getOwnPropertyNames(source)); 
    //console.log(Object.entries(source));
    let srcKeys = Object.keys(source);
    console.log(srcKeys);
    arr = collection.filter((obj)=>{
      for(let i = 0; i < srcKeys.length; i++)
      {
        if(!obj.hasOwnProperty(srcKeys[i]) || obj[srcKeys[i]]!==source[srcKeys[i]]){
          return false;
        }
      }
      return true;
    });
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });