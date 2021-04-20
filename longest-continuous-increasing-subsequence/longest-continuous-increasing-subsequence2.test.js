const {findLengthOfLCIS} = require('./index2');
const bigFile = require('./test.json');

test('case 1', () => {
  const nums = [1, 3, 5, 4, 7];
  expect(findLengthOfLCIS(nums)).toEqual(3);
});

test('case 2', () => {
  const nums = [2, 2, 2, 2, 2];
  expect(findLengthOfLCIS(nums)).toEqual(1);
});

// test('case 3', () => {
//   const nums = [1, 3, 2, 1, 7];
//   expect(findLengthOfLCIS(nums)).toEqual(2);
// });

test('empty array', ()=> {
  const nums = [];
  expect(findLengthOfLCIS(nums)).toEqual(0);
});
// test('left === right', () => {
//
// });

test('bigFile', ()=> {
  expect(findLengthOfLCIS(bigFile)).toEqual(1144);
});


// test('case 6', () => {
//   const nums = [1, 3, 5, 5, 7, 8, 9];
//   expect(findLengthOfLCIS(nums)).toEqual(4);
// });
