import { expect } from 'chai';
import { arrayDiff } from './array.diff';

describe('Array.diff, 6kyu, https://www.codewars.com/kata/523f5d21c841566fde000009', () => {
  it('case 1', () => {
    const result = arrayDiff([1, 2], [1]);
    expect(result).to.be.deep.eq([2]);
  })
  it('case 2', () => {
    const result = arrayDiff([1, 2, 3], [1, 2]);
    expect(result).to.be.deep.eq([3]);
  })
  it('case 3', () => {
    const result = arrayDiff([1, 2, 2], [1]);
    expect(result).to.be.deep.eq([2, 2]);
  })
  it('case 4', () => {
    const result = arrayDiff([1, 2, 2], [2]);
    expect(result).to.be.deep.eq([1]);
  })
  it('case 5', () => {
    const result = arrayDiff([], [1, 2]);
    expect(result).to.be.deep.eq([]);
  })
  it('case 6', () => {
    const result = arrayDiff([1, 2, 2], []);
    expect(result).to.be.deep.eq([1, 2, 2]);
  })
})