const {groupAnagrams} = require('./index');

test('case 1', () => {
  const strs = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat'];
  const resultGroup = groupAnagrams(strs).toString().split('').sort();
  const expectedResult = [['bat'], ['nat', 'tan'], ['ate', 'eat', 'tea']]
      .toString().split('').sort();
  expect(resultGroup).toEqual(expectedResult);
});

test('case 2', ()=> {
  const strs = [''];
  const resultGroup = groupAnagrams(strs).toString().split('').sort();
  const expectedResult = [['']].toString().split('').sort();
  expect(resultGroup).toEqual(expectedResult);
});

test('case 3', ()=> {
  const strs =['a'];
  const resultGroup = groupAnagrams(strs).toString().split('').sort();
  const expectedResult = [['a']].toString().split('').sort();
  expect(resultGroup).toEqual(expectedResult);
});
