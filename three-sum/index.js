/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const threeSum = function(nums) {
  if (nums.length < 3) return [];
  const resultMap = {};
  for (let i = 0; i < nums.length -2; i++) {
    for (let j = i+1; j < nums.length-1; j++) {
      const first = nums[i];
      const sec = nums[j];
      const third = 0-(first + sec);
      const foundThird = nums.slice(j+1).find((num) => num === third);
      if (foundThird !== undefined) {
        const keyArr = [first, sec, third].sort();
        resultMap[keyArr.join(',')] = '1';
      }
    }
  }
  const threeSumKeys = Object.keys(resultMap).sort();
  return threeSumKeys.map((numsStr) => numsStr.split(',').map((num) => parseInt(num)));
};
module.exports = {
  threeSum,
};
