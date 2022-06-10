const myRemove = require('./myRemove.js');

describe('Check removals at myRemove', () => {
  it('Removes 3 when myRemove([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3);
  });
  it('Returns [1, 2, 3, 4] when myRemove([1, 2, 3, 4], 3)', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toContain(1, 2, 3, 4);
  });
  it('Returns unchanged when myRemove([1, 2, 3, 4], 5)', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toContain(1, 2, 3, 4);
  });
})