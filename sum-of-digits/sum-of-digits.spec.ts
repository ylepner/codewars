import { expect } from 'chai';
import { digital_root } from './sum-of-digits';

describe('Sum of Digits / Digital Root, 6kyu, https://www.codewars.com/kata/541c8630095125aba6000c00', () => {
  it('case 1', () => {
    const result = digital_root(16);
    expect(result).to.be.eq(7);
  });
  it('case 2', () => {
    const result = digital_root(942);
    expect(result).to.be.eq(6);
  });
  it('case 3', () => {
    const result = digital_root(132189);
    expect(result).to.be.eq(6);
  });
  it('case 4', () => {
    const result = digital_root(493193);
    expect(result).to.be.eq(2);
  });
})