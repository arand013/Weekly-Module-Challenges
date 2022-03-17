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
    //CALLBACK
    return value;
  }
  

////////////////////////////////////////////////////////////
//             QUESTION 3


/*
 * ## Square Root
 *
 * *Given an positive integer, find the square root.*
 *
 * **Parameters**
 * Input: value {Integer}
 * Output: {Float}
 *
 * **Constraints**
 * Do not use a native built in method.
 * Ensure the result is accurate to 6 decimal places (0.000001)
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `4 --> 2.0`
 * `98 --> 9.899495`
 * `14856 --> 121.885192
 */


function squareRoot(i) {
    // CONSTRAINT
    if (i === 0 || i === 0) {
        return i;
    }

    // VARIABLES ( input i, output result, )
    let low = 0;
    let high = i;
    let result = 0;
    let sq = 0;
    let mid = 0;

    // LOOP
    while (low <= high) {
        mid = (low + high) / 2;
        sq = mid * mid;

        if (sq == 1) {
            return mid;
        } else if (sq < 1){
            low = mid + .0000001;
            result = mid;
        } else {
            high = mid - .0000001;
        }
    }
    //CALLBACK
    return result.toFixed(6);

}

////////////////////////////////////////////////////////////
//             QUESTION 4


/*
 * ## Greater Values
 *
 * *Given an sorted array of integers, and a target value return the number of values greater the target.*
 *
 * **Parameters**
 * Input: arr {Array of Integers}
 * Input: target {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[1, 2, 3, 5, 5, 7, 9, 10, 11], 5 --> 4`
 * `[1, 2, 3], 4 --> 0`
 * `[1, 10, 22, 59, 67, 72, 100], 13 --> 5`
 *
 */


function greaterValues(arr, target) {
    // VARIABLES
    let start = 0; 
    let end = arr.length;
    let midpoint;

    
    // LOOP
    while( start < end) {
                            //   EX:           10 - 0 / 2 = 5 this is the midpoint of the array
        midpoint = parseInt(start + parseInt((end - start) / 2));

        // if the array (parameter MIDPOINT) is less than or = to target LOOP
        if(arr[midpoint] <= target) {
           // 0 = 5 + 1
            start = midpoint + 1;
        } else {
            end = midpoint;
        }
    }


    // CALLBACK 
    return arr.length - start;
    
}  


////////////////////////////////////////////////////////////
//             QUESTION 5



/*
 * ## Sorted and Rotated Array [Extra Credit]
 * *Given a array that is sorted and rotated, find out if a target value exists in the array.*
 *
 * An sorted array is rotated by taking an unknown amount of values from the beginning and placing it at the end.
 *
 * `[3, 4, 5, 1, 2]` is rotated left by 2.
 * `[99, 14, 25, 78, 93]` is rotated to the right by 1.
 *
 * **Parameters**
 * Input: arr {Array}
 * Output: {Boolean}
 *
 * **Constraints**
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `[35, 46, 79, 102, 1, 14, 29, 31], 46 --> true`
 * `[35, 46, 79, 102, 1, 14, 29, 31], 47 --> false`
 * `[7, 8, 9, 10, 1, 2, 3, 4, 5, 6], 9 --> true`
 */


function rotatedArraySearch(nums, target) {
    // YOUR WORK HERE
  }
  

  
  



////////////////////////////////////////////////////////////
//              QUESTION 6



/*
 * ## Multiplication Using Russian Peasant [Extra Credit]
 *
 * *Given two positive integers, return its product using Russian Peasant method of multiplication*
 *
 * Read up on how to apply the Russian Peasant method [here](https://en.wikipedia.org/wiki/Ancient_Egyptian_multiplication). It is also referred to as the Egyptian multiplication.
 *
 * **Parameters**
 * Input: a {Integer}
 * Input: b {Integer}
 * Output: {Integer}
 *
 * **Constraints**
 * Assume a <= b, and the value of a is N.
 *
 * Time: O(logN)
 * Space: O(1)
 *
 * **Examples**
 * `487, 734 --> 357458`
 * `846, 908--> 768168`
 */

function multiplicationRussianPeasant(a,b) {

}


  
  
  