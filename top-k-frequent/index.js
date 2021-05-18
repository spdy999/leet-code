/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
const topKFrequent = function(nums, k) {
  const dict = {};
  nums.forEach((num) => {
    dict[num] = dict[num] ? dict[num] += 1 : 1;
  });
  const sortedDictVals = Object.values(dict).sort((a, b) => a-b);
  const sortedDictValsK = sortedDictVals.slice(-k);


  const min = sortedDictValsK[0];
  const max = sortedDictValsK.slice(-1)[0];
  const result = [];
  for (const [key, val] of Object.entries(dict)) {
    if (min <= val && val<=max) {
      result.push(parseInt(key, 10));
    }
  }
  return result;
};

module.exports = {topKFrequent};
