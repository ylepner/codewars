import { expect } from 'chai';
import { isValid } from './valid-parentheses';

describe('Valid Parentheses, Easy, https://leetcode.com/problems/valid-parentheses/', () => {
  it('case 1', () => {
    const result = isValid('()');
    expect(result).to.be.eq(true);
  });
  it('case 2', () => {
    const result = isValid('(]');
    expect(result).to.be.eq(false);
  });
  it('case 3', () => {
    const result = isValid('()[]{}');
    expect(result).to.be.eq(true);
  });
  it('case 4', () => {
    const result = isValid('[');
    expect(result).to.be.eq(false);
  });
})