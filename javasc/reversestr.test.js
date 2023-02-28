const reverseString = require('./reversestr.js');

test('the reverse of john is nhoj', () => {
    expect(reverseString('john')).toBe('nhoj');
})

