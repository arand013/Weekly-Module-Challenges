//                       QUESTION

/*

Prompt

This is a more complex list traversal problem. 
In this case, each node points to the next in the current list, 
but may also have a sublist. 
Think of this like an outline. At the top level,
there is a list of bullet points. 
Each bullet might have sub-bullets, which themselves might have sub-bullets.


The task is to flatten this into an output array. All of every node's sub bullets must come before the next bullet at that node's level.
*/


/*  
EXAMPLE 1: 


Output:


*/

    

/*
Constraints:    

--    [  ]
--    [  ]

*/ 

/*----------------------- SOLUTION  ----------------------  */
/*
  * The node class for this is a simple extension of before:
  * class LLNode {
  *   constructor(value, next = null, sublist = null) {
  *     this.value = value;
  *     this.next = next;      // the next value in the current list
  *     this.sublist = sublist; // another list
  *   }
  * }
  */
class LLNode {
    constructor(value, next = null, sublist = null) {
      this.value = value
      this.next = next
      this.sublist = sublist
    }
  }
  
  
  function flattenSublist(inputList) {
    // Define our output array
    const output = [];
  
  
    // Define a helper for traversing our list recursively
    function dfs(node) {
      if (!node) {
        return;
      }
  
  
      // Add present node value
      if (node.value) {
        output.push(node.value);
      }
  
  
      // Traverse sublist (after updating w/ present node value)
      dfs(node.sublist);
  
  
      // Continue on to the next node recursively
      dfs(node.next);
    }
  
  
    // Traverse from our input/root node
    dfs(inputList);
  
  
    return output;
  }
      
    /*------------------- END OF SOLUTION  -------------------  */
      
      /* */
      
      /*                          FOLLOW UP                        */ 
      /* 
      Follow Up: 
      
      --------------------------------------------------------------------------
      */ 