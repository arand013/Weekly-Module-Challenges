/*                  QUESTION

When a contiguous block of text is selected in a PDF viewer, 
the selection is highlighted with a blue rectangle. In this PDF viewer,
each word is highlighted independently. 
For example:

PDF-highighting.png

There is a list of 26 character heights aligned by index to their letters. 
For example, 'a' is at index 0 and 'z' is at index 25. 
There will also be a string. Using the letter heights given, determine the area of the rectangle highlight in mm^2  
assuming all letters are 1mm  wide.

https://www.hackerrank.com/challenges/designer-pdf-viewer/problem?utm_campaign=challenge-recommendation&utm_medium=email&utm_source=7-day-campaign 

// ------------------------GIVEN --------------------------------

Constraints:

Function Description

Complete the designerPdfViewer function in the editor below.

designerPdfViewer has the following parameter(s):

int h[26]: the heights of each letter
string word: a string
Returns

int: the size of the highlighted area
Input Format

The first line contains  space-separated integers describing the 
respective heights of each consecutive lowercase English letter, ascii[a-z].
The second line contains a single word consisting of
lowercase English alphabetic letters.

Constraints

, where  is an English lowercase letter.
 contains no more than  letters.
*/ 

// ------------------------GIVEN --------------------------------

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
 * Complete the 'designerPdfViewer' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h
 *  2. STRING word
 */



// ------------------------SOLUTION --------------------------------
function designerPdfViewer(h, word) {
    // Write your code here
    // Create a variable to contain all Letters 
    let letters = "abcdefghijklmnopqrstuvwxyz";
    
    // Create an array variable to contain height
    let letterHeight = [];
    
    // Create a for loop to push letters into array. 
    for (let i = 0; i < word.length; i++) {
        letterHeight.push(h[letters.indexOf(word[i])]); 
    }
    
    // Create a new variable that allows you sort letter height
    let tallest = letterHeight.sort()[letterHeight.length-1]; 
    
    // Return the last variable * word.length
    return tallest * word.length

}



// ------------------------GIVEN --------------------------------

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const h = readLine().replace(/\s+$/g, '').split(' ').map(hTemp => parseInt(hTemp, 10));

    const word = readLine();

    const result = designerPdfViewer(h, word);

    ws.write(result + '\n');

    ws.end();
}
