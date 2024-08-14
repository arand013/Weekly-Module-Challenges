// https://leetcode.com/problems/move-zeroes/

// Initialize a function moveZeroes that takes an array nums as input
var moveZeroes = function (nums) { 
    // Initialize a counter to keep track of non-zero elements
    let count = 0; 
    // Iterate over the input array
    for (const num of nums) { 
        // If the current element is not zero, move it to the front of the array
        if (num !== 0) { 
            nums[count] = num; 
            count++; 
        } 
    } 
    // Fill the remaining elements with zeros
    while (count < nums.length) { 
        nums[count] = 0; 
        count++; 
    } 
};

