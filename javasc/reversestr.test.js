const reverseString = require('./reversestr');

test('the reverse of john is nhoj', () => {
  expect(reverseString('john')).toBe('nhoj');
});
