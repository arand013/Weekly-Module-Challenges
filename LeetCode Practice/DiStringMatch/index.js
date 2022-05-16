// https://leetcode.com/problems/di-string-match/

// QUESTION

/* 

A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.

Example 1:

Input: s = "IDID"
Output: [0,4,1,3,2]
Example 2:

Input: s = "III"
Output: [0,1,2,3]
Example 3:

Input: s = "DDI"
Output: [3,2,0,1]

Constraints:

1 <= s.length <= 105
s[i] is either 'I' or 'D'.
*/ 


// ANSWER----------------------------------------------------------------



// UNDERSTAND----------------------------------------------------------------
/*


Observations: 

- For "I", use the smallest number possible 
  - push smallest to result 
  - increment smallest
  - i++
- For "D", use the largest number possible 
  - push largest to result 
  - decrement largest
  - i++

- push last number to result (smallest or largest) 





*/



// DIAGRAM----------------------------------------------------------------
/*


Example 1:

Input: s = "IDID"
Output: [0,4,1,3,2]


Example 2:

Input: s = "III"
Output: [0,1,2,3]

Example 3:

Input: s = "DDI"
Output: [3,2,0,1]

      i
"IDDDI"


smallest = 2
largest = 2

result = [0,5,4,3,1,2]


     i
"IDID"

smallest = 2
largest = 2
result = [0,4,1,3,2]
*/


// PSUEDOCODE-------------------------------------------------------------
/*
Steps: 1. Create function and parameters (DiStringMatch (s, perm))
       2. Initiate variables for, (result, smallest, largest, )
       3. Write loop (for to loop and iterate thru, s.length and find smalles or largest letter to push to result)
       4. return result w/ & console.log function name
*/

// CODE

    function DiStringMatch (s) {

        const result = [];

        let smallest = 0;
        let largest = s.length;


        for(let i = 0; i < s.length; i++){
            let char = s[i];

            if (char === "I") {
                result.push(smallest);
                smallest++;
            } else {
                result.push(largest);
                largest--;
            }
        }
return result; 
    }