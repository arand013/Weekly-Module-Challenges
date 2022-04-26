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
 * Complete the 'dayOfProgrammer' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER year as parameter.
 */

// UNDERSTAND
/*
1. From years ranging from 1700 to 2700
2. Given a (year); find The DATE of the 256th day of the (year)
3. Print/Return the day in dd.mm.yyyy digits formula
4. Parameter (year) 
5. Constraint: 1700-2700 (year range)




// DIAGRAM 

Example 1:                  Example 2:                  Example 3: 
Input: 2017                 Input: 2016                 Input: 1800       
Output: 13.09.2017          Output: 12.09.2016          Output: 12.09.1800

// PSUEDOCODE

1) Define function and parameters 
2) Initiate variables
3) Begin Iteration Loop / Math caculations
4) return the function call

*/

// 1)
function dayOfProgrammer(year) {

// 3) 
if (year == 1918) {
// Corner Case
    return `26.09.${year}`;
} else if (year > 1918) {

// Calculating Leap year in Gregorian Calendar
const isLeapYear = (year % 4 == 0) && (year % 100 != 0) || year % 400 == 0;
return `${isLeapYear? 12 : 13}.09.${year}`; 
} else { 

// 4) 
// Calculating Leap year in Julian Calendar
    return `${year % 4 == 0 ? 12 : 13}.09.${year}`;
  };
};

















function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const year = parseInt(readLine().trim(), 10);

    const result = dayOfProgrammer(year);

    ws.write(result + '\n');

    ws.end();
}
