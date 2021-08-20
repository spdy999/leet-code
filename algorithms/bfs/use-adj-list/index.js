const {adjacencyList} = require("../../../data-structure/graph");
/**
 *
 * @param {string} start
 */
const bfs = (start) => {
	const visited = new Set()
	const queue = [start]

	while (queue.length > 0) {
		const airport = queue.shift();

		const destinations = adjacencyList.get(airport)

		for (const destination of destinations) {
			if (destination === 'BKK') {
				console.log('BFS found Bangkok')
			}

			if (!visited.has(destination)) {
				visited.add(destination)
				queue.push(destination)
				console.log(destination)
			}
		}
	}
}

bfs('PHX')
