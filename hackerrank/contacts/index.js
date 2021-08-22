class Node {
	constructor(char) {
		this.char = char
		this.children = [] // track all following characters
		this.ends = 0; // keep running total of # of words this char was used in
	}

	findOrCreateChild(char) {
		this.ends++ // increment running count
		return this.findChild(char) || this.createChild(char)
	}

	findChild(char) {
		// returns undefined if char not found in children
		return this.children.find(node => node.char === char);
	}

	createChild(char) {
		const newChild = new Node(char)
		this.children.push(newChild)
		return newChild
	}
}

class Trie {
	constructor() {
		this.root = new Node(null)
	}

	add(word) {
		let currentNode = this.root;
		for (const char of word) {
			currentNode = currentNode.findOrCreateChild(char)
		}

		// KEY FOR 1 TEST
		// Important to keep track of end of words (for single letter "words")
		// Also just good practice
		currentNode.findOrCreateChild(Trie.END_CHARACTER)
	}

	getMatchCount(partial) {
		let currentNode = this.root
		for (const char of partial) {
			const childNode = currentNode.findChild(char)
			if (!childNode) return 0; // stop short if any part of partial not found
			currentNode = childNode
		}
		return currentNode.ends // returns the established count
	}
}

Trie.END_CHARACTER = "*"

/*
 * Complete the 'contacts' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts 2D_STRING_ARRAY queries as parameter.
 */
/**
 *
 * @param {string[][]} queries
 * @return {number[]}
 */
function contacts(queries) {
	const store = new Trie()
	const foundContacts = []
	for (const query of queries) {
		const [command, word] = query
		if (command === 'add') {
			store.add(word)
		} else {
			const count = store.getMatchCount(word)
			foundContacts.push(count)
		}
	}
	return foundContacts
}

module.exports = {contacts}
