import { expect } from 'chai';
import { solution } from './mean-square-error';

describe('Mean Square Error, 5kyu, https://www.codewars.com/kata/51edd51599a189fe7f000015', () => {
  it('case 1', () => {
    const result = solution([1, 2, 3], [4, 5, 6]);
    expect(result).to.be.eq(9);
  });
  it('case 2', () => {
    const result = solution([10, 20, 10, 2], [10, 25, 5, -2]);
    expect(result).to.be.eq(16.5);
  });
  it('case 3', () => {
    const result = solution([0, -1], [-1, 0]);
    expect(result).to.be.eq(1);
  });
})