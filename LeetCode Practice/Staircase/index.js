/*
Staircase detail

This is a staircase of size : n = 4

   #
  ##
 ###
####
Its base and height are both equal to . It is drawn using # symbols and spaces. The last line is not preceded by any spaces.

Write a program that prints a staircase of size .

Function Description

Complete the staircase function in the editor below.

staircase has the following parameter(s):

int n: an integer
Print

Print a staircase as described above.

Input Format

A single integer, n , denoting the size of the staircase.

Constraints

0 < n <= 100

Output Format

Print a staircase of size  using # symbols and spaces.

Note: The last line must have  spaces in it.

Sample Input

6 
Sample Output

     #
    ##
   ###
  ####
 #####
######
Explanation

The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .

n = 6

*/




'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */


/* GOAL: Print a staircase 
 * INPUT: Value = to size of staircase hieght
 * OUTPUT: Return, Array of (#) stacked to value given
 *
 * Base Case: - numbers = dont' build; string; dont
 * build. 
 * Edge Cases: 
 * Constraints: 0 < n <= 100
 * The function accepts INTEGER n as parameter.
 * 
 * Steps: 
 * Create function
 * Init variables
 * Write a loop to. print 
 * Return staircase
 */

// 1: Create staircase funcntion w/ parameter n
function staircase(n) {
      // 2: Init outer variables to interpret n into 
     // a integer of steps
    let steps = parseInt(n);
    
       // 3: : Write a loop to set i = 0 & iterate length of (n) or now (steps) up, (i = machine position)
    for(let i = 0; i++ < steps;){
         // 4: Init inner loop variables to interpret (steps - i), 
         //(spaces(n-i)) & (result)
        let result = ' ';
        let spaces = steps - i; 
        
        for(let j = spaces; j--;){
            result += ' ';
        }
        for(let j = i; j--;){
            result += '#'
        }
    //4: Return staircase with console.log(result)
    console.log(result);
    }
}


function main() {
    const n = parseInt(readLine().trim(), 10);

    staircase(n);
}
