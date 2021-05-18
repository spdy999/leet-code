const {topKFrequent} = require('./index');
test('case 1', () => {
  const nums = [1, 1, 1, 2, 2, 3];
  const k = 2;
  const expected = [1, 2];
  const result = topKFrequent(nums, k);
  expect(result.sort()).toEqual(expected.sort());
});

test('case 2', () => {
  const nums = [1];
  const k = 1;
  const expected = [1];
  const result = topKFrequent(nums, k);
  expect(result.sort()).toEqual(expected.sort());
});

test('case 3', () => {
  const nums = [3, 0, 1, 0];
  const k = 1;
  const expected = [0];
  const result = topKFrequent(nums, k);
  expect(result.sort()).toEqual(expected.sort());
});

test('case 4', () => {
  const nums = [1, 1, 1, 2, 2, 2, 3, 3, 3];
  const k = 3;
  const expected = [1, 2, 3];
  const result = topKFrequent(nums, k);
  expect(result.sort()).toEqual(expected.sort());
});

test('case 5', () => {
  const nums = [5, 3, 1, 1, 1, 3, 5, 73, 1];
  const k = 3;
  const expected = [1, 3, 5];
  const result = topKFrequent(nums, k);
  expect(result.sort()).toEqual(expected.sort());
});

test('case 6', () => {
  const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6, 7, 7, 8, 2, 3, 1, 1, 1, 10, 11, 5, 6, 2, 4, 7, 8, 5, 6];
  const k = 10;
  const expected = [1, 2, 5, 3, 6, 7, 4, 8, 10, 11];

  const result = topKFrequent(nums, k);
  expect(result.sort()).toEqual(expected.sort());
});

test('case 7', () => {
  const nums = [5, 1, -1, -8, -7, 8, -5, 0, 1, 10, 8, 0, -4, 3, -1, -1, 4, -5, 4, -3, 0, 2, 2, 2, 4, -2, -4, 8, -7, -7, 2, -8, 0, -8, 10, 8, -8, -2, -9, 4, -7, 6, 6, -1, 4, 2, 8, -3, 5, -9, -3, 6, -8, -5, 5, 10, 2, -5, -1, -5, 1, -3, 7, 0, 8, -2, -3, -1, -5, 4, 7, -9, 0, 2, 10, 4, 4, -4, -1, -1, 6, -8, -9, -1, 9, -9, 3, 5, 1, 6, -1, -2, 4, 2, 4, -6, 4, 4, 5, -5];
  const k = 7;
  const expected = [4, -1, 2, -5, -8, 0, 8];

  const result = topKFrequent(nums, k);
  expect(result.sort()).toEqual(expected.sort());
});
