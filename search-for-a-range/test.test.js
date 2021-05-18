const {searchRange} = require('./index');

test('case 1', () => {
  const nums = [5, 7, 7, 8, 8, 10]; const target = 8;
  expect(searchRange(nums, target)).toEqual([3, 4]);
});

test('case 2', () => {
  const nums = [5, 7, 7, 8, 8, 10]; const target = 6;
  expect(searchRange(nums, target)).toEqual([-1, -1]);
});

test('case 3', () => {
  const nums = []; const target = 0;
  expect(searchRange(nums, target)).toEqual([-1, -1]);
});

test('case 4', () => {
  const nums = [1]; const target = 1;
  expect(searchRange(nums, target)).toEqual([0, 0]);
});

test('case 5', () => {
  const nums = [3, 3, 3];
  const target = 3;
  expect(searchRange(nums, target)).toEqual([0, 2]);
});
