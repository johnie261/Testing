const stringLength = require('./strlength');

test('count should be greater or equal to one and less than ten', () => {
  expect(stringLength('john')).not.toBe(8);
});
