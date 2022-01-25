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

/*
 * Complete the 'rotateLeft' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER d
 *  2. INTEGER_ARRAY arr
 */

/* UNDERSTAND 
 * Design a funtion that can take an array[n] then given a integer 
 * [d] to rotate this array, have the function now shift all the 
 * numbers in the given array that many positions to the left; 
 * 
 * GOAL: Return an output that contains the  array (INTEGER_ARRAY)
 * in the shifted postiions. 
 * 

 ~```` 
 * Base cases: 
 * 1) array max size 100 values inside; 
 * 2) rotations are less than array.length
 * 3) given int for [d] && int for [array]
 * 
 * 
 * Edge cases: 
 * 1) ? can array take - integers 
 * 2) ? do you have to input left rotations; 
 * 3) ? or take away right rotations
 * 4) ? max size of values inside
 * 
 * constraints: 
 * time complexity: O(n) (1 loop to iterate array )
 * space complecity: O(n) (as data grows so does space equally )
 * 
 * DIAGRAM 
 *  EX 1: 
 *  INPUT               OUTPUT
 *  d = 4               
 *  1 2 3 4 5     - >   5 1 2 3 4
 * 
 * [1, 2, 3, 4, 5] 1-> [2, 3, 4, 5, 1] 2-> [3, 4, 5, 1, 2] 3-> 
 * [4, 5, 1, 2, 3] 4-> RESULT[5, 1, 2, 3, 4]
 * 
 *  EX 2: 
 *  INPUT               OUTPUT
 *  d = 10               
 *  1 2 3 4 5     - >   N/A
 * 
 *  EX 3: 
 *  INPUT               OUTPUT
 *  d = 2               
 *  1, 2, -3, 4, -5     - >   -3, 4, -5, 1, 2
 * 
 * [1, 2, -3, 4, -5] 1-> [2, -3, 4, -5, 1]  2-> 
 * RESULT [-3, 4, -5, 1, 2]
 * 
 * 
 * PSUEDOCODE 
 * 1: Create a function called rotateLeft w/ paramters ( d, arr)
 * 2: init variables 
 * 3: write loop to iterate array to the left to a maxmium of d
 * 4: Stopping when d is reached 
 * 5: Return the output array / call the function 
 * 
 */


function rotateLeft(d, arr) {
    // init vaiables (none needed)

    // write a loop w/ parameter d ( to push array( but before that shift the arr to left d--))
   while(d) {
       arr.push(arr.shift());
       d--;
   }
    
    // Return the output array
    return arr;

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(firstMultipleInput[0], 10);

    const d = parseInt(firstMultipleInput[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const result = rotateLeft(d, arr);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
