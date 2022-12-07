/*                  QUESTION

                --Maximum Depth of Binary Tree--

Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path 
from the root node down to the farthest leaf node.

LEETCODE Q: https://leetcode.com/problems/maximum-depth-of-binary-tree/ 

// ------------------------GIVEN --------------------------------

Constraints:

1) The number of nodes in the tree is in the range [0, 104].
-2) -100 <= Node.val <= 100
*/


/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */




// ------------------------SOLUTION --------------------------------
 var maxDepth = function(root) {
    // Set Base Case 
   if (!root) return 0;
   let depth = 1; 

    // Setup left/ right variables 
     const leftDepth = maxDepth(root.left)
     const rightDepth = maxDepth(root.right)

    // Create recursion (if statement)

    if (leftDepth > rightDepth){
        depth += leftDepth
    } else {
        depth += rightDepth
    }
    return depth;   
};