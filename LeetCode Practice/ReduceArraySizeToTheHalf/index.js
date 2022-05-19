// QUESTION Reduce Array Size to The Half

/*
You are given an integer array arr. 
You can choose a set of integers and remove all the 
occurrences of these integers in the array.

Return the minimum size of the set so that at least half of 
the integers of the array are removed.


*Example 1:
Input: arr = [3,3,3,3,5,5,5,2,2,7]
Output: 2
Explanation: Choosing {3,7} will make the new array [5,5,5,2,2]
    which has size 5 (i.e equal to half of the size of the old array).

Possible sets of size 2 are {3,5},{3,2},{5,2}.
Choosing set {2,7} is not possible as it will make the
    new array [3,3,3,3,5,5,5] which has a size greater than 
    half of the size of the old array.


*Example 2:
Input: arr = [7,7,7,7,7,7]
Output: 1
Explanation: The only possible set you can choose is {7}. 
This will make the new array empty.


*Constraints:
-| 2 <= arr.length <= 105
-| arr.length is even.
-| 1 <= arr[i] <= 105
*/

//UNDERSTAND
/* 

Want to count how many number in the array using 0 based indexes
Sort by count of repeating number from most repeated numbers to lowest
Delete 2 numbers from the array, to get a half sized array 
Initiate a map to hold the sort





1) create a function w/ parameters (WORD, WORD1, WORD2) 
2) create variables,
3) write a loop 
4) return, all the triplets 
*/

//DIAGRAM
/* 
*/

//PSUEDOCODE






// ANSWER


//CODE

function minSetSize(arr) {
    let map = {}; 

    arr.forEach(num => { 
        if(map[num] === undefined) {
            map[num] = 0;
        }
        map[num]++;
    });
    const n = arr.length;
    let cur = n, res = 0;

    const list = Object.keys(map).sort((a,b) => map[b]-map[a]);

    for(let i = 0; i < list.length; i++ ) {
        const num = list[i]; 
        cur -= map[num];
        res++; 
        
        if(cur <= n/2) {
            return res; 
        }
    }
}; 