/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const findKthLargest = function(nums, k) {
  const sortedNums = nums.sort((a, b) => -(a-b));

  return sortedNums[k-1];
};
module.exports = {findKthLargest};
