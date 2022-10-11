import { expect } from 'chai';
import { findMaxSum } from './find-max-sum';

describe('Find Max Sum', () => {
  it(`case 1`, () => {
    const result = findMaxSum([5, 9, 7, 11]);
    expect(result).to.be.eq(20);
  });
  it(`case 2`, () => {
    const result = findMaxSum([5, 9, 7, 11, 40, 1, 2, 56, 42, 11, 100, 0]);
    expect(result).to.be.eq(156);
  });
})