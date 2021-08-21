class Graph {
	constructor() {
		this.vertices = []
		this.adjacencyList = {}
	}

	/**
	 *
	 * @param {string | number} vertex
	 */
	addVertex(vertex) {
		this.vertices.push(vertex)
		// this.adjacencyList.set(vertex, new Map())
		this.adjacencyList[vertex] = {}
	}

	/**
	 *
	 * @param {string} source
	 * @param {string} destination
	 * @param {number} weight
	 */
	addEdge(source, destination, weight) {
		// this.adjacencyList.get(source).set(destination, weight)
		this.adjacencyList[source][destination] = weight
	}

	/**
	 *
	 * @param {string} source
	 * @param {string} destination
	 * @param {number} weight
	 */
	changeWeight(source, destination, weight) {
		// this.adjacencyList.get(source).set(destination, weight)
		this.adjacencyList[source][destination] = weight
	}

	/**
	 *
	 * @param {string} source
	 * @return {Object}
	 */
	dijkstra(source) {
		const distances = {}
		const parents = {}
		const visited = new Set()

		// initial distances and parents
		for (let i = 0; i < this.vertices.length; i++) {
			if (this.vertices[i] === source) {
				distances[source] = 0
			} else {
				distances[this.vertices[i]] = Infinity
			}
			parents[this.vertices[i]] = null
		}


		let currVertex = this.vertexWithMinDistance(distances, visited)

		while (currVertex !== null) {
			const distance = distances[currVertex]
			const neighbors = this.adjacencyList[currVertex]

			for (const neighbor in neighbors) {
				const newDistance = distance + neighbors[neighbor]

				if (distances[neighbor] > newDistance) {
					distances[neighbor] = newDistance
					parents[neighbor] = currVertex
				}
			}

			visited.add(currVertex)
			currVertex = this.vertexWithMinDistance(distances, visited)
		}
		console.log(parents)
		console.log(distances)
		return distances
	}

	/**
	 *
	 * @param {Object} distances
	 * @param {Set} visited
	 */
	vertexWithMinDistance(distances, visited) {
		let minDistance = Infinity
		let minVertex = null
		for (const vertex in distances) {
			const distance = distances[vertex]
			if (distance < minDistance && !visited.has(vertex)) {
				minDistance = distance
				minVertex = vertex
			}
		}
		return minVertex
	}
}

module.exports = {Graph}
