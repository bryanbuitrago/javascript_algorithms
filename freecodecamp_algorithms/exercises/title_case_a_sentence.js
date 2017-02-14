// Return the provided string with the first letter of each word capitalized.
// Make sure the rest of the word is in lower case.
// For the purpose of this exercise,
// you should also capitalize connecting words like "the" and "of".
// Remember to use Read-Search-Ask if you get stuck. Write your own code.

function titleCase(str) {
  // turn the all to lower case && into an Array of single characters
  str = str.toLowerCase().split('');

  // Loop over str and capitalize the first letter of the array
  // find the letter following a space and capitalize it
  for(var i = 0; i < str.length; i++) {
    if(str[i] === str[0]) {
      str[i] = str[i].toUpperCase();
    } else if(str[i] === ' ') {
      str[i + 1] = str[i + 1].toUpperCase();
    }
  }
  return str.join('');
}

titleCase("I'm a little tea pot"); // should return "I'm A Little Tea Pot"
titleCase("sHoRt AnD sToUt"); // should return "Short And Stout".
titleCase("HERE IS MY HANDLE HERE IS MY SPOUT"); //should return "Here Is My Handle Here Is My Spout".
