/**
 * @param {number[]} nums
 * @return {number}
 */
const findPeakElement = function(nums) {
  if (nums.length <= 3) return nums.indexOf(Math.max(...nums));
  for (let i = 0; i <= nums.length - 3; i++) {
    const peekInd = i+1;
    const left = nums[i];
    const peek = nums[peekInd];
    const right = nums[i+2];
    if (left< peek && peek > right) {
      return peekInd;
    }
  }

  // might be slope m=-1 or m=1
  return nums[0] > nums.slice(-1)[0] ? 0: nums.length-1;
};

module.exports = {findPeakElement};
