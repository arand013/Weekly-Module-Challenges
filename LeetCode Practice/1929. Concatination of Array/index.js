// https://leetcode.com/problems/concatenation-of-array/description/ 

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var getConcatenation = function (nums) {

    // Create new array 
    let result = nums.slice()

    // Loop
    for (let i = 0; i < nums.length; i++) {
        result.push(nums[i])
    }

    // Result
    return result

};