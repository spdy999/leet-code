const {dijkstra} = require("./dijkstra");

/**
 *
 * @param {number[][]} edges
 * @param {number} nodeSize
 */
const createGraph = (edges, nodeSize) => {
	const graph = Array(nodeSize).fill([]).map(() => new Array(nodeSize).fill(0))

	const EDGE_VAL = 6
	for (let i = 0; i < edges.length; i++) {
		const row = edges[i][0] - 1
		const col = edges[i][1] - 1
		graph[row][col] = EDGE_VAL
		graph[col][row] = EDGE_VAL
	}
	return graph
}

/**
 *
 * @param {number[][]} edges
 * @param {number} start
 * @param {number} nodeSize
 * @return {number[]}
 */
const bfsShortestReach = (edges, start, nodeSize) => {
	const graph = createGraph(edges, nodeSize)
	return dijkstra(graph, start)
}

function processData(input) {
	//Enter your code here
	const l = input.split('\n')
	let queries = parseInt(l.shift())
	const results = []

	while (queries > 0) {
		const [nodeSize, edgeSize] = l.shift().split(' ')
		const edges = []
		for (let i = 0; i < edgeSize; i++) {
			const [startNode, endNode] = l.shift().split(' ')
			edges.push([parseInt(startNode), parseInt(endNode)])
		}
		const start = l.shift()
		const result = bfsShortestReach(edges, parseInt(start), parseInt(nodeSize))
		results.push(result)
		console.log(result.join(' '))
		queries--
	}

	return results
}

module.exports = {bfsShortestReach, createGraph, processData}
