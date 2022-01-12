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
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

// Init function w/ parameters 
function compareTriplets(a, b) {
    // init variables 
    let alicePoint = 0;
    let bobPoint = 0;
    
    // create a loop to iterate and compare the various              indexes of the two arrays
    for(let i = 0; i < a.length; i++) 
    {   
        if(a[i]>b[i]){
        alicePoint += 1
        
    }else if(b[i]>a[i]) {
        bobPoint += 1
    }
    }
    
    let result = []; 
    
    // push array point to result array 
    result.push(alicePoint)
    result.push(bobPoint)
    
    // return final result
    console.log(result);
    return result; 
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const a = readLine().replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));

    const b = readLine().replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));

    const result = compareTriplets(a, b);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
