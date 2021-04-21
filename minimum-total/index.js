/**
 *
 * @param {number[][]} triangle
 * @return {number}
 */
const minimumTotal = function(triangle) {
  return triangle.reduce((sum, line)=>{
    const min = Math.min(...line);
    return sum+min;
  }, 0 );
};

module.exports = {
  minimumTotal,
};
