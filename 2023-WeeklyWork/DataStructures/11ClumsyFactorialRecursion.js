

//                       QUESTION
// https://leetcode.com/problems/clumsy-factorial/solutions/?q=javascript&orderBy=most_relevant



// Given 
/*
The factorial of a positive integer n is the product of all positive integers less than or equal to n.

For example, factorial(10) = 10 * 9 * 8 * 7 * 6 * 5 * 4 * 3 * 2 * 1.
We make a clumsy factorial using the integers in decreasing order by swapping out 
the multiply operations for a fixed rotation of operations with multiply '*', divide '/', add '+', 
and subtract '-' in this order.

For example, clumsy(10) = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1.
However, these operations are still applied using the usual order of operations of arithmetic.
We do all multiplication and division steps before any addition or subtraction steps, and 
multiplication and division steps are processed left to right.

Additionally, the division that we use is floor division such that 10 * 9 / 8 = 90 / 8 = 11.

Given an integer n, return the clumsy factorial of n.

*/ 

/*  
    EXAMPLE 1: 
    Input: n = 4
    Output: 7
    Explanation: 7 = 4 * 3 / 2 + 1

    
    EXAMPLE 2: 
    Input: n = 10
    Output: 12
    Explanation: 12 = 10 * 9 / 8 + 7 - 6 * 5 / 4 + 3 - 2 * 1


    EXAMPLE 3: 


Constraints:    

--    [ 1 <= n <= 104  ]

    */ 

/*----------------------- SOLUTION  ----------------------  */

/**
 * @param {number} N
 * @return {number}
 */
var clumsy = function(N) {
    let root = N
    let currentOperand = 'multiply'
    let solution = N
    let activeInt = N

    while(N >= 2) {
      switch(currentOperand){
        case 'multiply':
          activeInt = N
          activeInt = activeInt * (N - 1)
          currentOperand = 'divide'
          break
        case 'divide':
          activeInt = Math.floor(activeInt / (N - 1))
          if(N > root - 3){
            solution = activeInt
          } else {
            solution = solution - activeInt
          }
          activeInt = N - 1
          currentOperand = 'add'
          break
        case 'add':
          solution = solution + N - 1
          currentOperand = 'subtract'
          break
        case 'subtract':
          if(N <= 3) {
            solution = (solution - (N - 1))
          }
          currentOperand = 'multiply'
          break
      } 
      N = N - 1
    }
    return solution
}


/*------------------- END OF SOLUTION  -------------------  */

/* */

/*                          FOLLOW UP                        */ 
/* 
Follow Up: 

--------------------------------------------------------------------------
*/ 