// ================= Exes and Ohs
// Check to see if a string has the same amount of 'x's and 'o's. The method must
// return a boolean and be case insensitive. The string can contains any char.

function XO (str){
  var x = 0;
  var o = 0;
  for(var i = 0; i < str.length; i++){
    if(str[i] === 'x' || str[i]=== 'X'){
      x += 1;
    }
    else if(str[i] === 'o' || str[i] === 'O'){
      o += 1;
    }
  }
  if(x === o){
    return true;
  }
  else if( x === 0 && o === 0){
    return true;
  }
  else {
    return false;
  }
}

XO("ooxx") //=> true
XO("xooxx") //=> false
XO("ooxXm") //=> true
XO("zpzpzpp") //=> true // when no 'x' and 'o' is present should return true
XO("zzoo") //=> false
