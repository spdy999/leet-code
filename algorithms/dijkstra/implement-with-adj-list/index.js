const {Graph} = require("./Graph");

const g = new Graph()

// add the vertices
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')

// create the edges
g.addEdge('A', 'B', 3)
g.addEdge('A', 'C', 2)
g.addEdge('B', 'D', 2)
g.addEdge('C', 'D', 6)

g.dijkstra('A')
