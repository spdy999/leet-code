/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function (digits) {
  // if (digits.length === 0 ) return [];
  // const phoneNumbers = {
  //   2: 'abc'.split(''),
  //   3: 'def'.split(''),
  //   4: 'ghi'.split(''),
  //   5: 'jkl'.split(''),
  //   6: 'mno'.split(''),
  //   7: 'pqrs'.split(''),
  //   8: 'tuv'.split(''),
  //   9: 'wxyz'.split(''),
  // };
  // const eachStrLength = digits.length;
  // const collector = [''];
  // while (collector.length !== 0) {
  //   const s = collector.shift();
  //   if (s.length === eachStrLength) {
  //     collector.unshift(s);
  //     break;
  //   } else {
  //     phoneNumbers[digits[s.length]].forEach((x) => {
  //       collector.push(s + x);
  //     });
  //   }
  // }
  // return collector;
};

module.exports = {
  letterCombinations,
};
