
/**
 *
 * @param {number[]} array
 * @param {number} leftInd
 * @param {number} rightInd
 * @param {number} pivot
 * @return {number}
 */
const partition = (array, leftInd, rightInd, pivot) => {
  while (leftInd <= rightInd) {
    while (array[leftInd] < pivot) {
      leftInd++;
    }
    while (array[rightInd] > pivot) {
      rightInd--;
    }

    // when the code come here, that's mean you found value
    // in left partition which more than pivot and value in
    // right partition which less than pivot
    if (leftInd <= rightInd) {
      // swap
      const leftVal = array[leftInd];
      const rightVal = array[rightInd];
      array[leftInd]= rightVal;
      array[rightInd] = leftVal;
      leftInd++;
      rightInd--;
    }
  }
  return leftInd;
};

/**
 *
 * @param {number[]} array
 * @param {number} leftInd
 * @param {number} rightInd
 */
const quickSort = (array, leftInd, rightInd) => {
  if (leftInd >= rightInd) return array;
  const mid = Math.floor((leftInd+rightInd) / 2);
  const pivot = array[mid];
  const pivotIndex = partition(array, leftInd, rightInd, pivot);
  quickSort(array, leftInd, pivotIndex-1);
  quickSort(array, pivotIndex, rightInd);
};

module.exports = {quickSort};
