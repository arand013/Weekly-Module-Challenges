//                       QUESTION
// https://leetcode.com/problems/median-of-two-sorted-arrays/


// Given two sorted arrays nums1 and nums2 of size m and n respectively,
// return the median of the two sorted arrays.

//The overall run time complexity should be O(log (m+n)).

/*  
    EXAMPLE 1: 
    Input: nums1 = [1,3], nums2 = [2]
    Output: 2.00000

    Explanation: merged array = [1,2,3] and median is 2.

    
    EXAMPLE 2: 
    Input: nums1 = [1,2], nums2 = [3,4]
    Output: 2.50000

    Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.


    EXAMPLE 3: 


Constraints:    

--   [ nums1.length == m ]
--    [ nums2.length == n ]
--    [  0 <= m <= 1000 ]
--    [ 0 <= n <= 1000  ]
--    [ 1 <= m + n <= 2000 ]
--    [ -10^6 <= nums1[i], nums2[i] <= 10^6 ]

*/ 

/*----------------------- SOLUTION  ----------------------  */

var findMedianSortedArrays = function(nums1, nums2) {
    const n1 = nums1.length;
    const n2 = nums2.length;
    const nMid = (n1 + n2 + 1) / 2;

    //  iterate through array1, if first number in array2 is less than the current value, move number to array 1
    for (let i = 0; i < (n1 + n2); i++) {
        const nums1curr = nums1[i];
        while (nums2.length !== 0 && nums2[0] < nums1curr) {
            nums1.splice(i, 0, nums2.shift());
            i++
        }
    }
    
    //  after going through array1, if array1 is still less than halfway, then move an additional n numbers from array2 to array1
    if (n1 < nMid) {
        const numsToAdd = Math.ceil(nMid - n1);
        for (let i = 0; i < numsToAdd; i++) {
            const numToShift = nums2.shift();
            nums1.push(numToShift)
        }
    }
    
    // nMid is an integer, get number directly
    if ((n1 + n2) % 2 !== 0) {
        return nums1[nMid - 1]
    } else {
        // otherwise nMid ends in .5, get mean of number above and below nMid
        return (nums1[Math.floor(nMid) - 1] + nums1[Math.ceil(nMid) - 1]) / 2
    }
};
/*------------------- END OF SOLUTION  -------------------  */

/*
Resources:
https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/458115/pragmatic-javascript-solution/?q=javascript&orderBy=most_relevant
*/