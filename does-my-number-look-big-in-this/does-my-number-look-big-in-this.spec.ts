import { expect } from 'chai';
import { narcissistic } from './does-my-number-look-big-in-this';

describe('Does my number look big in this?, 6kyu, https://www.codewars.com/kata/5287e858c6b5a9678200083c', () => {
  it(`simple case`, () => {
    const result = narcissistic(1);
    expect(result).to.be.eq(true);
  });
  it(`case 1`, () => {
    const result = narcissistic(153);
    expect(result).to.be.eq(true);
  });
  it(`case 2`, () => {
    const result = narcissistic(1652);
    expect(result).to.be.eq(false);
  });
})