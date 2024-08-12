/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
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