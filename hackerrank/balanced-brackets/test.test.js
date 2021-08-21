const {isBalanced} = require("./index");
test('case 1', () => {
	expect(isBalanced('{[()]}')).toEqual('YES')
})

test('case 2', () => {
	expect(isBalanced('{[(])}')).toEqual('NO')
})

test('case 3', () => {
	expect(isBalanced('{{[[(())]]}}')).toEqual('YES')
})

test('case 4', () => {
	expect(isBalanced('{{)[](}}')).toEqual('NO')
})
