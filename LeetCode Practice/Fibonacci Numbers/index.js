// The Fibonacci numbers        CHALLENGE QUESTION





// The Fibonacci numbers, 
// commonly denoted F(n) form a sequence, called the Fibonacci sequence,
// such that each number is the sum of the two preceding ones, 
// starting from 0 and 1. 

//That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

// ------------------------------
// EXAMPLE 1:  

// Input: n = 2
// Output: 1
// Explanation: F(2) = F(1) + F(0) = 1 + 0 = 1.
// ------------------------------


// ------------------------------
// EXAMPLE 2:  

// Input: n = 3
// Output: 2
// Explanation: F(3) = F(2) + F(1) = 1 + 1 = 2.
// ------------------------------


// ------------------------------
// EXAMPLE 3:  

// Input: n = 4
// Output: 3
// Explanation: F(4) = F(3) + F(2) = 2 + 1 = 3.
// ------------------------------

// ------------------------------
// CONSTRAINTS:  

// 0 <= n <= 30
// ------------------------------





// ------------------------------ //
            // START CODE //

    function fibSpace(n) {
        let prev2 = 0;
        let prev1 = 1;
        let curr;
        
        if (n <= 1) return n;
        
        for (let i = 2; i <= n; i++) {
            curr = prev1 + prev2;
            // Shifting
            prev2 = prev1;
            prev1 = curr;
        }
        return curr;
        }

/*
Time Complexity: O(n)

Therefore, the time complexity is proportional to the number of iterations, which is n.
Space Complexity: O(1)

The function uses a constant amount of memory to store the prev2, prev1, and curr variables.
These variables
*/ 












// UNDERSTAND
// - This is a dynamic programming question Involving ( RECURSION )
// - We can use MEMOIZATION or TABULATION 
// - MEMOIZATION will use TOP -> DOWN
    // -SPACE: 0(N) - TIME: 2(N)

// - TABULATION will use Bottomo UP approach that invoves a Linear RECURSION METHOD
    // SPACE: 0(N) - TIME: 0(N)

// DIAGRAM



// PSUEDOCODE

// CODE