// ========= Confirm the Ending =========
// Check if a string (first argument, str) ends with the given target string
// (second argument, target).

function confirmEnding(str, target) {
  // check if a string  ends with the target string

  let i;
  let strLength = str.length ;
  let targetLength = target.length;
  let strToMatch = '';
  // loop over the str backward
  // use the target as the length of characters the loop will go over
  for(i = strLength - 1; i > (strLength - (targetLength + 1)); i--) {
    strToMatch += str[i];
    console.log(strToMatch);
  }

  // reverse str to match the str to target
  // if there is a match return true
  // else return false
    return strToMatch.split('').reverse().join('') === target;
}

confirmEnding("Bastian", "n") //should return true.
// confirmEnding("Connor", "n") //should return false.
// confirmEnding("Walking on water and developing software from a specification are easy if both are frozen", "specification") //should return false.
// confirmEnding("He has to give me a new name", "name") //should return true.
// confirmEnding("Open sesame", "same") //should return true.
// confirmEnding("Open sesame", "pen") //should return false.
// confirmEnding("If you want to save our world, you must hurry. We dont know how much longer we can withstand the nothing", "mountain") //should return false.
