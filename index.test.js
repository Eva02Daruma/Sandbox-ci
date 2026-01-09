const weekNum = require('./index.js');

test('that weekNum returns a value', () => {
  expect(weekNum).not.toBeNull();
});

// new test added
test('that weekNum returns a number', () => {
  expect(weekNum).toBeDefined();
});
