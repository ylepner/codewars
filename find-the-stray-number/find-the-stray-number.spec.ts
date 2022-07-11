import { expect } from 'chai';
import { stray } from './find-the-stray-number';


describe('Find the stray number, 7kyu, https://www.codewars.com/kata/57f609022f4d534f05000024', () => {
  it(`case 1`, () => {
    const result = stray([1, 1, 2]);
    expect(result).to.be.eq(2);
  });
  it(`case 2`, () => {
    const result = stray([17, 17, 3, 17, 17, 17, 17]);
    expect(result).to.be.eq(3);
  });
  it(`The input array will always be valid (odd-length >= 3)`, () => {
    const result = stray([1, 2]);
    expect(result).to.be.eq(0);
  });
})