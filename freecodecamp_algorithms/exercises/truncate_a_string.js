// ======== Truncate a string ==========
// Truncate a string (first argument) if it is longer than the given maximum
// string length (second argument). Return the truncated string with a ... ending.

// Note that inserting the three dots to the end will add to the string length.
// However, if the given maximum string length num is less than or equal to 3, then
// the addition of the three dots does not add to the string length in determining
// the truncated string.

function truncateString(str, num) {
  // truncate the string

  // if (num <= 3) remove chars after the indicated num,
  // add 3 dots to the str without adding to the length
  // else if (str.length > num)

  // substract 3 from the num (the 3 ... added to the end)
  // remove all characters after
  // add 3 dots to the str without adding to the length

  // else return the str

  let dots = '...';

  else if(str.length > num) {
  if(num <= 3) {
   str = str.slice(0, num);
   str = str.concat(dots);
  } else if(str.length > num) {
    num -= 3;
    str = str.slice(0, num);
    str = str.concat(dots);
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11) //should return "A-tisket...".
// truncateString("Peter Piper picked a peck of pickled peppers", 14) //should return "Peter Piper...".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length)// should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-tisket a-tasket A green and yellow basket", "A-tisket a-tasket A green and yellow basket".length + 2)// should return "A-tisket a-tasket A green and yellow basket".
// truncateString("A-", 1) // should return "A...".
// truncateString("Absolutely Longer", 2) //should return "Ab...".
