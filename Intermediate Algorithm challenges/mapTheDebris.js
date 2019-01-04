function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  arr.forEach((ele)=>{
    let time = 2*Math.PI*Math.sqrt(Math.pow((earthRadius + ele.avgAlt),3)/GM);
    delete ele.avgAlt;
    ele.orbitalPeriod = Math.round(time);
  });

  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
