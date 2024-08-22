/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {

    // variable
    let result = [];
    let largestNumber = candies.reduce((a,b) => Math.max(a,b), - Infinity); 
    
    // loop 
    for( let i = 0; i < candies.length; i++){
        
        let newCandies = candies[i] + extraCandies
        result.push(newCandies >= largestNumber)
    }
    // return result 
    return result
    };