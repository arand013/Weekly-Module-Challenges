
//                       QUESTION
// https://leetcode.com/problems/copy-list-with-random-pointer/description/


/*
A linked list of length [n] is given such that 
each node contains an additional random pointer, 
which could point to any node in the list, or [null].

Construct a [deep copy ]of the list. 
The deep copy should consist of exactly [n] brand new nodes, 
where each new node has its value set to the value of its 
corresponding original node. Both the [next] and [random] pointer 
of the new nodes should point to new nodes in the copied list
such that the pointers in the original list 
and copied list represent the same list state.
None of the pointers in the new list should 
point to nodes in the original list.


For example, if there are two nodes [X] and [Y] in the original list,
 where [X.random --> Y], then for the corresponding 
 two nodes [x] and [y] in the copied list, [x.random --> y].

Return the head of the copied linked list.

The linked list is represented in the input/output as 
a list of [n] nodes. Each node is represented as a pair 
of [val, random_index] where:

[val]: an integer representing [Node.val]
[random_index]: the index of the node (range from [0] to[ n-1]) 
that the [random] pointer points to, or [null] if it does not point to any node.


Your code will only be given the [head] of the original linked list.








*/

/*  
    EXAMPLE 1: 
    Input: head = [[7,null],[13,0],[11,4],[10,2],[1,0]]
    Output: [[7,null],[13,0],[11,4],[10,2],[1,0]]
  
    
    EXAMPLE 2: 
    Input: head = [[1,1],[2,1]]
    Output: [[1,1],[2,1]]

    EXAMPLE 3: 

    Input: head = [[3,null],[3,0],[3,null]]
    Output: [[3,null],[3,0],[3,null]]
Constraints:

--     [ 0 <= n <= 1000 ]
--     [ -10^4 <= Node.val <= 10^4 ]
--     [Node.random] is [null] or is pointing to some node in the linked list.


    */ 

/*                      SOLUTION                            */
/**
 * *Time: O(N)
 * *Space: O(N)
 */
// Runtime: 78 ms, faster than 61.33% of JavaScript online submissions for Copy List with Random Pointer.
// Memory Usage: 43.6 MB, less than 93.23% of JavaScript online submissions for Copy List with Random Pointer.

const copyRandomList = head => {
	if (!head) return head;

	const map = new Map(); // node: copy of code
	let current = head;

	// iterate LL and create map of each node and its copy
	while (current) {
		const copy = new Node(current.val);

		map.set(current, copy);
		current = current.next;
	}

	current = head; // start iterating from start of LL

	// go through LL and make a LL of new copied nodes
	while (current) {
		const copy = map.get(current);

		// if node exist add to pointer otherwise end of LL
		copy.next = map.get(current.next) || null; 
		copy.random = map.get(current.random) || null; 

		current = current.next;
	}

	// return head of copied node
	return map.get(head);
};


/*                    END OF SOLUTION                       */

/* */

/* 
--------------------------------------------------------------------------

--------------------------------------------------------------------------

*/