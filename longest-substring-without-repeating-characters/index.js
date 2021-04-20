/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
  if (s.length === 0) return 0;
  let max = 1;
  let count = 0;
  let accStr = s[0];

  for (let i = 1; i < s.length; i++) {
    const current = s[i];
    const indexFound = accStr.indexOf(current);
    if (indexFound !== undefined) {
      count = accStr.length;
      max = max < count ? count : max;
      accStr = accStr.slice(indexFound + 1);
    }
    accStr += current;
  }

  const accLength = accStr.length;
  return accLength > max ? accLength : max;
};
module.exports = {
  lengthOfLongestSubstring,
};
