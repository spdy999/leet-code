const {bfs} = require("./index");
describe('Undirected graph', () => {
	const graph = [
		[0, 1, 1, 0, 0, 0],
		[1, 0, 0, 1, 1, 0],
		[1, 0, 0, 0, 1, 0],
		[0, 1, 0, 0, 1, 1],
		[0, 1, 1, 1, 0, 1],
		[0, 0, 0, 1, 1, 0]]

	test('Should return traversed vertices start from 0', () => {
		expect(bfs(graph, 0,)).toEqual([0, 1, 2, 3, 4, 5])
	})

	test('Should return traversed vertices start from 2', () => {
		expect(bfs(graph, 2,)).toEqual([2, 0, 4, 1, 3, 5])
	})
})

describe('Directed graph', () => {
	const graph = [
		[0, 1, 1, 0, 0, 0],
		[0, 0, 0, 1, 0, 0],
		[0, 0, 0, 0, 0, 0],
		[0, 0, 0, 0, 1, 1],
		[0, 1, 1, 0, 0, 0],
		[0, 0, 0, 0, 0, 0]]

	test('Should return traversed vertices start from 0', () => {
		expect(bfs(graph, 0,)).toEqual([0, 1, 2, 3, 4, 5])
	})

	test('Should return traversed vertices start from 2', () => {
		expect(bfs(graph, 2)).toEqual([2])
	})

	test('Should return traversed vertices start from 1', () => {
		expect(bfs(graph, 1)).toEqual([1, 3, 4, 5, 2])
	})
})
