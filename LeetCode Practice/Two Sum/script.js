// Given an array of integers nums and an integer target,
// return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, 
// and you may not use the same element twice.

// You can return the answer in any order.


//------------------------------
// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

//------------------------------
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]

//------------------------------
//Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


var twoSum = function(nums, target) {
    const map = {};
    for (let i = 0; i < nums.length - 1; i++) {
    map[target-nums[i]] = i;
    if (nums[i+1] in map) return [map[nums[i+1]], i+1];
    } }