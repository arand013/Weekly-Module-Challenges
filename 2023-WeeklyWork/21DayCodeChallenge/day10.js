
//                       QUESTION

/*

Prompt
Implement merge sort on an array.
*/


/*  
EXAMPLE 1: 


Output:


*/

    

/*
Constraints:    

--    [  ]
--    [  ]

*/ 

/*----------------------- SOLUTION  ----------------------  */

function mergeSort(data) {
    // Handle null case
    if (!data) {
      return null;
    }
  
  
    // We should return we have a single element (or no element) input array
    if (data.length <= 1) {
      return data;
    }
  
  
    // Establish our middle index for partitioning
    const middleIdx = Math.floor(data.length / 2);
  
  
    // Create left/right partitioned arrays
    const leftArr = data.slice(0, middleIdx);
    const rightArr = data.slice(middleIdx, data.length);
  
  
    // Sort left/right partitioned arrays (recursively)
    const leftSorted = mergeSort(leftArr);
    const rightSorted = mergeSort(rightArr);
  
  
    // Return merged array
    return mergeSortHelper(leftSorted, rightSorted);
  }
  
  
  function mergeSortHelper(leftArr, rightArr) {
    // Initialize array to hold our merged array elements
    const merged = [];
  
  
    // Compare each array's values (pairwise, [x] vs. [y])
    while (leftArr.length && rightArr.length) {
      merged.push(leftArr[0] > rightArr[0] ? rightArr.shift() : leftArr.shift());
    }
  
  
    // Add straggling elements to merged array (from left partition)
    while (leftArr.length) {
      merged.push(leftArr.shift());
    }
  
  
    // Add straggling elements to merged array (from right partition)
    while (rightArr.length) {
      merged.push(rightArr.shift());
    }
  
  
    // Return new merged/combined array
    return merged;
  }
  
    
/*------------------- END OF SOLUTION  -------------------  */

/* */

/*                          FOLLOW UP                        */ 
/* 
Follow Up: 

--------------------------------------------------------------------------
*/ 