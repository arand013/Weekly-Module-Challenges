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
    let totalLen = nums1.length + nums2.length;
    let idx1 = 0;
    let idx2 = 0;
    let curr;
    let last;
  
    while (idx1 + idx2 <= totalLen/2) {
      if (curr) {
        last = curr;
      }
      let elOne = nums1[idx1];
      let elTwo = nums2[idx2];
      if (elOne === undefined) {
        curr = elTwo;
        idx2++;
      } else if (elTwo === undefined) {
        curr = elOne;
        idx1++;
      } else if (elOne < elTwo) {
        curr = elOne;
        idx1++;
      } else {
        curr = elTwo;
        idx2++;
      }
    }
    return totalLen % 2 === 0 ? (last + curr) / 2 : curr;
  };

/*------------------- END OF SOLUTION  -------------------  */

/*
Resources:
https://leetcode.com/problems/median-of-two-sorted-arrays/solutions/188312/fast-javascript/?q=javascript&orderBy=most_relevant 
*/ 