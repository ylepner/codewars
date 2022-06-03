import { expect } from 'chai';
import { highAndLow } from './highest-and-lowest'

describe('Highest and Lowest, https://www.codewars.com/kata/highest-and-lowest', () => {
  it('should return same number if one number string', () => {
    const result = highAndLow('123');
    expect(result).to.be.eq('123 123');
  });
  it('should return two numbers separated by a single space, and highest number is first (simple)', () => {
    const result = highAndLow('123 456')
    expect(result).to.be.eq('456 123')
  })
  it('should return two numbers separated by a single space, and highest number is first (difficult)', () => {
    const result = highAndLow('8 3 -5 42 432 -1 0 0 -9 4 -111 7 4 -4')
    expect(result).to.be.eq('432 -111')
  })
})