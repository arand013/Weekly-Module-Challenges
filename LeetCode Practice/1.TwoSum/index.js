// https://leetcode.com/problems/two-sum/

/* 

This code is solving the "Two Sum" problem, 
which is to find two elements in an array that add up to a given target value. 
The function takes an array `nums` and a target value `target` as inputs, 
and returns an array of indices of the two elements that sum up to the target value.

*/ 

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // Initialize an empty array to store the result
    let result = [] 
    // Loop through each element in the nums array
    for (let i = 0; i < nums.length; i++) { 
        // Loop through each element in the nums array starting from the next index of i
        for (let j = 1 + i; j < nums.length; j++) { 
            // Calculate the sum of the current elements at indices i and j
            let addition = nums[i] + nums[j] 
            // Check if the sum equals the target value
            if (addition == target) { 
                // Add the indices i and j to the result array
                result.push(i) 
                result.push(j) 
            } 
        } 
    } 
    // Return the result array
    return result 


// Solution 1: Only Code
/* 
    // let result = []

    // for (let i = 0; i < nums.length; i++) {

    //     for (let j = 1 + i; j < nums.length; j++) {

    //         let addition = nums[i] + nums[j]
    //         if (addition == target) {
    //             result.push(i)
    //             result.push(j)
    //         }
    //     }
    // }

    // return result
*/ 

// Solution 2: Optimized Using Hash Map - Only Code
/* 
    const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];
    if (map.has(complement)) {
      return [map.get(complement), i];
    }
    map.set(nums[i], i);
  }
  return [];
*/ 
};