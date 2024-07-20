var majorityElement = function(nums) {
    let temp;
    let count = 0;
    for (const num of nums) {
        count === 0 ?temp = num:0;
        count += (num === temp) ? 1 : -1
    }
    return temp;   
};

var majorityElement = function(nums) { 
    // Initialize a temporary variable to store the majority element
    let temp; 
    // Initialize a counter to keep track of the frequency of the majority element
    let count = 0; 
    // Iterate through each element in the input array
    for (const num of nums) { 
        // If the counter is zero, set the temporary variable to the current number
        count === 0 ? temp = num : 0; 
        // Increment the counter if the current number matches the temporary variable, decrement otherwise
        count += (num === temp) ? 1 : -1 
    } 
    // Return the majority element
    return temp; 
};