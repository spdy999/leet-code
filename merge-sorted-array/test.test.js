const {merge} = require('./index');

test('case 1', ()=>{
  const nums1 = [1, 2, 3, 0, 0, 0];
  const m = 3;
  const nums2 = [2, 5, 6];
  const n = 3;
  expect(merge(nums1, m, nums2, n)).toEqual([1, 2, 2, 3, 5, 6]);
});
