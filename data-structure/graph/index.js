const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ')

const routes = [
	['PHX', 'LAX'],
	['PHX', 'JFK'],
	['JFK', 'OKC'],
	['JFK', 'HEL'],
	['JFK', 'LOS'],
	['MEX', 'LAX'],
	['MEX', 'BKK'],
	['MEX', 'LIM'],
	['MEX', 'EZE'],
	['LIM', 'BKK'],
]

const adjacencyList = new Map()

/**
 *
 * @param {string} airport
 */
const addNode = (airport) => {
	adjacencyList.set(airport, [])
}

/**
 *
 * @param {string} origin
 * @param {string} destination
 */
const addEdge = (origin, destination) => {
	adjacencyList.get(origin).push(destination)
	adjacencyList.get(destination).push(origin)
}

airports.forEach(addNode)
routes.forEach(route => addEdge(...route))

console.log(adjacencyList)

module.exports = {adjacencyList, airports}


