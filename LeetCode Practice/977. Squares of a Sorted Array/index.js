// https://leetcode.com/problems/squares-of-a-sorted-array/description/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {

    // New array variable
    let result = []

    // Loop 
    for(let i = 0; i < nums.length; i++){
        
        let newNumber = nums[i] * nums[i]
        result.push(newNumber)
    }
        // Sort the array in ascending order (non-decreasing)
        result.sort(function(a,b){return a - b})
    
    // Result

    return result
    
};