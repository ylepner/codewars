import { expect } from 'chai';
import { unluckyDays } from './unlucky-days';

describe('Unlucky Days, 7kyu, https://www.codewars.com/kata/unlucky-days', () => {
  it('should return 3 if the year is 2015', () => {
    const result = unluckyDays(2015);
    expect(result).to.be.eq(3);
  });
  it('should return 1 if the year is 1986', () => {
    const result = unluckyDays(1986);
    expect(result).to.be.eq(1);
  });
})