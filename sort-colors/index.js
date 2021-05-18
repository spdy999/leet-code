/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function(nums) {
  const min = 0;
  const max = 2;
  const countingArr = new Array(3).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const ind = nums[i] - min;
    countingArr[ind]++;
  }

  let j = 0;
  for (let i = min; i <= max; i++) {
    while (countingArr[i-min]>0) {
      nums[j++] = i;
      countingArr[i-min]--;
    }
  }
  return nums;
};

module.exports = {sortColors};
