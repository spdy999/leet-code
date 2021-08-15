const {reverse} = require('./index');

test('case 1', () => {
  expect(reverse(123)).toEqual(321);
});

test('case 2', () => {
  expect(reverse(-123)).toEqual(-321);
});

test('case 3', () => {
  expect(reverse(120)).toEqual(21);
});

test('case 4', () => {
  expect(reverse(0)).toEqual(0);
});

test('case 5', () => {
  expect(reverse(1534236469)).toEqual(0);
});
