

/* 
    Display a binary tree that traverses through a diagram ? 

    N = 1-

    Queue 
    -----------
    1 2 8 9 0 8 3 2
    -----------

    cur = 2

    Time 0(n)
    Space 0(N)

*/

    function bfs(node) {
        let result = []

        if(node === null) return result; 

        // using array as queue, dequeue time 0(n), instead desired 0(1)

        let queue = []
        queue.push(node)

        while(queue.length > 0) {
            //dequeue using array as queue
            let curr = queue.shift()
            //n-ary tree, for child in children
            if(curr.left) queue.push(curr.left)
            if(curr.right) queue.push(curr.right)

            //action
            result.push(curr.value)
        }
        return result
        }
