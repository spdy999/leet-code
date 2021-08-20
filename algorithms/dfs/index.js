/**
 *
 * @param {string} start
 * @param {Set<any>} visited
 */
const {adjacencyList} = require("../../data-structure/graph/example");
const dfs = (start, visited = new Set()) => {
	console.log(start)

	visited.add(start)

	const destinations = adjacencyList.get(start)
	for (const destination of destinations) {
		if (destination === 'BKK') {
			console.log(`DFS found Bangkok in steps`)
			return
		}

		if (!visited.has(destination)) {
			dfs(destination, visited)
		}
	}
}

dfs('PHX')
