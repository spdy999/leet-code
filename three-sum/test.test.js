const {threeSum} = require('./index');
const bigFile = require('./leetcode.json');

test('[] should return []', () => {
  const nums = [];
  expect(threeSum(nums)).toEqual([]);
});

test('array length less than 3 should return []', () => {
  const nums = [0];
  expect(threeSum(nums)).toEqual([]);

  const nums2 = [0, 1];
  expect(threeSum(nums2)).toEqual([]);
});

test('case 1', ()=> {
  const nums = [-1, 0, 1, 2, -1, -4];
  expect(threeSum(nums)).toEqual([[-1, -1, 2], [-1, 0, 1]]);
});

test('case 2', ()=> {
  const nums = [0, 0, 0];
  expect(threeSum(nums)).toEqual([[0, 0, 0]]);
});

test('case 3', ()=> {
  const nums = [3, -2, 1, 0];
  expect(threeSum(nums)).toEqual([]);
});

test('case 4', ()=>{
  expect(threeSum(bigFile)).toEqual([-1, 0, 1], [0, 0, 0] );
});
