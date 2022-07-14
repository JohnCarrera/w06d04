function printBreadthFirst(start) {
  const queue = [start]
  const visited = new Set()
  let result = [];

  while (queue.length) {
    const node = queue.shift()
    result.push(node);

    const edges = adjList[node]

    edges.forEach(edge => {
      if (!visited.has(edge)) {
        queue.push(edge)
        visited.add(edge)
      }
    })
  }
  console.log(result);
}

function coords(row, col) {
  return `${row},${col}`
}


function getNeighbors(row, col, graph) {
  let neighbors = [];
  // Check top
  console.log(graph[row][col]);                             // starting on a 1
  if (graph[row - 1][col] && graph[row - 1][col] === 1) {
    neighbors.push([row - 1,col])
  }
  // check bottom
  console.log(graph[row][col]);                             // starting on a 1
  if (graph[row + 1][col] && graph[row + 1][col] === 1) {
    neighbors.push([row + 1,col])
  }
    // check left
  if (graph[row][col - 1] && graph[row][col - 1] === 1) {
    neighbors.push([row,col-1])
  }
    //check right
  if (graph[row][col + 1] && graph[row][col + 1] === 1) {
    neighbors.push([row,col+1])
  }
   return neighbors
}


function islandSize(row, col, graph) {
  const nodes = [];
  const addresses = new Set();
  // Create a visited set to store visited nodes

  // Create a stack, put the starting node in the stack

  // Put the stringified starting node in visited

  // Initialize size to 0

  // While the stack is not empty,

  // Pop the first node

  // DO THE THING (increment size by 1)

  // Then push all the UNVISITED neighbors on top of the stack
  // and mark them as visited
  // HINT: This is what your helper function `getNeighbors` is for
  // HINT: Remember, you're storing your visited nodes as strings!

  // return size

  // Your code here
}

  /*
        0, 1, 2, 3, 4

      [ 0, 1, 0, 0, 1 ]  0
      [ 1, 0, 0, 0, 1 ]  1
      [ 1, 1, 0, 1, 1 ]  2
      [ 0, 1, 1, 0, 0 ]  3
      [ 0, 0, 0, 0, 0 ]  4

    */

const graph = [
  [0, 1, 0, 0, 1],
  [1, 0, 0, 1, 1],
  [1, 1, 0, 1, 1],
  [0, 1, 1, 0, 0],
  [0, 0, 0, 0, 0]
];

getNeighbors(1, 4, graph);


module.exports = [getNeighbors, islandSize];
