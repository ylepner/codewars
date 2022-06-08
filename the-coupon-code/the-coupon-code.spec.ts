import { expect } from 'chai';
import { checkCoupon } from './the-coupon-code';

describe('The Coupon Code, 7kyu, https://www.codewars.com/kata/the-coupon-code', () => {
  it('should return false', () => {
    const result = checkCoupon('123a', '123', 'September 5, 2014', 'October 1, 2014');
    expect(result).to.be.eq(false);
  });
  it('should return true', () => {
    const result = checkCoupon('abc', 'abc', 'November 8, 2013', 'November 5, 2014');
    expect(result).to.be.eq(true);
  });
})