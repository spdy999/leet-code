const {findPeakElement} = require('./index');

test('case 1', () => {
  const nums = [1, 2, 3, 1];
  expect(findPeakElement(nums)).toEqual(2);
});

test('case 2', () => {
  const nums =[1, 2, 1, 3, 5, 6, 4];
  expect(findPeakElement(nums)).toEqual(1);
});

test('case 3', () => {
  const nums =[1];
  expect(findPeakElement(nums)).toEqual(0);
});

test('case 4', () => {
  const nums =[1, 2, 3, 4];
  expect(findPeakElement(nums)).toEqual(3);
});

test('case 5', () => {
  const nums =[4, 3, 2, 1];
  expect(findPeakElement(nums)).toEqual(0);
});
