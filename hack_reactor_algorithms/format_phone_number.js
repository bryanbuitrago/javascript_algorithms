// ========= Format phone number ============

// Write a function called "formatPhoneNumber". It accepts an array of numbers that represent a phone number.

// E.g.,
// [6, 5, 0, 8, 3, 5, 9, 1, 7, 2]

// Return as a string in this format:
// (650) 835-9172


function formatPhoneNumber(array){
  for(var i = 0; i < array.length; i++){
    if(i === 0){
      array.splice(0, 0, '(');
    }
    else if(i === 4){
        array.splice(4, 0, ')');
    }
    else if(i === 6){
      array.splice(5, 0, ' ');
    }
    else if(i === 9){
      array.splice(9, 0, '-');
    }
  }
  return String(array.join(''));

}
formatPhoneNumber([6, 5, 0, 8, 3, 5, 9, 1, 7, 2]);
