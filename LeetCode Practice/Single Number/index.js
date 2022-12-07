/*
                QUESTION 
*/ 

/*
Given a non-empty array of integers nums, 
every element appears twice except for one. 
Find that single one.

You must implement a solution with a linear runtime complexity 
and use only constant extra space.
 
*/ 


/*
                EXAMPLES 
*/ 

/*
1.
Input: nums = [2,2,1]
Output: 1
*/ 

/*
2.
Input: nums = [4,1,2,1,2]
Output: 4
*/ 

/*
3.
Input: nums = [1]
Output: 1
*/

/*
                CONSTRAINTS 
*/ 

/*
1.  1 <= nums.length <= 3 * 104
2. -3 * 104 <= nums[i] <= 3 * 104
3. Each element in the array appears twice 
    except for one element which appears only once.
*/ 


/*
                SOLUTION 
*/ 

/*
1. Create a variable to run function 
2. Create count for each number and if every number has 2 keep counting 
3. If else returns 1 count then return that number in the array
 
*/ 

 var singleNumber = function(nums) {
    let count  = nums[0]

    for(let i = 1; i < nums.length; i++) {
      count = count^nums[i]; 

    }
    return count; 
};

console.log(singleNumber([4,1,2,1,2,4,5]))

