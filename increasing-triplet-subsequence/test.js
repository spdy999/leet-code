const {increasingTriplet} = require('./index');

test('case 1', ()=> {
  const nums = [1, 2, 3, 4, 5];
  expect(increasingTriplet(nums)).toBeTruthy();
});

test('case 2', ()=> {
  const nums = [5, 4, 3, 2, 1];
  expect(increasingTriplet(nums)).toBeFalsy();
});

test('case 3', ()=> {
  const nums = [2, 1, 5, 0, 4, 6];
  expect(increasingTriplet(nums)).toBeTruthy();
});

test('case 4', ()=> {
  const nums = [20, 100, 10, 12, 5, 13];
  expect(increasingTriplet(nums)).toBeTruthy();
});
