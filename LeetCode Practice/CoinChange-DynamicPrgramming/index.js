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




// Diagram 



//PSUEDOCODE

*/


// TABULATION APPRAOCH TO Return how many unique ways there are to use the coins to make up that total.
// function coinChange(coins, amount) {
//     // Create a table to initiate Traversal of coins 
//     let table = new Array(amount + 1)
//     table.fill(0);
//     table[0] = 1;

//     coins.forEach( coin => {
//         for (let i = coin; i < table.length; i++) {
//             table[i] = table[i] + table[i - coin];
//         }
//     })
//     return table[table.length - 1];
// }


function coinChange(coins, amount) {
    // Create a table to initiate Traversal of coins 
    let denominations = new Array(amount + 1).fill(Infinity);
    denominations[0] = 0;

    for (let coin of coins) {
        for (let i = 0; i < denominations.length; i++) {
            if (coin <= i) {
                denominations[i] = Math.min(
                    denominations[i], denominations[i - coin] + 1
                );
            }
        }
    }
    return denominations[amount] !== Infinity ? denominations[amount] : -1;
};

/* MEMORIZATION APPRAOCH


// TABULATION APPRAOCH 
function coinChange(coins, amount) {
    // Create a cache to store possible coins possiblitites
    let cache = {};

    //
    function traverse(coins, amount) {
        for (let i = 0; i < coins.length; i++) {

        }
    }
    
    
}

return coinChange()

*/