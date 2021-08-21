/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
	// Write your code here
	const sLength = s.length
	const halfLength = sLength / 2
	let firstHalfInd = halfLength - 1
	let secondHalfInd = halfLength
	const table = {
		'{': '}',
		'}': '{',
		'(': ')',
		')': '(',
		'[': ']',
		']': '['
	}
	const leftSet = new Set('{([')
	const rightSet = new Set('})]')

	while (firstHalfInd !== 0 && secondHalfInd < sLength) {
		const left = s[firstHalfInd--]
		const trueRight = s[secondHalfInd++]
		const right = table[trueRight]
		if (!leftSet.has(left) || !rightSet.has(trueRight) || left !== right) {
			return 'NO'
		}
	}
	return 'YES'
}

module.exports = {isBalanced}
