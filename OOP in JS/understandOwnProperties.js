// In the following example, the Bird constructor defines two properties: name and numLegs:
// function Bird(name) {
//   this.name = name;
//   this.numLegs = 2;
// }
// let duck = new Bird("Donald");
// let canary = new Bird("Tweety");
// name and numLegs are called own properties, because they are defined directly on the instance object. 
// That means that duck and canary each has its own separate copy of these properties.

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Add your code below this line
for(let prop in canary){
  if(canary.hasOwnProperty(prop)){
    ownProps.push(prop);
  }
}

console.log(ownProps);
