// QUESTIONS

/*
Given an array arr of positive integers, consider all binary trees such that:

Each node has either 0 or 2 children;
The values of arr correspond to the values of each leaf in an in-order traversal of the tree.
The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree, respectively.
Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node. It is guaranteed this sum fits into a 32-bit integer.

A node is a leaf if and only if it has zero children.


Example 1: 
                24           |               24
            /       \        |           /       \
          12         4       |         6          8 
        /               \    |        /         /   \
      6                  2   |                 2     4   


Input: arr = [6,2,4]
Output: 32
Explanation: There are two possible trees shown.
The first has a non-leaf node sum 36, and the second has non-leaf node sum 32.

Example 2:

               44           
            /       \             
          4          11                

Input: nums = [4,11]
Output: [44]
 

Constraints:
2 <= arr.length <= 40
1 <= arr[i] <= 15
It is guaranteed that the answer fits into a 32-bit signed integer (i.e., it is less than 231).

*/


// ANSWERS----------------------------------------------------------------


//UNDERSTAND
/* 
-Bigger numbers at lesser depth
-Use Math.ceiling [ln (arrLength)]
-Figure out your depth... 2(3) - 2 => 1

Greedy: 
    -pick 2 least values and assign to a leaf node until there are not ppssible 
    -Assign rest at higher value

DP: minSum(pick 6 at depth1 , pick 6 at depth 2 )

-Get minDepth => math.ceiling [ln (arrLength)] => 2

EXAMPLE: 
[6,2,4,8,3,6] => 3 (at least a depth of 3)

                *               |                    1152
            /       \           |                 /        \
          * (6*4)    * (8*6)    |               24           48 
        /  \        /   \       |             /   \         /   \
      6     *      8      *     |            6     8       8     18   
           /  \          /  \   |                / * \          / * \
          2    4        3    6  |               2     4        3     6

result: [6,0, 0, 8, 13, 14]
    

1) create a function w/ parameters
2) 
3) 
4) 
*/
//DIAGRAM
/* 
*/
//PSUEDOCODE
//CODE
