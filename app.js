const directedGraph = {
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
      console.log("busco al vecino", neighbor);
    }
  }
  return console.log("finaliza con:", stack);
}

// dfs(directedGraph, "a")

function recursiveDFS(graph, source) {
  console.log("Esta corriendo", source);
  for (let neighbor of graph[source]) {
    recursiveDFS(graph, neighbor);
  }
}
// recursiveDFS(directedGraph, "a")

//Breadth-First Search, BFS
function bfs(graph, source) {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    console.log("Esta corriendo", current);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return console.log(queue);
}

// bfs(directedGraph, "f");



// /* Existe Ruta? */******************************************* */

const directedGraph2 = {
  f: ["g", "i"],
  g: ["h"],
  h: [],
  i: ["g", "k"],
  j: ["i"],
  k: [],
};


function hasPath(graph, source, destination) {
  const queue = [source];
  while (queue.length > 0) {
    const current = queue.shift();
    if (current === destination)
      return console.log(`result ${source} and ${destination} is:`, true);
    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return console.log(`result ${source} and ${destination} is:`, false);
}

// hasPath(directedGraph2, "f", "k");

function recursiveHasPath(graph, source, destination) {
  if (source === destination) return true;
  for (let neighbor of graph[source]) {
    if (recursiveHasPath(graph, neighbor, destination)) return true;
  }
  return false;
}

const result = recursiveHasPath(directedGraph2, "f", "k");
console.log(result);
