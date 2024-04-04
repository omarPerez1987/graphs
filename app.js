const grafo = {
  a: ["b", "c"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: ["e"],
};

//Depth-First Search, DFS
function dfs(graph, source) {
  const stack = [source];
  while (stack.length > 0) {
    const current = stack.pop();
    console.log("Esta corriendo", current);
    for (let neighbor of graph[current]) {
      stack.push(neighbor);
      console.log("busco al vecino",neighbor)
    }
  }
  return console.log(stack)
}

// dfs(grafo, "a")

function recursiveDFS(graph, source) {
  console.log("Esta corriendo", source);
  for(let neighbor of graph[source]) {
    recursiveDFS(graph, neighbor)
  }
}
// recursiveDFS(grafo, "a")

//Breadth-First Search, BFS
function bfs (graph, source) {
  const queue = [source]
  while(queue.length > 0) {
    const current = queue.shift()
    console.log("Esta corriendo", current);
    for(let neighbor of graph[current]) {
      queue.push(neighbor)
    }
  }
  return console.log(queue)
}

bfs(grafo, "f")
