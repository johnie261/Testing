const Capitalize = require('./capitalize');

test('john first character is capitalized', () => {
  expect(Capitalize('John')).toBe('John');
});