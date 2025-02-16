//                       QUESTION
// https://leetcode.com/problems/reverse-linked-list/description/ 


// Given the head of a singly linked list, 
// reverse the list, 
// And return the reversed list.


/*  
    EXAMPLE 1: 
    Input: head = [1,2,3,4,5]
    Output: [5,4,3,2,1]  
    
    EXAMPLE 2: 
    Input: head = [1,2]
    Output: [2,1]

≠
    EXAMPLE 3: 
    Input: head = []
    Output: []                                              */


/*                      SOLUTION                            */

var reverseList = function (head) {
    if (!head) return head;

    let node = head;
    let nextNode = head.next;

    node.next = null;

    while (nextNode) {
        const nextNextNode = nextNode.next;
        nextNode.next = node;
        node = nextNode;
        nextNode = nextNextNode;
    }

    return node;
};




/*                    END OF SOLUTION                       */

/* */
/* 
// recursive
var reverseList = function(head) {
    let newHead = null;
    
    const reverse = (node) => {
        if (!node) return null;

        const nextNode = reverse(node.next);

        node.next = null;

        if (nextNode) {
            nextNode.next = node;
        } else {
            newHead = node;
        }

        return node;        
    }
    
    reverse(head);

    return newHead;
};

// iterative
var reverseList = function(head) {
    if (!head) return head;
    
    let node = head;
    let nextNode = head.next;
    
    node.next = null;

    while (nextNode) {
        const nextNextNode = nextNode.next;
        nextNode.next = node;
        node = nextNode;
        nextNode = nextNextNode;
    }
    
    return node;
};
*/


/*                      FOLLOW UP WORK
A linked list can be 
reversed either iteratively or recursively. 
Could you implement both?                               */