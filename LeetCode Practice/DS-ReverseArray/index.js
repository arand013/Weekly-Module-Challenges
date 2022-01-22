/* 
An array is a type of data structure that stores elements of the 
same type in a contiguous block of memory. In an array, A , of size N , 
each memory location has some unique index,  (where 0 <= i < N ), that can be referenced as A(i) or A .

GOAL: Reverse an array of integers.

Note: If you've already solved our C++ domain's Arrays Introduction challenge, you may want to skip this.

-----------------
Example 1:                  Example 2:                  
A = [1,2,3]                 A = [0,1,3]

Return [3,2,1]              Return [3,1,0]
-----------------


Function Description

Complete the function reverseArray in the editor below.

reverseArray has the following parameter(s):

int A[n]: the array to reverse
Returns

int[n]: the reversed array
Input Format

The first line contains an integer, , the number of integers in .
The second line contains  space-separated integers that make up 

*/

// PRE_TEST -------------------------- BEGINS
'use strict';

const fs = require('fs');

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
// PRE_TEST -------------------------- ENDS


// YOUR WORK BELOW 
/*
 * Complete the 'reverseArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY a as parameter.
 */

/*UNDERSTAND
GIVEN: An Array, with a length of up to 100 

RETURN: The Array in reverse order 



1. Write a function with paramter of array (a)
2. Init variables to allow result array
3. Reverse.array 
4. Return Reversed Array 

 */

// Write a function with paramter of array (a)
function reverseArray(a) {
    // Init variables to allow a to  = array; && variable newArray
    // = array.reverse
       let array = a;
       let newArray = array.reverse();

    // Return Reversed Array
    return newArray; 
}
// YOUR WORK ENDS HERE


// TEST DO NOT TOUCH
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arrCount = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = reverseArray(arr);

    ws.write(res.join(' ') + '\n');

    ws.end();
}
