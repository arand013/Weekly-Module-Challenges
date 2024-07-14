
//                       QUESTION
// https://leetcode.com/problems/get-maximum-in-generated-array/description/


// You are given an integer [n]. A 0-indexed integer array [nums] of length [n + 1] is generated in the following way:

// [nums[0] = 0]
// [nums[1] = 1]
// [nums[2 * i] = nums[i] when 2 <= 2 * i <= n]
// [nums[2 * i + 1] = nums[i] + nums[i + 1] when 2 <= 2 * i + 1 <= n]

// Return the [maximum] integer in the array [nums​​​]. 


/*  
    EXAMPLE 1: 
    Input: n = 7
    Output: 3

        Explanation: According to the given rules:
        nums[0] = 0
        nums[1] = 1
        nums[(1 * 2) = 2] = nums[1] = 1
        nums[(1 * 2) + 1 = 3] = nums[1] + nums[2] = 1 + 1 = 2
        nums[(2 * 2) = 4] = nums[2] = 1
        nums[(2 * 2) + 1 = 5] = nums[2] + nums[3] = 1 + 2 = 3
        nums[(3 * 2) = 6] = nums[3] = 2
        nums[(3 * 2) + 1 = 7] = nums[3] + nums[4] = 2 + 1 = 3
        Hence, nums = [0,1,1,2,1,3,2,3], and the maximum is max(0,1,1,2,1,3,2,3) = 3.

    
    EXAMPLE 2: 
    Input: n = 2
    Output: 1

        Explanation: According to the given rules, nums = [0,1,1]. 
        The maximum is max(0,1,1) = 1.

    EXAMPLE 3: 
    Input: n = 3
    Output: 2
        Explanation: According to the given rules, nums = [0,1,1,2]. 
        The maximum is max(0,1,1,2) = 2.


Constraints:    

--   [ 0 <= n <= 100 ]

    */ 

/*----------------------- SOLUTION  ----------------------  */

const getValue = (n) => {
        if (n === 0) return 0;
        if (n === 1) return 1;

        if (n % 2) {
            const newNumber = (n - 1)/2;
            return getValue(newNumber) + getValue(newNumber + 1);
        } else {
            return getValue(n/2);
        }
     }
    var getMaximumGenerated = function(n) {
        let output = 0;

        for (let i = 1; i <= n; i++) {
            output = Math.max(output, getValue(i))
        }

        return output;
    };

/*------------------- END OF SOLUTION  -------------------  */

/* */

/*                         ALTERNATE SOLUTIONS                      */ 
/* 
Solution 1: Recursion
 * @param {number} n
 * @return {number}


    // const getValue = (n) => {
    //     if (n === 0) return 0;
    //     if (n === 1) return 1;

    //     if (n % 2) {
    //         const newNumber = (n - 1)/2;
    //         return getValue(newNumber) + getValue(newNumber + 1);
    //     } else {
    //         return getValue(n/2);
    //     }
    //  }
    // var getMaximumGenerated = function(n) {
    //     let output = 0;

    //     for (let i = 1; i <= n; i++) {
    //         output = Math.max(output, getValue(i))
    //     }

    //     return output;
    // };

--------------------------------------------------------------------------


Solution 2: Memoization (optimize)
/*
 * @param {number} n
 * @return {number}

    // const temp = [0, 1];
    // const getValue = (n) => {
    //    if (n === 0) return 0;
    //    if (n === 1) return 1;

    //    if (n % 2) {
    //        const newNumber = (n - 1)/2;
    //        return temp[newNumber] + temp[newNumber + 1];
    //    } else {
    //        return temp[n/2];
    //    }
    // }
    // var getMaximumGenerated = function(n) {
    //    let output = 0;

    //    for (let i = 1; i <= n; i++) {
    //        temp[i] = getValue(i);
    //        output = Math.max(output, temp[i]);
    //    }

    //    return output;
    // };


// Resources: https://leetcode.com/problems/get-maximum-in-generated-array/solutions/2846660/js-faster-than-100-easy-solution-and-optimize-run-time/ 
*/ 