import { expect } from 'chai';
import { F, M } from './mutual-recursion';

describe('Mutual Recursion, 6kyu, https://www.codewars.com/kata/mutual-recursion', () => {
  it('base case 1', () => {
    const result = F(0);
    expect(result).to.eq(1);
  });
  it('base case 2', () => {
    const result = M(0);
    expect(result).to.eq(0);
  });
  it('case 1', () => {
    const result = F(7);
    expect(result).to.eq(5);
  });
  it('case 2', () => {
    const result = M(7);
    expect(result).to.eq(4);
  });
})