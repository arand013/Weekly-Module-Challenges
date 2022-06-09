//  Question 
// You are given an integer array coins representing coins of different 
// denominations and an integer amount representing a total amount of money.

// Return the fewest number of coins that you need to make up that amount. 
// If that amount of money cannot be made up by any combination of the coins, return -1.

// You may assume that you have an infinite number of each kind of coin.

/* 
// Example(s)
1:                                                  2: 
Input: coins = [1,2,5], amount = 11                 Input: coins = [2], amount = 3
Output: 3                                           Output: -1
Explanation: 11 = 5 + 5 + 1

3: 
Input: coins = [1], amount = 0
Output: 0

// LINK * https://leetcode.com/problems/coin-change/

----------- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- ----- -----

// Understanding 
1) Reverse Top Down Solutiom
    a) Find recursive relationships [ involves subtrating amount - coins] 
                                    [track # of coins ]
                                    [ the min]
    b) Find base cases [When do we need to stop]
                       [amount = 0] Valid Path / Save or Return # of coins
                       [amount < 1] INVALID Path / DONT Save or Return # of coins
                       [i = coins.length - 1 ] Stop Loop / End of Loop

2) Look for repeating subProblems 
    a) Key = Amount
    b) Value = # of Coins


// Diagram 



//PSUEDOCODE

*/
