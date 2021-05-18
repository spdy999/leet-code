const {findKthLargest} = require('./index');

test('case 1', ()=> {
  const nums = [3, 2, 1, 5, 6, 4];
  const k = 2;
  const result = findKthLargest(nums, k);
  expect(result).toEqual(5);
});

test('case 2', ()=> {
  const nums = [3, 2, 3, 1, 2, 4, 5, 5, 6]; const k = 4;
  const result = findKthLargest(nums, k);
  expect(result).toEqual(4);
});
