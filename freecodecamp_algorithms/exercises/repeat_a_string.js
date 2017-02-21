// ========= Repeat a string repeat a string =======
// Repeat a given string (first argument) num times (second argument). Return an empty string if num is not a positive number.

function repeatStringNumTimes(str, num) {
  // repeat after me
  // repeat the str the num of times continually
  // loop over the str
  var newStr = '';
  for(var i = 0; i < num; i++) {
      // add the str to the newStr the number of times provided by the num
    newStr += str;
  }
  // return newStrstr

  return newStr;
}

repeatStringNumTimes("abc", 3);
repeatStringNumTimes("*", 3) //should return "***".
repeatStringNumTimes("abc", 3) //should return "abcabcabc".
repeatStringNumTimes("abc", 4) //should return "abcabcabcabc".
repeatStringNumTimes("abc", 1) //should return "abc".
repeatStringNumTimes("*", 8) // should return "********".
repeatStringNumTimes("abc", -2) // should return "".
