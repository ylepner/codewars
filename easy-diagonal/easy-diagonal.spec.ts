import { expect } from 'chai';
import { diagonal } from './easy-diagonal';


describe('Easy Diagonal, 6kyu, https://www.codewars.com/kata/559b8e46fa060b2c6a0000bf', () => {
  it(`case 1`, () => {
    const result = diagonal(3, 0)
    expect(result).to.be.eq(3);
  });
  it(`case 2`, () => {
    const result = diagonal(7, 1)
    expect(result).to.be.eq(28);
  });
  it(`case 3`, () => {
    const result = diagonal(7, 2)
    expect(result).to.be.eq(56);
  });
  it(`case 4`, () => {
    const result = diagonal(20, 3)
    expect(result).to.be.eq(5985);
  });
  it(`case 5`, () => {
    const result = diagonal(100, 0)
    expect(result).to.be.eq(101);
  });
})