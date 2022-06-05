import { expect } from 'chai';
import { sortByBit } from './sorting-by-bits';

describe('Sorting by bits, 6kyu, https://www.codewars.com/kata/sorting-by-bits', () => {
  it('should return [1, 7] if arr is [7, 1]', () => {
    const result = sortByBit([7, 1]);
    expect(result).to.deep.eq([1, 7]);
  });
  it('complex case first', () => {
    const result = sortByBit([3, 8, 3, 6, 5, 7, 9, 1]);
    expect(result).to.deep.eq([1, 8, 3, 3, 5, 6, 9, 7]);
  });
  it('complex case second', () => {
    const result = sortByBit([9, 4, 5, 3, 5, 7, 2, 56, 8, 2, 6, 8, 0]);
    expect(result).to.deep.eq([0, 2, 2, 4, 8, 8, 3, 5, 5, 6, 9, 7, 56]);
  });
  it('should return the same arr', () => {
    const arr = [1]
    const result = sortByBit(arr);
    expect(result).to.deep.eq(arr);
  });
})