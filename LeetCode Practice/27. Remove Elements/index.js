/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */

// https://leetcode.com/problems/remove-element/submissions/1353348014/ 

var removeElement = function(nums, val) {

    // Setup variables, Count = k 
    let count = 0

    // Loop
    for(let i = 0; i < nums.length; i++){

        if(nums[i] !== val ){
            nums[count] = nums[i]
            count++
        }
    }

    // Result
    return count
    
};