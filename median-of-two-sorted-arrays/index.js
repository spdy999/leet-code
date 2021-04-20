/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
const findMedianSortedArrays = (nums1, nums2) =>{
  const mergeArr = merge(nums1, nums2);
  const half = mergeArr.length / 2;
  const ceil = Math.ceil(half) - 1;
  const floor = Math.floor(half) - 1;

  if (ceil === floor) {
    return (mergeArr[floor] + mergeArr[floor + 1])/2;
  }
  return mergeArr[ceil];
};

const merge = (nums1, nums2) => {
  const accu = [];
  while (nums1.length && nums2.length) {
    nums1[0] < nums2[0] ? accu.push(nums1.shift()) : accu.push(nums2.shift());
  }

  return [...accu, ...nums1, ...nums2];
};

module.exports = {
  findMedianSortedArrays,
};

