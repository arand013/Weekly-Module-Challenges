//QUESTION 
/*
You have a binary tree with a small defect. 
There is exactly one invalid node where its right child incorrectly points 
to another node at the same depth but to the invalid node's right.

Given the root of the binary tree with this defect, root, return the root 
of the binary tree after removing this invalid node and 
every node underneath it (minus the node it incorrectly points to).

Custom testing:

The test input is read as 3 lines:

-TreeNode root
-int fromNode (not available to correctBinaryTree)
-int toNode (not available to correctBinaryTree)

After the binary tree rooted at root is parsed, 
the TreeNode with value of fromNode will have its right child pointer pointing to the
TreeNode with a value of toNode. Then, root is passed to correctBinaryTree.

EXAMPLE 1:
        1
    /       \   
   2         3
   |       ^
   ------- |

Input: root = [1,2,3], fromNode = 2, toNode = 3
Output: [1,null,3]
Explanation: The node with value 2 is invalid, so remove it.


CONSTRAINTS:

-The number of nodes in the tree is in the range [3, 104].
-109 <= Node.val <= 109
-All Node.val are unique.
-fromNode != toNode
-fromNode and toNode will exist in the tree and will be on the same depth.
-toNode is to the right of fromNode.
-fromNode.right is null in the initial tree from the test data.
*/



// ANSWER