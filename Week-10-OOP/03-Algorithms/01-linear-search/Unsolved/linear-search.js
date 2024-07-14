// Write code to create a function that accepts an array of numbers and a target number
// if the target number is present in the array, return its index
// else return -1
// You may not use the `indexOf`, `lastIndexOf` or `includes` methods

var linearSearch = function(arr, target) {

  // loop through the array 
  for (let i = 0; i < arr.length; i++ ){
    // check target against current item
    if (arr[i] === target) {
      return i;
    }
  }

  // return index
  return -1;
};
