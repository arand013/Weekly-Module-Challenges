/* Given an array of integers, calculate the ratios of 
its elements that are positive, negative, and zero. 
Print the decimal value of each fraction on a new line
6 with  places after the decimal.

Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

Example

There are  elements, two positive, two negative and one zero. Their ratios are ,  and . Results are printed as:

0.400000
0.400000
0.200000
Function Description

Complete the plusMinus function in the editor below.

plusMinus has the following parameter(s):

int arr[n]: an array of integers
Print
Print the ratios of positive, negative and zero values in the array. Each value should be printed on a separate line with  digits after the decimal. The function should not return a value.

Input Format

The first line contains an integer, , the size of the array.
The second line contains  space-separated integers that describe .

Constraints



Output Format

Print the following  lines, each to  decimals:

proportion of positive values
proportion of negative values
proportion of zeros
Sample Input

STDIN           Function
-----           --------
6               arr[] size n = 6
-4 3 -9 0 4 1   arr = [-4, 3, -9, 0, 4, 1]
Sample Output

0.500000
0.333333
0.166667
Explanation

There are  positive numbers,  negative numbers, and  zero in the array.
The proportions of occurrence are positive: , negative:  and zeros: .


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
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */


/* UNDERSTAND
 * Given a random ordered arrray, from 1 to 100 values
 * Create a fucntion w/ paramters ( arr, pos, neg and zero ) 
 * Return the proportion of the given array values in % of decimals     values with 6 decimals places for +, - and zero. 
 * 
 * ? are their, duplicate allowed: Yes 
 * ? max number of values given : 100 
 * ? space comepllexity: 0(n)
 * ? time complexity: 0(n)
 *
 * Create a fucntion w/ paramters ( arr, pos, neg and zero ) 
 * 
 * Init variables +, -, zero calue count
 * 
 * Write a loop to define +, - and zero values
 * 
 * Return the output of +, - and zero value in a proportion using 5 decimals places to thr right. 
 * 
 * DIAGRAM 
 * 
 * EX : 1
 * Input: arr[3,2,1,0,-1, -2] 
 * 
 * Output (% of +, - and zero):
 * 0.50000
 * 0.33333
 * 0.16667
 * 
 * EX : 2
 * * Input: arr[10, 10, 2,-1, ,3,-1, -2, -9] 
 * 
 * Output (% of +, - and zero):
 * 0.50000
 * 0.50000
 * 0.0
 * 
 * 
 * PSUEDOCODE
 * 1: Create function w/ paramters(arr)
 * 2: init variables: (pos count, negative count, zero count)
 * 3: write a loop to iterate the array length and then increase            depending on which value its deemed option( +, -, 0)
 * 4: return/ print the output in proportion of 6 decimal places       
 * 
 * 
 * 
 */


//Create function w/ paramters(arr)
function plusMinus(arr) {
    // init array length variable 
    let len = arr.length
    
    
    // init variables: (pos count, negative count, zero count)
    let pos = 0;
    let neg = 0;
    let zero = 0; 
    
    //write a loop to iterate the array length
    for(let i = 0; i < arr.length; i++) {
        
        // then increase depending on which value its deemed option         ( +, -, 0)
        if (arr[i] > 0) {
            pos++;
        }
        else if (arr[i] < 0) {
            neg++ 
        }
        else if (arr[i] === 0) {
            zero++ 
        }
    //return Math.proportion of pos / arr.length, neg / arr.length,               zero/ arr.length 
    let FractionOfPostive = pos / len;
    let FractionOfNegative = neg / len;
    let FractionOfZero = zero / len;
    
    return FractionOfPostive, FractionOfNegative, FractionOfZero;
    }
}

function main() {
    const n = parseInt(readLine().trim(), 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    plusMinus(arr);
}

