const {processData} = require('./hackerrank');

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
						'7 4\n' +
						'1 2\n' +
						'1 3\n' +
						'3 4\n' +
						'2 5\n' +
						'2'
				expect(processData(input)).toEqual([[6, 12, 18, 6, -1, -1]])
			})

			test('case 3', () => {
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
