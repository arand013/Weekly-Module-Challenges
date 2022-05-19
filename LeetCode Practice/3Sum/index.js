// QUESTIONS

/*
Given an integer array nums, 
return all the triplets [nums[i], nums[j], nums[k]] 
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:
Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]

Example 2:
Input: nums = []
Output: []

Example 3:
Input: nums = [0]
Output: []
 

Constraints:
0 <= nums.length <= 3000
-105 <= nums[i] <= 105

*/


// ANSWERS


//UNDERSTAND
/* 
1) create a function w/ parameters (array of integers) 
2) create variables,
3) write a loop 
4) return, all the triplets 
*/
//DIAGRAM
/* 
*/
//PSUEDOCODE
//CODE


function threeSum(array) {
    array.sort((a,b) => a - b);

    const triplets = [];

    for(let i = 0; i < array.length -2; i++) {
        if(array[i] != array [i-1]) { 
            
            let left = i + 1;
        let right = array.length - 1; 
        
            while (left < right) { 
                const currentSum = array[i] + array[left] + array[right];
                if (currentSum === 0) {
                    triplets.push([array[i], array[left], array[right]]);
                    while(array[left] == array[left + 1]) left ++;
                    while(array[right] == array[right - 1]) right ++;
                    left++;
                    right--;

                } else if(currentSum < 0) {
                    left ++;
                } else if(currentSum > 0) {
                    right --;
                }
            }
        }
    }
console.log(triplets)
return triplets;
}