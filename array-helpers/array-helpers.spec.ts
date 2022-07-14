import { expect } from 'chai';
import './array-helpers'

describe('Can you keep a secret?, 6kyu, https://www.codewars.com/kata/array-helpers', () => {
  it(`case 'square'`, () => {
    const result = numbers.square();
    expect(result).to.be.deep.eq([1, 4, 9, 16, 25]);
  });
  it(`case 'cube'`, () => {
    const result = numbers.cube();
    expect(result).to.be.deep.eq([1, 8, 27, 64, 125]);
  });
  it(`case 'average'`, () => {
    const result = numbers.average();
    expect(result).to.be.eq(3);
  });
  it(`case 'sum'`, () => {
    const result = numbers.sum();
    expect(result).to.be.eq(15);
  });
  it(`case 'even'`, () => {
    const result = numbers.even();
    expect(result).to.be.deep.eq([2, 4]);
  });
  it(`case 'odd'`, () => {
    const result = numbers.odd();
    expect(result).to.be.deep.eq([1, 3, 5]);
  })
})

const numbers = [1, 2, 3, 4, 5];
