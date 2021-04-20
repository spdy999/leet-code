const {lengthOfLongestSubstring} = require('./index');

test('empty string should return 0', () => {
  const str = '';
  expect(lengthOfLongestSubstring(str)).toEqual(0);
});

test('all duplicate should return 1', () => {
  const str = 'bbbbb';
  expect(lengthOfLongestSubstring(str)).toEqual(1); // b
});

test('max length duplicate multiple time', () => {
  const str = 'abcabcbb';
  expect(lengthOfLongestSubstring(str)).toEqual(3); // abc
});

test('duplicate char', () => {
  const str = 'pwwkew';
  expect(lengthOfLongestSubstring(str)).toEqual(3); // wke
});

test('au should return 2', () => {
  const str = 'au';
  expect(lengthOfLongestSubstring(str)).toEqual(2); // au
});

test('abc should return 3', () => {
  const str = 'abc';
  expect(lengthOfLongestSubstring(str)).toEqual(3); // abc
});

test('dvdf should return 3', () => {
  const str = 'dvdfr';
  expect(lengthOfLongestSubstring(str)).toEqual(4); // vdfr
});

test('aab should return 2', () => {
  const str = 'aab';
  expect(lengthOfLongestSubstring(str)).toEqual(2); // vdfr
});
