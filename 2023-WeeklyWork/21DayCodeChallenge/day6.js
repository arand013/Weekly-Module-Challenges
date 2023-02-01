

//                       QUESTION

/*
Given a matrix that is monotonically increasing 
along all rows and columns, as well as a value, k, 
return true if the value exists in the matrix and false otherwise.
*/


/*  
EXAMPLE 1: 

Output:
Return true if the value exists in the matrix and false otherwise.

*/

    

/*
Constraints:    

--    [  ]
--    [  ]

*/ 

/*----------------------- SOLUTION  ----------------------  */


function findInMonotonic(matrix, k) {
  const nrows = matrix.length;
  if (nrows === 0) return false;


  // Start at a corner that is the end of one dimension
  // and start of another.
  let row = nrows - 1;
  let col = 0;
  const ncols = matrix[row].length;


  while (row >= 0 && col < ncols) {
    const value = matrix[row][col];
    if (value === k) {
      // We found the target value!
      return true;
    } else if (value < k) {
      // If the k is greater than this value, then it HAS
      // to be at least one column over.
      col++;
    } else {
      // If the k is less than this value, then it HAS
      // to be at least one row up.
      row--;
    }
  }


  return false;
}
/*------------------- END OF SOLUTION  -------------------  */
  
  /* */
  
  /*                          FOLLOW UP                        */ 
  /* 
  Follow Up: 
  
  --------------------------------------------------------------------------
  */ 