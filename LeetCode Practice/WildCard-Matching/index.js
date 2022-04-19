// Wild Card Matchin         CHALLENGE QUESTION

// Given an input string (s) and a pattern (p), 
// implement wildcard pattern matching with
// support for '?' and '*' where:

// '?' Matches any single character.
// '*' Matches any sequence of characters (including the empty sequence).
// The matching should cover the entire input string (not partial).

// ------------------------------
// Example 1:

// Input: s = "aa", p = "a"
// Output: false
// Explanation: "a" does not match the entire string "aa".
// ------------------------------

// ------------------------------
// Example 2:

// Input: s = "aa", p = "*"
// Output: true
// Explanation: '*' matches any sequence.
// ------------------------------

// ------------------------------
// Example 3:

// Input: s = "cb", p = "?a"
// Output: false
// Explanation: '?' matches 'c', but the second letter is 'a', which does not match 'b'.
// ------------------------------

// ------------------------------
// Constraints:

// 0 <= s.length, p.length <= 2000
// s contains only lowercase English letters.
// p contains only lowercase English letters, '?' or '*'.
// ------------------------------ 



              // ------------------------------ //
                        // START CODE //


// UNDERSTAND
// - This is a dynamic programming question Involving ( RECURSION )
// -  Because this question ask is to compate two sets fo stings 
// - Then return a " ? " or " * " if a certianf criteria is met 
// - OR return False if on criteria is met

// - IF to understand the question then find out if it is RECURSIO / DYNAMIC programming by 
// Noting is there a possibility for Bottomo UP approach. 
// IF yes the you can also you TOP to BOTTOM


// DIAGRAM
// == ( Means TRUE)      != ( Means NOT TRUE)




//                                  S = 'xxxx'             P = 'xxxx'
//                               /               |                        \
//     P is a Character (char)                  P is a ' ? '               P is a ' * '
//    /                \                           |                        /     |        \
//   S[i] == P[j]     S[i] != P[j]              S = 'xx{i}x'
//     /                  \                     P = 'xx{j}x'                1) Match 1 characters 
// Loop iterates  |      FALSE                  
//      -->       |                              i = i - 1                      i = i - 1
//   S = 'xx{i}x' |                              j = j - 1                      j = j - 1                
//   P = 'xx{j}x' |                                                         2) Match Sequence Characters



// PSUEDOCODE

// CODE


var isMatch = function(s, p) {
    
};