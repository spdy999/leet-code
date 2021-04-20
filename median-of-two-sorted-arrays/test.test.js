const {findMedianSortedArrays} = require('./index');

test('median', () => {
  const nums1 = [1, 3];
  const nums2 = [2];
  expect(findMedianSortedArrays(nums1, nums2)).toEqual(2.00000);
});

test('median 2', () => {
  const nums1 = [1, 2];
  const nums2 = [3, 4];
  expect(findMedianSortedArrays(nums1, nums2)).toEqual(2.50000);
});
