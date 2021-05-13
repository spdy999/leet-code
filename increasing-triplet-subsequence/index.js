/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function(nums) {
  let small = Number.MAX_SAFE_INTEGER;
  let big = Number.MAX_SAFE_INTEGER;
  for (const x of nums) {
    if (x <= small) {
      small = x;
    } else if (x <= big) {
      big = x;
    } else {
      return true;
    }
  }
  return false;
};

module.exports = {
  increasingTriplet,
};
