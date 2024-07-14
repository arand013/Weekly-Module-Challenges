

//                       QUESTION

/*
Given a rectangular 2D array of integers, return true if all 
rows and all columns are monotonically increasing. 
This means that every successive value along 
all rows and columns must be AT LEAST as large as what came before.

*/


/*  
EXAMPLE 1: 

    [[0, 0, 0, 1],
    [1, 1, 1, 2],
    [2, 3, 4, 5]]


Output:
    Returns true but this next one returns false.

    [[0, 0, 0, 1],
    [1, 1, 3, 2],
    [2, 3, 4, 5]] 

*/

    

/*
Constraints:    

--    [  ]
--    [  ]

*/ 

/*----------------------- SOLUTION  ----------------------  */

function isMatrixMonotonic(matrix) {
    // These two loops form a typical row-major traversal
    // over the matrix.
    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
  
  
        // Get the value at this location.
        const value = matrix[r][c];
  
  
        // If we are on a row past the first, then
        // look up one position and make sure that value
        // is not larger.
        if (r > 0 && matrix[r - 1][c] > value) {
          return false;
        }
  
  
        // If we are on a column past the first, then
        // look left one position and make sure that value
        // is not larger.
        if (c > 0 && matrix[r][c - 1] > value) {
          return false;
        }
      }
    }
  
  
    // If we didn't find any problems, then return true.
    return true;
  }
/*------------------- END OF SOLUTION  -------------------  */
  
  /* */
  
  /*                          FOLLOW UP                        */ 
  /* 
  Follow Up: 
  
  --------------------------------------------------------------------------
  */ 