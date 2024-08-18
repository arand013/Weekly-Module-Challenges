// https://leetcode.com/problems/merge-strings-alternately/description/?envType=study-plan-v2&envId=leetcode-75


// This function merges two words alternately
var mergeAlternately = function (word1, word2) { 
    // Initialize an empty string to store the result
    let result = "" 
    // Initialize two counters for the two words
    let i = 0; let j = 0 
    // Loop until we've processed all characters in both words
    while( i < word1.length || j < word2.length ){ 
        // If we haven't reached the end of word1, add the current character to the result
        if(i < word1.length ){ 
            result += word1[i] 
            i++ 
        }         
        // If we haven't reached the end of word2, add the current character to the result
        if(j < word2.length){ 
            result += word2[j] 
            j++ 
        } 
    } 
    // Return the merged string
    return result 
};