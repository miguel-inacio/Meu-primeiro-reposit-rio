const sum = require('./sum.js');

describe('sum functionality', () => {
  it('Returns 9 when receives sum(4,5)', () => {
    expect(sum(4,5)).toEqual(9);
  });
  it('Returns 0 when receives sum(0,0)', () => {
    expect(sum(0,0)).toEqual(0);
  });
  it('Returns an error when a parameter is not a number', () => {
    expect(() => sum(4, '5')).toThrowError('Os parâmetros precisam ser números!');
  });
});