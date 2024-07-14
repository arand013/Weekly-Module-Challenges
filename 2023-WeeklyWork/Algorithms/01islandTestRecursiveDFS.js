/*

0000111110011
0000000000000
0011000100011
0011000100011 = 3
0111000100011
1111000110011
1111111110011
0111111111111
0000000111111



           11

  11   1   11
  11   1   11
 111   1   11
1111   11  11
111111111  11
 111111111111
       111111

       

*/


/* 
Understanding 1: Given an array of numbers ( 0's are water & 1's connected above below, right, or left are land) 

Understanding 2: Return the output of Islands in the array 

Step 1: create a function that contains a parameter of numbers in an array 

Step 2: create a variable to hold a count of islands array

Step 3: Create a loop to iterate the array and looking for 

// DFS or BFS

// flood fill

// Cracking the coding interview ++++++
*/

function islandTest(array) {
    let count = 0; 
  
    for(let i = 0; i < array.length; i++) {
      for( let j = 0; j < array[0].length; j++) { 
        // if theres there is 1 in (i) or(j)increment    
        if (array[i][j] === 1) {
          count++; 
          clearIslandDFS(i, j, array);
        }
      }
    }
  
    return count;
  }
  
  function clearIslandDFS(i, j, array) {
    // all your base cases
    if(i < 0 || j < 0 || i >= array.length || j >= array[0].length || array[i][j] === 0) {
      return;
    }
  
    // core part
    array[i][j] = 0;
  
    // recursion
    clearIslandDFS(i + 1, j, array);
    clearIslandDFS(i - 1, j, array);
    clearIslandDFS(i, j + 1, array);
    clearIslandDFS(i, j - 1, array);
  }
  
  const map = [[0,0,0,0,1,1,1,1,1,0,0,1,1],
  [0,0,0,0,0,0,0,0,0,0,0,0,0],
  [0,0,1,1,0,0,0,1,0,0,0,1,1],
  [0,0,1,1,0,0,0,1,0,0,0,1,1],
  [0,1,1,1,0,0,0,1,0,0,0,1,1],
  [1,1,1,1,0,0,0,1,1,0,0,1,1],
  [1,1,1,1,1,1,1,1,1,0,0,1,1],
  [0,1,1,1,1,1,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,1,1,1,1,1,1]];
  
  console.log(islandTest(map));
  
  