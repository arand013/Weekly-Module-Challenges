var canPlaceFlowers = function(flowerbed, n) {

    // Variable to return true or false 
    let count = 0

    // loop
    for(let i = 0; i < flowerbed.length; i++){

        if(flowerbed[i] === 0 && (i === 0 || flowerbed[i-1] === 0 ) && (i === flowerbed.length -1 || flowerbed[i+1] === 0)){
           flowerbed[i] = 1;
           count++
           i++
        } 
    }

    // return true or false
    return count >= n
};


// Check if it's possible to plant a flower at the current position i
if(flowerbed[i] === 0 // The current position is empty
    && (i === 0 || flowerbed[i-1] === 0) // The previous position is empty or doesn't exist (i.e., i is 0)
    && (i === flowerbed.length -1 || flowerbed[i+1] === 0) // The next position is empty or doesn't exist (i.e., i is the last index)
 ){

 }
//  ```
//  Here's a breakdown of each condition:
 
//  1. `flowerbed[i] === 0`: This checks if the current position `i` in the `flowerbed` array is empty (i.e., has a value of 0). This is necessary because we can only plant a flower in an empty spot.
 
//  2. `(i === 0 || flowerbed[i-1] === 0)`: This checks if the previous position is empty or doesn't exist. If `i` is 0, it means we're at the first position, and there is no previous position to check. Otherwise, we check if the previous position (`flowerbed[i-1]`) is empty.
 
//  3. `(i === flowerbed.length -1 || flowerbed[i+1] === 0)`: This checks if the next position is empty or doesn't exist. If `i` is the last index in the `flowerbed` array (`i === flowerbed.length -1`), there is no next position to check. Otherwise, we check if the next position (`flowerbed[i+1]`) is empty.
 
//  By combining these three conditions, we ensure that we can plant a flower at the current position `i` without violating the rules of not planting adjacent flowers.
 
//  [ ]
 