/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function(nums1, m, nums2, n) {
  nums1.splice(m);
  nums2.splice(n);
  const result = [];

  while (nums1.length && nums2.length) {
    if (nums1[0] < nums2[0]) {
      result.push(nums1.shift());
    } else {
      result.push(nums2.shift());
    }
  }
  nums1 = [...result, ...nums1, ...nums2];
  return nums1;
};

module.exports = {
  merge,
};
