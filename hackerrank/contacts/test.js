const {contacts} = require("./index");
test('case 1', () => {

	const queries = [
		['add', 'hack'],
		['add', 'hackerrank'],
		['find', 'hac'],
		['find', 'hak']
	]
	expect(contacts(queries)).toEqual([2, 0])
})
