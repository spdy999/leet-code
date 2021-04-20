/**
 * @param {number[]} nums
 * @return {number}
 */
const findLengthOfLCIS = (nums) => {
  if (nums.length === 0) return 0;
  let max = 0;
  let count = 1;
  for (let i = 0; i < nums.length -1; i++) {
    const left = nums[i];
    const right = nums[i + 1];
    if (left === right) {
      // console.log(left, right, i + 1);
      count = 1;
    } else if (left < right) {
      count += 1;
    } else if (left > right) {
      count = 1;
    }
    if (count > max) max = count;
    else if (count === max && left === right) count = 1;
  }
  return max === 0 ? 1 : max;
};

module.exports = {
  findLengthOfLCIS,
};
