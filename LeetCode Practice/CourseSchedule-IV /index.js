// Questiom 

// COURSE SCHEDULE IV - https://leetcode.com/problems/course-schedule-iv/


/* 
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. 
You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take 
course ai first if you want to take course bi.

For example, the pair [0, 1] indicates that you have to take course 0 before you can take course 1.
Prerequisites can also be indirect. If course a is a prerequisite of course b, and course b is a prerequisite of course c, then course a is a prerequisite of course c.

You are also given an array queries where queries[j] = [uj, vj]. For the jth query, you should answer whether course uj is a prerequisite of course vj or not.

Return a boolean array answer, where answer[j] is the answer to the jth query.

Example 1:       
-----         -----
| 1 | ------> | 0 | 
-----         -----
Input: numCourses = 2, prerequisites = [[1,0]], queries = [[0,1],[1,0]]
Output: [false,true]
Explanation: The pair [1, 0] indicates that you have to take course 1 before you can take course 0.
Course 0 is not a prerequisite of course 1, but the opposite is true.



Example 2:

Input: numCourses = 2, prerequisites = [], queries = [[1,0],[0,1]]
Output: [false,false]
Explanation: There are no prerequisites, and each course is independent.



Example 3: 
-----         -----
| 1 | ------> | 0 | 
-----         -----
  \             ^
   \           /
    Down      /
    ^        /  
      -----      
      | 2 |   
      -----    

Input: numCourses = 2, prerequisites = [], queries = [[1,0],[0,1]]
Output: [false,false]
Explanation: There are no prerequisites, and each course is independent.


*/

 const dfs = (current, graph, target) => {
  const visited = new Set();
  let flag = false;
  
  const traverse = (current) => {
    if (visited.has(current)) {
      return;
    }
    if (current === target) {
      flag = true;
      return;
    }
  
    let edges = graph[current];

    visited.add(current);
    for (let edge of edges) {
      traverse(edge);
    }
  }

  traverse(current);
  return flag;
}

var checkIfPrerequisite = function(numCourses, prerequisites, queries) {
  const graph = {};

  for (let i = 0; i < numCourses; i++) {
    graph[i] = [];
  }

  for (let prereq of prerequisites) {
    let a = prereq[0];
    let b = prereq[1];

    graph[a].push(b);
  }

  // console.log("GRAPH: ", graph);

  // attempt to travel with each query 

  const result = [];
  
  for (let query of queries) {
    let u = query[0];
    let v = query[1];

    if (dfs(u, graph, v)) {
      result.push(true);
    } else {
      result.push(false);
    }
  }

  return result;
};



console.log(checkIfPrerequisite(3, [[1,2],[1,0],[2,0]], [[1,0],[1,2]]));
console.log(checkIfPrerequisite(2, [[1,0]], [[0,1],[1,0]]));
console.log(checkIfPrerequisite(2, [[1,0]], [[1,1],[1,0]]));


/*

graph = {
  0 : [1],
  1 : [2],
  2 : []
}


        0 --> 1 --> 2


query [[0, 2]]

dependencies = {
  0: [],
  1: [0],
  2: [0,1]
}

possible_pairs = {
  "0_1"
  "0_2"
  "1_2"
}

visited = {0,1}

                          current
                            0
                            |
                            1
                            |
                            2




possible_pairs = {
  "1_2"
  "1_3"
  "0_1"
  "0_2"
  "0_3"
}

                                  4
                                  |  \
                                  v   \
                           2 -->  1    v
                              /    |   5
                            /      |   /
                           v       v  v
                           0       3
                                   |
                                   |
                                   v
                                   6




0,3,1,2,4

reversed - 4,2,1,3,0

Post-order dfs




- dfs function (current) 
  - if at a visited node, terminate recursion

  - get all edges, travel to edges 
  - perform an action 


*/