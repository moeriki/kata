const {add} = require('./');

it('should add I and I', () => {
  expect(add('I', 'I')).toBe('II');
})

it('should add I and II', () => {
  expect(add('I', 'II')).toBe('III');
})
