// method -> function declared as value of some key in js object
let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function(){
    return 'This dog has '+dog.numLegs+' legs.';
  }  
};

dog.sayLegs();
