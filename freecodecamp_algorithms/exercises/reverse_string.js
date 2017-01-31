// ======== EXERCISE #1 ========
// ======== Reverse a String =======
// Reverse the provided string.


function reverseString(str) {
  // turn string into an array
  str = str.split('');
  // loop over array backwards
  var backwardStr = [];
  for(var i = str.length - 1; i > -1; i--){
  //  push the new items into a new array
    backwardStr.push(str[i]);
  }
  // turn the str array into a string
  str = backwardStr.join('');
  return str;
}

reverseString("hello");
