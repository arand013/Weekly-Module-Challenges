/* 
In this challenge, you are required to calculate and print the 
sum of the elements in an array, keeping in mind that some of
those integers may be quite large.

Function Description

Complete the aVeryBigSum function in the editor below. It must return the sum of all array elements.

aVeryBigSum has the following parameter(s):

int ar[n]: an array of integers .
Return

long: the sum of all array elements
Input Format

The first line of the input consists of an integer .
The next line contains  space-separated integers contained in the array.

Output Format

Return the integer sum of the elements in the array.

Constraints

1 <= n <= 10
0 <= ar[i] <= 10^10(power)

Sample Input

1: 
5
1000000001 1000000002 1000000003 1000000004 1000000005

Output: 
5000000015
*/





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
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */


// Create a function to add an array; w/ parameter of array 
function aVeryBigSum(ar) {
    //1: init variables; result [] to attach return output; 
    let result = 0

    //2: Write a loop; for to init (let i = 0; i < ar.length; i++) to 
    //   add a number in the array(along with i values in the array) to 
    //   the result array (i is = to numbers in a given array)
    for(let i = 0; i < ar.length; i++) {
        result += ar[i];
    }


    //3: return the result array
    return result; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = aVeryBigSum(ar);

    ws.write(result + '\n');

    ws.end();
}




function aVeryBigSum(ar) {
   
    let result = 0
    for(let i = 0; i < ar.length; i++) {
        result += ar[i];
    }
    return result; 
}