function sentensify(str) {
  // Add your code below this line
  let re = /[-|,|.]/g;
  return str.split(re).join(' ');
  // Add your code above this line
}
sentensify("May-the-force-be-with-you");
