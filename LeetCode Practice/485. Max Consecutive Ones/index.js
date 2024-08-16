// https://leetcode.com/problems/max-consecutive-ones/description/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    
    // variable count 
    let count = 0
    let MaxCount = 0


    // loop to count consecutive ones
    for(let i = 0; i < nums.length; i++){
        if(nums[i] == 1){
            count++
            MaxCount = Math.max(MaxCount, count)
        } else {
            count = 0
        }
    }
    // result
    return MaxCount
    
};