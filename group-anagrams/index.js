/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const groupAnagrams = function(strs) {
  const resultObj = strs.reduce((acc, str) => {
    const sortedStr = str.split('').sort();
    const val = acc[sortedStr];
    if (val === undefined) {
      acc[sortedStr] = [str];
    } else {
      val.push(str);
      acc[sortedStr] = val;
    }
    return acc;
  }, {});

  return Object.values(resultObj);
};

module.exports = {
  groupAnagrams,
};
