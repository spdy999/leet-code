const {createGraph, bfsShortestReach, processData} = require("./index0");

describe('createGraph', () => {
	test('should return graph from given adjList', () => {
		expect(createGraph([[1, 2], [1, 3]], 4)).toEqual([
			[0, 6, 6, 0],
			[6, 0, 0, 0],
			[6, 0, 0, 0],
			[0, 0, 0, 0]])
	})
})

describe('bfsShortestReach', () => {
	test('should return shortest reach value given start=1, nodes=4, edges=2', () => {
		const start = 1
		const nodeSize = 4
		const adjList = [[1, 2], [1, 3]]

		expect(bfsShortestReach(adjList, start, nodeSize)).toEqual([6, 6, -1])
	})

	test('should return shortest reach value given start=1, nodes=4, edges=2', () => {
		const start = 2
		const nodeSize = 3
		const adjList = [[2, 3]]

		expect(bfsShortestReach(adjList, start, nodeSize)).toEqual([-1, 6])
	})
})

describe('processData', () => {
			test('case 1', () => {
				const input = '2\n' +
						'4 2\n' +
						'1 2\n' +
						'1 3\n' +
						'1\n' +
						'3 1\n' +
						'2 3\n' +
						'2'
				expect(processData(input)).toEqual([[6, 6, -1], [-1, 6]])
			})

			test('case 2', () => {
				const input = '1\n' +
						'6 4\n' +
						'1 2\n' +
						'2 3\n' +
						'3 4\n' +
						'1 5\n' +
						'1'
				expect(processData(input)).toEqual([[6, 12, 18, 6, -1]])
			})
		}
)
