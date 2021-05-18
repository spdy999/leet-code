/**
 *
 * @param {number[]} nums
 * @param {number} min
 * @param {number} max
 * @return {number[]}
 */
const countingSort = (nums, min, max) => {
  const countingArray = new Array(max - min + 1).fill(0);

  for (let i = 0; i < nums.length; i++) {
    const ind = nums[i] - 1;
    countingArray[ind]++;
  }

  let j = 0;
  for (let i = min; i <= max; i++) {
    while (countingArray[i-min]> 0) {
      nums[j++] = i;
      countingArray[i-min]--;
    }
  }
  return nums;
};

module.exports = {countingSort};
