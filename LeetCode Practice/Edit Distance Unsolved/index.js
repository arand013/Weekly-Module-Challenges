/* 

Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character
 

Example 1:

Input: word1 = "horse", word2 = "ros"
Output: 3
Explanation: 
horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e')
Example 2:

Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u')
 

Constraints:

0 <= word1.length, word2.length <= 500
word1 and word2 consist of lowercase English letters.



/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
 /*

// UNDERSTAND 
// GIVEN: 2 WORDS

// GOAL: Conversion of 1 word to the 2nd word


// Base Cases/ Constraints:  

* Insert a charcter 
* Delete a character
* Replace a character

* word1 has to convert to word2 then stop iterating
* any amount is possible ( return the minimum )
* word 1 and word2 consist of lowercase English letters.
* Length of words is max 500 characters
* 1 move then add it to the result 

// Edges Cases/ 

* Capital chars 
* numbers 
* words that do not contain 0 similar letters 

// Space Complexitiy:  0(logN)
// Time Complexitiy: 0(n)


DIAGRAM: 
EX 1 : Input: word1 = "horse", word2 = "ros"
Output: 3 

horse -> rorse (replace 'h' with 'r')
rorse -> rose (remove 'r')
rose -> ros (remove 'e') 

EX 2: Input: word1 = "intention", word2 = "execution"
Output: 5
Explanation: 
intention -> inention (remove 't')
inention -> enention (replace 'i' with 'e')
enention -> exention (replace 'n' with 'x')
exention -> exection (replace 'n' with 'c')
exection -> execution (insert 'u') 

EX 3: Input: word1 = "distance", word2 = "ace"
Output: 5
Explanation: 
distance -> istance (remove 'd')
istance -> stance (remove 'i')
stance -> tance (remove 's')
tance -> ance (remove 't')
ance -> ace (remove 'a')


PSUEDOCODE: 

1: Write a function w/ parameters ( word1, word2 )
2: Initiate variables ( result )
3: write a recursive loop 
4: return the minimum output 


*/ 


var minDistance = function(word1, word2) { 

    let m = word1.length;
    let n = word2.length;
    let result = []; 
    
    for(let i = 0; i < word1.length; i >= word2) { 
        
    }
        
        
        
    return result 
    
};




/* 
var minDistance = function(text1, text2) {
    let m = text1.length
    let n = text2.length
    let c = new Array(m+1).fill(0)
    c.forEach((x,index)=>{
        c[index] = new Array(n+1)
    })
    let b = []
    for (let j=0;j<=m;j++)
        c[j][0] = j
    for (let j=0;j<=n;j++)
        c[0][j] = j
    
    for (let i=1;i<=m;i++)
        for (let j=1;j<=n;j++) {
            var delta = 0
            if (text1[i-1] != text2[j-1])
                delta = 1
            c[i][j] = Math.min(c[i-1][j]+1,c[i][j-1]+1, c[i-1][j-1]+delta)
        }
        
    return c[m][n]
};


*/ 
