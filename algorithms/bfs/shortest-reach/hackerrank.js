const {Graph} = require("../../dijkstra/implement-with-adj-list/Graph");

/**
 *
 * @param {string} input
 * @return {*[]}
 */
function processData(input) {
	//Enter your code here
	const g = new Graph()

	let currentRow = 0
	const line = input.split('\n')
	let queries = parseInt(line[currentRow++])
	const results = []

	while (queries > 0) {
		const [nodeSize, edgeSize] = line[currentRow++].split(' ')

		// add the vertices
		for (let i = 1; i <= nodeSize; i++) {
			g.addVertex(i.toString())
		}

		// create the edges
		for (let i = 0; i < edgeSize; i++) {
			const [src, dest] = line[currentRow++].split(' ')
			g.addEdge(src, dest, 6)
			g.addEdge(dest, src, 6)
		}

		const start = line[currentRow++]
		const distancesObject = g.dijkstra(start)

		// create output for hackerrank
		const distancesList = []
		for (let i = 1; i <= nodeSize; i++) {
			if (i == start) continue

			const distance = distancesObject[i]
			distance !== Infinity ? distancesList.push(distance) : distancesList.push(-1)
		}

		console.log(distancesList.join(' '))
		results.push(distancesList)
		queries--
	}

	return results
}

module.exports = {processData}
