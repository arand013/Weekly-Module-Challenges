
//                       QUESTION
// 


// Given a linked list, delete the middle node. 
// If the list is even length, delete the node at the start 
// of the second half of the list.


/*
  * You may assume the node class is:
  * class LLNode {
  *   constructor(value, next = null) {
  *     this.value = value;
  *     this.next = next;
  *   }
  * }
  */

/*  
    EXAMPLE 1: 

    
    EXAMPLE 2: 


    EXAMPLE 3: 


Constraints:    

--    [  ]
--    [  ]

    */ 

/*----------------------- SOLUTION  ----------------------  */

function deleteMiddleNode(head) {


    // Create function with param head that is a given linked list or Array 


    // start by creating a variable to hold the linked list

    let result = []; 

    // create a loop to iterate the list and find the middle or the 2nd half and pop either the middle node 
    // or the 1st node of the 2nd ha;f of the list and

        if ( head.length % 2 === 0 ){ 
           return  head.length / 2 === 0 ? result.push(result)
        } else if ( head.length % 2 === 1) { 
           return head.length / 2 === 1 ? result.push(result)
        }
        return result 
    // return the variable as a new array or list 
    return result 
  }


/*------------------- END OF SOLUTION  -------------------  */

/* */

/*                          FOLLOW UP                        */ 
/* 
Follow Up: 

--------------------------------------------------------------------------
*/ 