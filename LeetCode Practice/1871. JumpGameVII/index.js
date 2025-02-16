function canReach(s, minJump, maxJump){
    let q = [0]
    let farthest = 0;

    while(q.length > 0){
        let i = q.shift() // deque

        let start = Math.max(i + minJump, farthest + 1)

        for(let j = start; j < Math.min(i + maxJump + 1, s.length); j++){
            if(s[j] === "0"){
                q.push(j) // enqueue
                if( j === s.length - 1){
                    return true
                }
            }
        }
        farthest = i + maxJump
    }
    return false;
}