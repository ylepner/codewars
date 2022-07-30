import { expect } from 'chai';
import { generateDiagonal } from './pascal\'s-diagonals';

describe(`Pascal's Diagonals, 5kyu, https://www.codewars.com/kata/576b072359b1161a7b000a17`, () => {
  it('Case 1', () => {
    const result = generateDiagonal(2, 5)
    expect(result).to.be.deep.eq([1, 3, 6, 10, 15]);
  });
  it('Case 2', () => {
    const result = generateDiagonal(1, 10)
    expect(result).to.be.deep.eq([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
  it('Case 3', () => {
    const result = generateDiagonal(3, 7)
    expect(result).to.be.deep.eq([1, 4, 10, 20, 35, 56, 84]);
  });
})