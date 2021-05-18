/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function(nums, target) {
  const notFoundRange = [-1, -1];
  if (nums.length === 0) return notFoundRange;

  const firstInd = nums.indexOf(target);
  if (firstInd === -1) return notFoundRange;
  let lastInd = firstInd;
  for (let i = firstInd + 1; i < nums.length; i++) {
    if (target === nums[i]) {
      lastInd = i;
    } else {
      break;
    }
  }


  return [firstInd, lastInd];
};
module.exports = {searchRange};
