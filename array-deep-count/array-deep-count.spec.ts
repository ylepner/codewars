import { expect } from 'chai';
import { deepCount } from './array-deep-count';

describe('Array Deep Count, 6kyu, https://www.codewars.com/kata/array-deep-count', () => {
  it('should return the number of ALL elements within an array, including any within inner-level arrays', () => {
    const result = deepCount([1, 2, 3]);
    expect(result).to.be.eq(3);
  });
  it('complex case 1', () => {
    const result = deepCount([[[[[[[[[]]]]]]]]]);
    expect(result).to.be.eq(8);
  });
  it('complex case 12', () => {
    const result = deepCount([1, 2, [3, 4, [5]]]);
    expect(result).to.be.eq(7);
  });
}) 