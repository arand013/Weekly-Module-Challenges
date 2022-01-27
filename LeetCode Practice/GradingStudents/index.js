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
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

/*
 * UNDERSTAND: 
 * 
 * GIVEN an array of (grades # ) from 0 to 100; 
 * there is 3 constraints in regards to rounding 
 * 
 * GOAL: Return rounded passing grades over 40+ 
 * 
 * Constraints: 
 * 1) Round up if (grade is other than 3 numbers away and is greater than 38) 
 * round up to the next multiple of 5
 * 2) Do not round is grade is lower than 37 
 * Round 
 * 3) Any failing grade do not return; 
 * 4) if the number is 3 numbers away from a multiple of 5 
 *      then do not round up leave and return as is.
 * 
 * Space Complexity: 0(n)
 * Time complexixy: 0(log(n))
 * Base case: # range from 0 to 100 
 *             NO - Numbers 
 *             limited list of student grades 
 * 
 * DIAGRAM 
 * INPUT: 
 *           ID     OG GRADE    FINAL GRADE
 * EX 1        1        74          75
 *             2        67          67
 *             3        38          40
 *             4        32          33
 * 
 * OUTPUT: 75, 67 
 * 
 * 
 *            ID     OG GRADE    FINAL GRADE
 * EX 2        1        83          83
 *             2        60          60
 *             3        34          34
 *             4        32          32
 *             5        87         90
 * 
 * OUTPUT: 83, 60, 90
 * 
 * 
 * PSUEDEOCODE: 
 * 1: WRITE A FUNCTION gradingStudents (W/ PARAMETER grades)
 * 2: Init variables: such as( result; grades length; )
 * 3: Initiate a loop ( for loop to initiate search; if 
 *    and else if statments to contain iteration of
 *    constraints) 
 * 4: Return the function result (call it back)
 * 
 */
//1: WRITE A FUNCTION gradingStudents (W/ PARAMETER grades)
function gradingStudents(grades) {
    
 //2: Init variables: such as( result; grades length; ) 
    let result = []
      
//3: Initiate a loop ( 3 constraint begin with easiest)
    for( let i = 0; i < grades.length; i++){ 
    
        //  Do not round is grade is lower than 37
        if(grades[i] < 38){ 
            result.push(grades[i]);
        }
        // Round up if (grade is other than 3 numbers away and 
        // is greater than 38(passes the send part of this in code above)) 
        else if(((Math.ceil(grades[i]/5)*5) - grades[i]) < 3) {
            result.push(Math.ceil(grades[i]/5)*5); 
        }
        // If the number is 3 numbers away from a multiple of 5 
        //then do not round up leave and return as is.
        else if(((Math.ceil(grades[i]/5)*5) - grades[i]) >= 3){
            result.push(grades[i]);  
        }
    }
    //4: Return the function result (call it back)
    return result

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const gradesCount = parseInt(readLine().trim(), 10);

    let grades = [];

    for (let i = 0; i < gradesCount; i++) {
        const gradesItem = parseInt(readLine().trim(), 10);
        grades.push(gradesItem);
    }

    const result = gradingStudents(grades);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
