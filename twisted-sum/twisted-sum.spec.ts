import { expect } from 'chai';
import { twistedSum } from './twisted-sum';

describe('Twisted Sum, 6kyu, https://www.codewars.com/kata/527e4141bb2ea5ea4f00072f', () => {
  it('case 1', () => {
    const result = twistedSum(4);
    expect(result).to.be.eq(10);
  });
  it('case 2', () => {
    const result = twistedSum(10);
    expect(result).to.be.eq(46);
  });
  it('case 3', () => {
    const result = twistedSum(11);
    expect(result).to.be.eq(48);
  });
  it('case 4', () => {
    const result = twistedSum(12);
    expect(result).to.be.eq(51);
  });
})