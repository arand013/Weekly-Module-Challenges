// Write code to create a function that accepts an array numbers
// Return `true` is no number appears in the array more than once, else return `false`

var isUnique = function(arr) {

  // empty container var for holding our checked values
  var container = "";

  // iterate through the array 
  for (var i = 0; i < arr.length; i++){
    
    // if the container var contains the current item
    if (container.indexOf(arr[i]) > -1) {
      return true;
    } else {
      // add the current item to the container var
      container + "|" + arr[i];
    }
  }

  return false;

};
