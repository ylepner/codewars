import { expect } from 'chai';
import { numberOfPairs } from './pair-of-gloves';

describe('Pair of gloves, 6kyu, https://www.codewars.com/kata/pair-of-gloves', () => {
  it('should return 0 if no pair values in arr', () => {
    const result = numberOfPairs(['red', 'green', 'blue']);
    expect(result).to.eq(0);
  });
  it('should return 2 if arr is ["red", "green", "red", "blue", "blue"]', () => {
    const result = numberOfPairs(["red", "green", "red", "blue", "blue"]);
    expect(result).to.eq(2);
  });
  it('should return 3 if arr is ["red", "red", "red", "red", "red", "red"]', () => {
    const result = numberOfPairs(["red", "red", "red", "red", "red", "red"]);
    expect(result).to.eq(3);
  });
})