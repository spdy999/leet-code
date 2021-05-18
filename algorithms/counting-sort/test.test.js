const {countingSort} = require('./index');

test('case 1', () => {
  const nums = [4, 6, 1, 7, 2, 5];
  const expectedResult = [1, 2, 4, 5, 6, 7];
  const result = countingSort(nums, 1, 7);
  console.log(result);
  expect(result).toEqual(expectedResult);
});
