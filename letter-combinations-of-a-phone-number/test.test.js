const {letterCombinations} = require('./index');

test('23 should return 9 combination', () => {
  const digits = '23';
  const expected = ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf'];
  expect(letterCombinations(digits)).toEqual(expected);
});

test('2 should return 3 combination', () => {
  const digits = '2';
  expect(letterCombinations(digits)).toEqual(['a', 'b', 'c']);
});

test('empty string should return 0 combination', () => {
  const digits = '';
  expect(letterCombinations(digits)).toEqual([]);
});
