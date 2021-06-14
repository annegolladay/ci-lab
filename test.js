const { getGreeting, add } = require('./project');

test('can create a basic greeting', () => {
  expect(getGreeting('Sam')).toBe("Hi Sam");
});

test('greeting two', () => {
  expect(getGreeting('Annie')).toBe("Hi Annie")
})

test('add numbers', () => {
  expect(add(2, 2)).toEqual(4)
})

