
function truncateString(str, num) {
  // Clear out that junk in your trunk

  // add ... to the str if exceeds the num of characters without the str length > num
  // turn str into an array
  str = str.split('');
  // loop over array
  for(var i = 0; i < str.length; i++) {

    if(i >= num) {
      str.splice(i);
    } if(str.length === num) {
      str.splice(-3);
    }
  }
  while(str.length < num) {
    str.push('.');
  }
  // find length of the str
  // if str.length > num
//   console.log(str.length);
  return str.join('');
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
