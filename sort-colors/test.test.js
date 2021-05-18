const {sortColors} = require('./index');

test('case 1', () => {
  const nums = [2, 0, 2, 1, 1, 0];
  const expectedResult = [0, 0, 1, 1, 2, 2];
  const result = sortColors(nums);
  console.log(result);
  expect(result).toEqual(expectedResult);
});

test('case 2', () => {
  const nums = [2, 0];
  const expectedResult = [0, 2];
  const result = sortColors(nums);
  console.log(result);
  expect(result).toEqual(expectedResult);
});
