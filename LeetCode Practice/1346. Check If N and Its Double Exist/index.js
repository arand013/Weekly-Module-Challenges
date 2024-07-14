var checkIfExist = function(arr) {
            for (let i = 0; i < arr.length; i++) {
                for (let j = i + 1; j < arr.length; j++) {
                    if ((arr[i] === 2 * arr[j]) || (arr[i] === arr[j] / 2)) {
                        return true;
                    }
                }
            }
            return false;
        };

// My initial thinking: 
/* create a loop to iterare through all conditions
// Because we are working on two indices/nodes we will need two loops
    
// separate the array to get search search nodes/indices in the array starting from left to right. 
    
// Then if one condition is true in the arrat stop iterating and then return true 
    
 // Once array iteration is complete then and no condition is met.Return false
*/ 
// End of initial thinking: Below is commented descriptive code for explanation. 


 // Define a function named checkIfExist that takes an array as input
var checkIfExist = function(arr) {

    // Initialize a loop that will iterate over each element in the array
    for (let i = 0; i < arr.length; i++) {

        // Initialize a nested loop that will iterate over each element in the array, starting from the next element after the current one
        for (let j = i + 1; j < arr.length; j++) {

            // Check if the current element is twice the next element or if the next element is half of the current element
            if ((arr[i] === 2 * arr[j]) || (arr[i] === arr[j] / 2)) {

                // If such a pair is found, immediately return true
                return true;
            }
        }
    }

    // If no such pair is found after iterating over the entire array, return false
    return false;
}