

//                       QUESTION

/*
Given a string, return true if the letters can be 
re-arranged to make a palindrome using every letter. 
Otherwise, return false.
*/


/*  
EXAMPLE 1: 

Otherwise, return false.
*/

    

/*
Constraints:    

--    [  ]
--    [  ]

*/ 

/*----------------------- SOLUTION  ----------------------  */

function isPalindromeAnagram(word) {
    // Initialize a dictionary (hashtable) to keep track of the
    // count of each letter.
    const letterCounts = {};
    // Keep track of the number of letters that have odd counts.
    let countOdd = 0;
    
  
    for (let i = 0; i < word.length; i++) {
      const letter = word[i];
  
      // If the letter hasn't been seen before, initialize
      // this bucket in the dictionary.
      if (letterCounts[letter] === undefined) {
        letterCounts[letter] = 0;
      }
  
      // Update the current count of this letter.
      letterCounts[letter]++;
  
      // If the current count for this letter is even,
      // then we must have passed through an odd count so
      // subtract one.
      if (count % 2 === 0) {
        countOdd--;
      } else {
        // The current count for this letter was even, so it is
        // now odd. Add one to the odd count.
        countOdd++;
      }
    }
  
    // The final result can be made into a palindrome if there
    // is at most one letter with an odd count. 
    return countOdd <= 1;
  }

  /*------------------- END OF SOLUTION  -------------------  */
    
    /* */
    
    /*                          FOLLOW UP                        */ 
    /* 
    Follow Up: 
    
    --------------------------------------------------------------------------
    */ 