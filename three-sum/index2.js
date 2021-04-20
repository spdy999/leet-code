/**
 * @param {number[]} nums
 * @return {boolean}
 */
const threeSum = (nums) => {
  if (nums.length < 3) return [];
  const collector =[];
  const pastSet = new Set();
  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];
    const second = nums[i+1];
    pastSet.add(nums[i]);
    if (first === second) continue;

    nums.slice(i+1).forEach((third) => {
      const sumOfLastTwo = nums[i];
      const sumOfFirstTwo = first + second;
      if (sumOfFirstTwo + third === 0 && !pastSet.has(third)) {
        collector.push([first, second, third]);
      };
    });
  }
  return collector;
};
module.exports = {
  threeSum,
};
