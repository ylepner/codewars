import { expect } from 'chai';
import { solution } from './multiples-of-3-or-5';

describe('Multiples of 3 or 5, 6kyu, https://www.codewars.com/kata/multiples-of-3-or-5', () => {
  it('should return 0 if  if the number is negative', () => {
    const result = solution(-1);
    expect(result).to.be.eq(0);
  });
  it('should return 3 if we list all the natural numbers below 4', () => {
    const result = solution(4);
    expect(result).to.be.eq(3);
  });
  it('should return 23 if we list all the natural numbers below 10', () => {
    const result = solution(10);
    expect(result).to.be.eq(23);
  });
})