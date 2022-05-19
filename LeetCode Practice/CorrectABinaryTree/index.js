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

//NOTES: 
/* UNDERSTANDING THE QUESTION
You have a binary tree with a small defect. 
There is exactly one invalid node where its right child incorrectly points 
to another node at the same depth but to the invalid node’s right.


-Given the root of the binary tree with this defect, 
root, return the root of the binary tree after removing
this invalid node and every node underneath it
(minus the node it incorrectly points to).

The idea is to traverse the BFS sequence. (Breadth-First-Search)
Because the error is the right pointer of a certain node, 
our level order traversal will change a little.

For each layer of nodes, we traverse from right to left. 
When traversing, we put the left and right children of the current node
into the hashset.

When traversing, it is also tested whether the right child of 
the left/right child already exists in the hashset.

-If it exists, it means that the right pointer of the left/right 
child points to a node in the current layer.
-We can remove the child who points to the wrong one.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * 
 *  * @param {TreeNode} root
 * @param {number} from
 * @param {number} to
 * @return {TreeNode}
*/

// STEP EXPLANATION PSUEDOCODE

/*





                      8
            /                    \
           3                      1
        /                    /        \
       7                    9           4
     /                                /    \
    2                                5      6


2 node's right child is pointing to 6 node 

visited = {
  8,1,3,4,9,7,6,5,
}


stack
[current,parent,side]
-----------------------------------------------------------------------------
| (3) (1) 
-----------------------------------------------------------------------------

curr = (8)


stack
[current,parent,side]
-----------------------------------------------------------------------------
| [3,8,'left'] [1,8,'right']
-----------------------------------------------------------------------------

current = [8,null,null] 


- use breadth-first traversal - top to bottom, right to left 

- as we perform bfs, if current node's right child has already been visited, 
  then current node is the defect, and must be removed. 
  - set parent[side] = null;



*/


// ANSWER

    var correctBinaryTree = function(root){

        const queue = new Queue();
        const visited = new Set();

        queue.enqueue([root, null, null]);
        visited.add(root);

        let current, parent, side; 

        while (queue.size() > 0) {
            [current, parent, side] = queue.dequeue();

            if(current.right !== null) {
                if (visited.has(current.right)) {
                    parent[side] = null; 
                    return root;
                }
                queue.enqueue([current.right, current, "right"]);
                visited.add(current.right);
            }
            
            if(current.left !== null) {
                queue.enqueue([current.left, current, "left"]);
                visited.add(current.left);  
            }
        } 
    }

    

