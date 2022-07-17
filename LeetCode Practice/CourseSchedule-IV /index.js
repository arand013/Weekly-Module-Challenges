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
