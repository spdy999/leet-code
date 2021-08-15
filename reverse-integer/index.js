/**
 * @param {number} x
 * @return {number}
 */
const reverse = function(x) {
  const MAX_NUM = 2**31 - 1;
  const MIN_NUM = -(2**31);
  if (x === 0) return 0;

  const reversedNumStr = reverseNumbers(Math.abs(x));
  const convertedToNum = parseInt(reversedNumStr);
  const finalResult = x < 0 ? convertedToNum * -1 : convertedToNum;

  if (finalResult < MIN_NUM || MAX_NUM < finalResult) return 0;
  return finalResult;
};

/**
 *
 * @param {number} num
 * @return {string}
 */
const reverseNumbers = (num) => {
  return num.toString().split('').reverse().join('');
};

module.exports = {
  reverse,
};
