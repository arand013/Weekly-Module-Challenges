  var replaceElements = function(arr) {

    const result = new Array(arr.length).fill(-1);
    let currentMax = -1;

    for(let i = arr.length - 1; i >= 0; i--) {
        result[i] = currentMax;
        currentMax = Math.max(currentMax, arr[i]);
    }

    return result;
};




// Initialize a function to replace elements in an array
var replaceElements = function(arr) {
    // Create a new array with the same length as the input array, filled with -1
    const result = new Array(arr.length).fill(-1);
    // Initialize a variable to keep track of the current maximum value
    let currentMax = -1;
    // Iterate through the input array in reverse order
    for(let i = arr.length - 1; i >= 0; i--) {
      // Replace the current element with the current maximum value
      result[i] = currentMax;
      // Update the current maximum value
      currentMax = Math.max(currentMax, arr[i]);
    }
    // Return the resulting array
    return result;
  };
