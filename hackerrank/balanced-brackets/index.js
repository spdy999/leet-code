// ref: https://www.youtube.com/watch?v=9kmUaXrjizQ&ab_channel=TECHDOSE
/*
 * Complete the 'isBalanced' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function isBalanced(s) {
	// Write your code here
	const sLength = s.length
	if (sLength % 2 !== 0) return 'NO'
	const openBrackets = new Set(['{', '[', '('])
	const stack = []
	const table = {
		'}': '{',
		')': '(',
		']': '['
	}

	for (let i = 0; i < sLength; i++) {
		if (openBrackets.has(s[i])) stack.unshift(s[i])
		else {
			const openBracket = stack.shift()
			const closeBracket = s[i]
			if (openBracket === table[closeBracket]) continue
			return 'NO'
		}
	}
	return stack.length === 0 ? 'YES' : 'NO'
}

module.exports = {isBalanced}
