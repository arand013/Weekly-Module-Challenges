// https://leetcode.com/problems/two-sum/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let result = []



    for (let i = 0; i < nums.length; i++) {

        for (let j = 1 + i; j < nums.length; j++) {

            let addition = nums[i] + nums[j]
            if (addition == target) {
                result.push(i)
                result.push(j)
            }
        }
    }

    return result

//     const map = new Map();
//   for (let i = 0; i < nums.length; i++) {
//     const complement = target - nums[i];
//     if (map.has(complement)) {
//       return [map.get(complement), i];
//     }
//     map.set(nums[i], i);
//   }
//   return [];



};