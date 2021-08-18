/**
 *
 * @param {number[][]} graph
 * @param {number} start
 * @return {number[]}
 */
const bfs = (graph, start) => {
	const N = graph[0].length
	const visited = Array(N).fill(false)
	const traversed = []

	visited[start] = true
	const queue = [start]

	while (queue.length !== 0) {
		const cur = queue.shift()
		traversed.push(cur)
		visited[cur] = true

		for (let j = 0; j < N; j++) {
			if (graph[cur][j] === 1 && visited[j] === false) {
				queue.push(j)
				visited[j] = true
			}
		}
	}
	return traversed
}

module.exports = {bfs}
