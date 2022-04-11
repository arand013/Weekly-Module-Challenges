/* 
Given a fixed-length integer array, arr, 



*/

//Quadtratic Solution
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

//Linear Solution
function duplicateZerosLinear(arr) {
    let initialLength = arr.length;
    let result = [];
    let i = 0; 

    while (i < arr.length) {
        result.push(arr[i]);

        if (arr.length === initialLength) {
            break;
        } 
        

        if (arr[i] === 0) {
            result.push(0);
            if (result.length === initiaLength){
                break;
            }
        }
        i += 1;
    }
    console.log("Result: ", result); 
arr = result("ARR: ", arr)
};

console.log("Result: ", result); 
for (let i = 0; i <arr.length; i++) {
    arr[i] = result[i]
}

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
    -if termination is 2, return -1 
    -chppse minimum of flips
    -if minimum of flips is greater than half of the length of the arrays
*/



function minDominoRotations(tops, bots) { 
    let selectedTop = tops[0];
    let selectedBot = bots[0];
    let topFlips = 0;
    let botFlips = 0;
    let terminations = 0;


    for (let i = 0; i < tops.length; i++){

        if(tops[i] !== selectedTop) {

            if(bots[i] === selectedTop) {
                topFlips++
            } else {
                terminations++;
                break;
            }
        }
    }

    for (let i = 0; i < bots.length; i++){

        if(bots[i] !== selectedBot) {

            if(tops[i] === selectedBot) {
                botFlips++
            } else {
                terminations++;
                break;
            }
        }
    }

    if (termination === 2) {
        return -1;
    }

    if(termination === 1){
        topFlips = Math.max(topFlips, botFlips);
        botFlips = Math.min(topFlips, botFlips);
    }
    let minFlip = Math.min(topFlips, botFlips);

    return Math.min(minFlip, tops.length - minFlip);

}