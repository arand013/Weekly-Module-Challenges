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
 * Complete the 'compressedString' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING message as parameter.
 */

/* UNDERSTAND
 * GOAL: Complete the 'compressedString' function below.
 * RETURN: compressed form of message to add integer for repeating 
 *          characters
 * Base Case: Given a string of characters; 
 *              
 * Edge cases: Alphabet characters; numbers cannot be given; if no 
 *             repeats the string is returned as original; 
 *              group consescutive occurences to get compressed
 *             ? mixed upper and lowercase
 * 
 * DIAGRAM: 
 * EX:1     INPUT: "aaab"    EX:2      INPUT: "bbabboon" 
 *          OUTPUT: "a3b"              OUTPUT: "b2ab3o2n"
 * 
 * EX:3     INPUT: "canned"
 *          OUTPUT: "can2ed"
 * 
 *
 * 
 */
/*
* PSUEDOCODE
* 1: Create a function: 
* 2: Init variables, establish a count
* 3: Write a loop 
* 4: Return output
 */
function compressedString(message){
    // init variables to keep message in a string; split the string 
    let msgString = ""
    let msgArray = message.split("")
    
    // Write a loop to iterate thru; message length parameter, init count &
    // current variable
    for(let i = 0; i < msgArray.length; i++){
        
        let count = 1;
        let current = msgArray[i];
        
          // iterate and increase count for repeated letter then 
         // keep iterating
        while(i < msgArray.length - 1 && msgArray[i] === msgArray[i +1]){ 
            count++
            i++
        }
          // if count is = to 1  then add msg string to 
        if (count === 1){
            msgString += current
        } else {
            msgString += current + count
        } 
    }
         // return; a compressed string using inetergers for repeated
        return msgString;
}
