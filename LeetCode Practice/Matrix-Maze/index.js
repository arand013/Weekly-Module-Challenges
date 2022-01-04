/* 
Given a maze, represented by a matrix of bits (values 0 and 1), a rat must find a path from index [0][0] to [n-1][m-1]. The rat can only travel to the right or down, and can only travel on 0 values. 1 values represent walls.

Input:   maze (Matrix of elements with values either 0 or 1)
Output:  Array of two-item arrays indicating the path.

Input:   [[0, 0, 0, 1],
          [0, 1, 0, 1],
          [0, 1, 0, 0],
          [0, 0, 1, 0]]

Output:  [[0, 0],
          [0, 1],
          [0, 2],
          [1, 2],
          [2, 2],
          [2, 3],
          [3, 3]]

          For M x N matrix.
            Time Complexity: 0(MN)
            Auxiliary Space Complexity: O(MN)

//UNDERSTAND
//DIAGRAM 
Goal:
Edge cases: To find 1 path 

Edges Cases: This problem involves
DFS 
Bakctracking 
Directions ( 2 possible (right or down))
Matrix 
set input to be a matrix or pathway of 0 = Paths && 1 = Walls
Set output as an array of of pairs in a matrix


Bases Cases:  
0: In boundary's 
1: Hit a wall; 
2: visited marked, then we can go right or down

Mark row and column to where we visited 
2 directions right or down 

return two-items arrays [row, col] tells me the position of the path 

for every visited mark 

then, keep goin to find a path until it finds end of matrix 

Also, add the two-items arrays into 1 array (output)

//PSUEDOCODE
STEPS:

1: Create function ratPaths(matrix) 

2: Create another function to traverse the matrix (row and col)

3: Set base cases 

4: Keep iterating until a wall it hit or a postiion is visited 

5: Then keep two-item arrays to return as output 

*/

// CODE

function ratPaths(matrix) {
    // set variables
    let result;
    let path = []

    // initialize function traversal
    function traversePath(row, col) {

        //set base cases
        if (result != undefined) {
            return;
        }
        if (row >= matrix.length || col >= matrix[0].length || matrix[row][col]) {
            return;
        }
        // Append path to keep going incrementally by 1 step to right(row +1) or down (col +1)
        // Then pop to the end of the path
        path.push([row, col]);
        if (row === matrix.length - 1 && col === matrix[0].length - 1) {
            result = path.slice();
            return;
        }
        traversePath(row + 1, col);
        traversePath(row, col + 1);
        path.pop();

        // To serve as a Wall to block Rat from going thru OR AKA
        // Toggle dead ends into walls! This line is the only change needed to go from O(2^MN) to 0(MN)
        matrix[row][col] = 1;
    }
    // Call function
    traversePath(0, 0)
    return !result ? [-1, -1] : result;
}
let maze = [[0, 0, 0, 1],
[0, 1, 0, 1],
[0, 1, 0, 0],
[0, 0, 1, 0]]
console.log(ratPath(maze))
