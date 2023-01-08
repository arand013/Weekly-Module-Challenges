
//                       QUESTION
// https://leetcode.com/problems/sort-list/ 


// Given the [head] of a linked list, 
// return the list after sorting it in ascending order.




//

/*  
    EXAMPLE 1: 
    Input: head = [4,2,1,3]
    Output: [1,2,3,4]
    
    EXAMPLE 2: 
    Input: head = [-1,5,3,4,0]
    Output: [-1,0,3,4,5]

    EXAMPLE 3: 
    Input: head = []
    Output: []

Constraints:    

--    [ The number of nodes in the list is in the range [0, 5 * 104] ]
--    [ -10^5 <= Node.val <= 10^5 ]

    */ 

/*                      SOLUTION                            */
var sortList = function(head) {
    let result =[];
    let node = head;
    
    while(node){
        
        result.push(node.val);
        node = node.next;
    }
    
    result.sort((a,b)=> a-b)
    return helper(result)
   
};

function helper(array){
    return array.reduceRight((next,val)=> ({val,next}),null)
}


/*                    END OF SOLUTION                       */

/* */

/*                          FOLLOW UP                        */ 
/* 
Follow Up: 

Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
--------------------------------------------------------------------------
var copyRandomList = function(head) {
    if(head == null){
        return null;
    }
    
    var map = new Map();
    var n = head;
    while(n != null){
        var oldVal = n;
        var newVal = new Node(n.val);
        map.set(oldVal, newVal);
        n = n.next;
    }
    //console.log(map);
    n = head;
    while(n != null){
        map.get(n).next = map.get(n.next) || null;
        map.get(n).random = map.get(n.random) || null;
        n= n.next;
    }
    return map.get(head);
};
--------------------------------------------------------------------------

*/