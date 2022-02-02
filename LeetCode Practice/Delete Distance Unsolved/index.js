/* 

Given two strings word1 and word2, return the minimum number of steps required to make word1 and word2 the same.

In one step, you can delete exactly one character in either string.

 

Example 1:

Input: word1 = "sea", word2 = "eat"
Output: 2
Explanation: You need one step to make "sea" to "ea" and another step to make "eat" to "ea".
Example 2:

Input: word1 = "leetcode", word2 = "etco"
Output: 4
 

Constraints:

1 <= word1.length, word2.length <= 500
word1 and word2 consist of only lowercase English letters.


*/

/*
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

////////////////////////////////////////////////////////////////////////////\
//  EXPLANATION
/* 
// Base Cases/ Constraints:  


* Delete a character

* word1 has to convert to word2 then stop iterating
* any amount is possible ( return the minimum )
* word 1 and word2 consist of lowercase English letters.
* Length of words is max 500 characters
* 1 move then add it to the result 

// Edges Cases/ 

* Capital chars 
* numbers 
* words that do not contain 0 similar letters 

// Space Complexitiy:  0(2N)
// Time Complexitiy: 0(n*m)


DIAGRAM: 

EX 1: Input: word1 = "distance", word2 = "ace"
Output: 5
Explanation: 
distance -> istance (remove 'd')
istance -> stance (remove 'i')
stance -> tance (remove 's')
tance -> ance (remove 't')
ance -> ace (remove 'a')


PSUEDOCODE: 

1: Write a function w/ parameters ( word1, word2 )
2: Initiate variables ( result, word1 length, word2 length )
3: write a recursive loop 
4: return the minimum output 


*/




 var minDistance = function(word1, word2) {

    let result = 0; 
    let m = word1.length;
    let n = word2.length;
    let dp = []; 

    for(let i = 0; i < m+1; i++) {
        dp[i] = new Array(n+1).fill(0);

    }

    for(let i = 1; i <= m; i++) {
        for(let j = 1; j <= n; j++ ) {
            dp[i][j] = (word1.charAt(i-1) == word2.charAt(j-1)) 
            ? dp[i-1][j-1]+1 : Math.max(dp[i-1][j], dp[i][j-1])
        }
    }
    return m+n-2*dp[m][n]

}; 


/*
 ```var minDistance = function(word1, word2) {
  var res=0;
  var m=word1.length, n=word2.length;
  var dp=[];
  for(let i=0; i<m+1; i++){
    dp[i]= new Array(n+1).fill(0);
  }
  for(let i=1; i<=m; i++){
      for(let j=1; j<=n; j++){
          dp[i][j]= (word1.charAt(i-1) == word2.charAt(j-1))? dp[i-1][j-1]+1 : Math.max(dp[i-1][j], dp[i][j-1])
      }
  }
  return m+n-2*dp[m][n]
};

*/
