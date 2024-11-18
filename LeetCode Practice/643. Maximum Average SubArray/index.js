/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {

    // Create new a array 
    let maxSum = 0 
    let sum = 0 

    // Create a loop to add the sum of K elements 
    for(let i = 0; i < k; i++){
      sum += nums[i]
    }

    // Create the average of the sum in a variable
    maxSum = sum / k 

    // Iterare through the window length in the array
    for(let i = k; i < nums.length; i++){

        // Create a sum of the current window of size k.
        sum = sum - nums[i - k] + nums[i]

        // Compare the size of the averages, call MaxSum for the Max Average
        maxSum = Math.max(maxSum, sum / k)
    }

    return parseFloat(maxSum)
    
};