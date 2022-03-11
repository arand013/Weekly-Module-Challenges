/*
 *  Homework - Decrease and Conquer
 *  Utilize the decrease and conquer pattern to solve these problems.
 */

/*
 * Number of Ones
 *
 * *Given a sorted bit array (values of either 0 or 1), determine the number of 1's in the array.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Output: {Integer}
 *
 * **Constraints**
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1] --> 8`
 * `[0, 0, 0] --> 0`
 * `[0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1] --> 7`
 */


function numberOfOnes(arr) {
    // Variables 
    let start = 0;
    let end = arr.length;
    let midpoint;
    
    // LOOP
    while(start < end) {
        midpoint = parseInt(start + parseInt((end - start) / 2));

        if(arr[midpoint] === 0) {
            start = midpoint + 1;
        }
        else {
            end = midpoint; 
        }
    }
    // CALLBACK 
    //( Return total #'s in array and (-) subtract it 
    //  from the the count (start) ) )
    return arr.length - start;
}


////////////////////////////////////////////////////////////
//             QUESTION 2 
/*
 * ## Closest Value
 *
 * *Given a sorted bit array of integers, and a target value, find the number in the array that is closest to the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * If there are two numbers tied for the closest value, return the lowest value.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 6 --> 5`
 * `[1, 2, 3], 8 --> 3`
 * `[1, 10, 22, 59, 67, 72, 100], 70 --> 72`
 */


function closestValue(arr, target) {
    // VARIABLES
    let start = 0;
    let closest = Infinity; 
    let value = null; 
    let end = arr.length - 1; 

    // LOOP
    while(start <= end) {
        let midpoint = parseInt(start + parseInt((end - start) / 2));
        let difference = Math.abs(target - arr[midpoint]);
        if (difference < closest) {
            closest = difference;
            value = arr[midpoint];
        }
        if(arr[midpoint] < target) {
            start = midpoint + 1;
        }
        else { 
            end = midpoint - 1;
        }
    }
    return value;
    //CALLBACK

  }
  
