import { expect } from 'chai';
import { beeramid } from './beeramid';

describe('Beeramid, 5kyu, https://www.codewars.com/kata/51e04f6b544cf3f6550000c1', () => {
  it('case 1', () => {
    const result = beeramid(0, 4);
    expect(result).to.be.eq(0);
  });
  it('case 2', () => {
    const result = beeramid(-1, 4);
    expect(result).to.be.eq(0);
  });
  it('case 3', () => {
    const result = beeramid(3, 4);
    expect(result).to.be.eq(0);
  });
  it('case 4', () => {
    const result = beeramid(4, 4);
    expect(result).to.be.eq(1);
  });
  it('case 5', () => {
    const result = beeramid(9, 2);
    expect(result).to.be.eq(1);
  });
  it('case 6', () => {
    const result = beeramid(10, 2);
    expect(result).to.be.eq(2);
  });
  it('case 7', () => {
    const result = beeramid(11, 2);
    expect(result).to.be.eq(2);
  });
  it('case 8', () => {
    const result = beeramid(21, 1.5);
    expect(result).to.be.eq(3);
  });
  it('case 9', () => {
    const result = beeramid(455, 5);
    expect(result).to.be.eq(6);
  });
})