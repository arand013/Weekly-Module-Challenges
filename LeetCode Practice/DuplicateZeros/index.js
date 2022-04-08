/* 
Given a fixed-length integer array, arr, 



*/


function duplicateZeros(arr) {
    let initialLength = arr.length;

    let i = 0;

    while (i < arr.length) {

        if (arr[i] === 0){
            arr.splice(i + 1, 0, 0); 
            i+=2; 
        } else { 
            i += 1
        }


    }

    while (arr.length > initialLength) {
        arr.pop();
    }
};




///////////////////////////////////////////////////////// ///
// QUESTION 2 - Dominoes

/*
Questions INFO HERE

*/ 

/* 
NOTES: 
        i
tops = [2,1,2,4,2,2]
bots = [5,2,6,2,3,2]
        j

selected Top = 2
flips = 1 

Observation: 
-Make sure not to flip more than half the length of the array
-Perform two runs 
    - set flips to 0
    - select the top 0th elment the first run 
        - iterare from 0 to end of the arrays
            -if top item matches selectedTop i++
            -if top item doesn't match selectedTop
                -if bot item matched selectedTop, flips++, i++
                -terminate iteration
    - select tht bot 0th element the second run
             -if top item matches selectedTop i++
             -if top item doesn't match selectedTop
                -if top item matched selectedTop, flips++, i++
                -otherwise, terminat iteration
*/



function minDominoRotations(tops, bottoms) { 

}