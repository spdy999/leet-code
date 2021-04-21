const {minimumTotal} = require('./index');

test('case 1', ()=> {
  const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
  expect(minimumTotal(triangle)).toEqual(11);
});

test('case 2', ()=> {
  const triangle = [[-1], [2, 3], [1, -1, -3]];
  expect(minimumTotal(triangle)).toEqual(-1);
});


