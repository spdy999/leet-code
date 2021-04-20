/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (result.length === 2) break;
    const left = nums[i];
    for (let j = i+1; j < nums.length; j++) {
      const right = nums[j];
      if (left + right === target) {
        result.push(i, j);
        break;
      }
    }
  }
  return result;
};

// const checkTwoSum()

module.exports = {
  twoSum,
};
