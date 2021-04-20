const {groupAnagrams} = require('./index');

test('case 1', () => {
  const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
  expect(groupAnagrams(strs).toString().split('').sort()).toEqual([['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']].toString().split('').sort());
});
