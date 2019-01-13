function splitify(str) {
  // Add your code below this line
  let re = /[-|,|\s|.]/g;
  return str.split(re);
  // Add your code above this line
}
splitify("Hello World,I-am code");
