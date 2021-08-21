/**
 *
 * @param {boolean[]} processedVertices
 * @param {number[]} vertexValues
 * @return {number}
 */
const selectMinVertex = (processedVertices, vertexValues) => {
	let minimum = Number.MAX_VALUE;
	const size = vertexValues.length;
	let minVertex;

	for (let i = 0; i < size; i++) {
		if (processedVertices[i] === false && vertexValues[i] < minimum) {
			minVertex = i;

			minimum = vertexValues[i];
		}
	}

	return minVertex;
};

/**
 *
 * @param {number} startVertexValue
 * @param {number} processedVertex
 * @param {number} minVertexValue
 * @param {number} sumEdges
 * @param {number} destVertexValue
 * @return {boolean}
 */
const canRelax = (startVertexValue,
                  processedVertex,
                  minVertexValue,
                  sumEdges,
                  destVertexValue) => startVertexValue !== 0 && processedVertex === false && minVertexValue !== Number.MAX_VALUE && sumEdges < destVertexValue;
/**
 *
 * @param {number[][]} graph
 * @param {number} start
 */
const dijkstra = (graph, start) => {
	const nodeSize = graph[0].length;
	const parent = Array(nodeSize).fill(-1); // Stores shortest path structure
	const vertexValues = Array(nodeSize).fill(Number.MAX_VALUE); // Keeps shortest path values to each vertex from source
	const processedVertices = Array(nodeSize).fill(false); // TRUE -> Vertex is processed

	// Assume start point as Node-0
	parent[start] = -1; // Start node has no parent
	vertexValues[start] = 0; // Start node has value = 0 to get picked 1st

	// Include (V-1) edges to cover all V-vertices
	for (let i = 0; i < nodeSize; i++) {
		// Select best vertex by applying greedy method
		const minVertexIndex = selectMinVertex(processedVertices, vertexValues);
		processedVertices[minVertexIndex] = true; // Include new vertex in shortest path graph

		// Relax adjacent vertices (not yet include in shortest path graph)
		for (let j = 0; j < nodeSize; ++j) {
			/*
			3 conditions to relax: -
				1. Edge is present from minVertex to j
				2. Vertex j is not included in shortest path graph
				3. Edge weight is smaller smaller than current edge weight
			 */
			const sumEdges = vertexValues[minVertexIndex] + graph[minVertexIndex][j];

			if (canRelax(
					graph[minVertexIndex][j],
					processedVertices[j],
					vertexValues[minVertexIndex],
					sumEdges,
					vertexValues[j])) {

				vertexValues[j] = sumEdges;
				parent[j] = minVertexIndex;

			}
		}
	}

	return vertexValues
	// return vertexValues
	// const shortestPathEachNode = []
	// // Print shortest path graph
	// for (let j = 0; j < nodeSize; ++j) {
	// 	if (j === start) continue
	// 	if (parent[j] === -1) {
	// 		shortestPathEachNode.push(-1)
	// 	} else {
	//
	// 		console.log(`U->V: ${parent[j]} -> ${j} wt = ${graph[parent[j]][j]}`);
	// 		shortestPathEachNode.push(graph[parent[j]][j])
	// 	}
	// }
	// return shortestPathEachNode
};

module.exports = {
	selectMinVertex,
	dijkstra,
};
