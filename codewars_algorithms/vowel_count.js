// ============ VOWEL COUNT ==========
// Return the number (count) of vowels in the given string.
// We will consider a, e, i, o, and u as vowels for this Kata.

function getCount(str) {
  var vowelsCount = 0;
  var counter = 0;
  while(counter < str.length){
    if(str[counter] === 'a' || str[counter] === 'e' || str[counter] === 'i' || str[counter] === 'o' || str[counter] === 'u'){
      vowelsCount++;
    }


    counter++;
  }



  return vowelsCount;
}
