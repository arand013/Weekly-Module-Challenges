
//                       QUESTION

/*

Prompt

Implement binary search on an array.
Return the index of the value if found and -1 otherwise.
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

function binarySearch(data, k) {
// Inclusive starting index
let start = 0;
// Exclusive ending index
let end = data.length;


// The algorithm continues until we find what we're
// looking for OR we run out of places to look. If
// end greater than start, then we have at least one
// more place to check.
while (start < end) {
  // Look in the middle between the start and end.
  const mid = Math.floor((start + end) / 2);
  const value = data[mid];


  if (value === k) {
    return mid;
  } else if (value < k) {
    start = mid + 1;
  } else {
    end = mid;
  }
}
return -1;
  }

  
/*------------------- END OF SOLUTION  -------------------  */
  
  /* */
  
  /*                          FOLLOW UP                        */ 
  /* 
  Follow Up: 
  
  --------------------------------------------------------------------------
  */ 