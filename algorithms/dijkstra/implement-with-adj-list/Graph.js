class Graph {
	constructor() {
		this.vertices = []
		this.adjacencyList = {}
		// this.adjacencyList = new Map()
	}

	/**
	 *
	 * @param {number} vertex
	 */
	addVertex(vertex) {
		this.vertices.push(vertex)
		// this.adjacencyList.set(vertex, new Map())
		this.adjacencyList[vertex] = {}
	}

	/**
	 *
	 * @param {number} source
	 * @param {number} destination
	 * @param {number} weight
	 */
	addEdge(source, destination, weight) {
		// this.adjacencyList.get(source).set(destination, weight)
		this.adjacencyList[source][destination] = weight
	}

	changeWeight(source, destination, weight) {
		// this.adjacencyList.get(source).set(destination)
		this.adjacencyList[source][destination] = weight
	}
}

module.exports = {Graph}
