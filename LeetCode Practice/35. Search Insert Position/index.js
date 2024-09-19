/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {

    let left = 0 
    let right = nums.length - 1;

    while (left <= right){
        let mid = Math.floor((left + right) / 2)

        if ( nums[mid] === target){
            return mid; 
        }
        else if ( nums[mid] < target ){
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
        return left

    // for(let i = 0; i < nums.length; i++){

    //     if( nums[i] < target < nums[i + 1]  ){
    //         identity = nums.length
    //     } else i++
    //     // if (target > nums[i]){
    //     //     identity = nums.length
    //     // }
        
    // }

    // return identity
    
}