// Depth First Search 


function dfs(graph, startNode) {
    const visited = new Set();
    const result = [];
  
    for (let node in graph) {
      if (!visited.has(node)) {
        dfsTraversal(graph, node, visited, result);
      }
    }
  
    return result;
  }
  
  function dfsTraversal(graph, node, visited, result) {
    visited.add(node);
    result.push(node);
  
    for (let neighbor of graph[node]) {
      if (!visited.has(neighbor)) {
        dfsTraversal(graph, neighbor, visited, result);
      }
    }
  }