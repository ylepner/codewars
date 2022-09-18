import { expect } from 'chai';
import { findInArray, neverTrue, trueIfEven, trueIfLengthEqualsIndex, trueIfValueEqualsIndex } from './find-within-array';

describe('Get the Middle Character, 7kyu, https://www.codewars.com/kata/get-the-middle-character', () => {
  it(`case 1`, () => {
    const result = findInArray([], trueIfEven);
    expect(result).to.be.eq(-1);
  })
  it(`case 2`, () => {
    const result = findInArray([1, 3, 5, 6, 7], trueIfEven);
    expect(result).to.be.eq(3);
  })
  it(`case 3`, () => {
    const result = findInArray([2, 4, 6, 8], trueIfEven);
    expect(result).to.be.eq(0);
  })
  it(`case 4`, () => {
    const result = findInArray([2, 4, 6, 8], neverTrue);
    expect(result).to.be.eq(-1);
  })
  it(`case 5`, () => {
    const result = findInArray([13, 5, 3, 1, 4, 5], trueIfValueEqualsIndex);
    expect(result).to.be.eq(4);
  })
  it(`case 6`, () => {
    const result = findInArray(["one", "two", "three", "four", "five", "six"], trueIfLengthEqualsIndex);
    expect(result).to.be.eq(4);
  })
  it(`case 7`, () => {
    const result = findInArray(["bc", "af", "d", "e"], trueIfLengthEqualsIndex);
    expect(result).to.be.eq(-1);
  })
})
