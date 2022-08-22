import { expect } from 'chai';
import { inAscOrder } from './are-the-numbers-in-order';

describe('Are the numbers in order?, 7kyu, https://www.codewars.com/kata/56b7f2f3f18876033f000307', () => {
  it('case 1', () => {
    const result = inAscOrder([1, 2, 4, 7, 19])
    expect(result).to.be.eq(true);
  });
  it('case 2', () => {
    const result = inAscOrder([1, 2, 3, 4, 5])
    expect(result).to.be.eq(true);
  });
  it('case 3', () => {
    const result = inAscOrder([1, 6, 10, 18, 2, 4, 20])
    expect(result).to.be.eq(false);
  });
  it('case 4', () => {
    const result = inAscOrder([9, 8, 7, 6, 5, 4, 3, 2, 1])
    expect(result).to.be.eq(false);
  });
})