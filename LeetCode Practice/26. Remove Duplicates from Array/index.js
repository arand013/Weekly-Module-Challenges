/**
 * @param {number[]} nums
 * @return {number}
 */

// https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/1353348285/ 

var removeDuplicates = function(nums) {

    // Setup variable with a count
    let count = 1 

    // Loop
    for(let i = 1; i < nums.length; i++){
        if(nums[i] !== nums[count - 1]) {
            nums[count] = nums[i];
            count++
        }
    }

    // Result
    return count
    
};