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
  


















//     let start = 0;
//     let end = arr.length;
//     let midpoint;
  
//     while (start < end) {
//       midpoint = parseInt(start + parseInt((end - start) / 2));
//       if (arr[midpoint] === 0) {
//         start = midpoint + 1;
//       }
//       else {
//         end = midpoint;
//       }
//     }
//     return arr.length - start;
//   }
  