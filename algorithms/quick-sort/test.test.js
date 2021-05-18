const {quickSort} = require('./index');

test('case 1', () => {
  const nums = [4, 3, 6, 1, 7, 2, 5];
  const expectedResult = [1, 2, 3, 4, 5, 6, 7];
  expect(quickSort(nums, 0, nums.length -1)).toEqual(expectedResult);
});
