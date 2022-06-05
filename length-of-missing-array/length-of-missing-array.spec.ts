import { expect } from 'chai';
import { getLengthOfMissingArray } from './length-of-missing-array';

describe('Length of missing array, 6kyu, https://www.codewars.com/kata/length-of-missing-array', () => {
  it('should return 0 if the array of arrays is null or empty', () => {
    const result = getLengthOfMissingArray([]);
    expect(result).to.be.eq(0);
  });
  it('should return 3 if the array of arrays is [[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]', () => {
    const result = getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]);
    expect(result).to.be.eq(3);
  });
  it('should count null as value in array', () => {
    const result = getLengthOfMissingArray([[null], [null, null, null]]);
    expect(result).to.be.eq(2);
  });
  it('complex case', () => {
    const result = getLengthOfMissingArray([[0, 0, 3, 2],
    [3, 2, 2],
    [2, 4, 1, 0, 3, 1, 4],
    [3, 1, 1, 4, 2]]);
    expect(result).to.be.eq(6);
  });
  it('another complex case', () => {
    const result = getLengthOfMissingArray([
      [4],
      [],
      [0, 1, 4],
      [1, 3],
      [1, 3, 4, 1, 4, 3, 2],
      [1, 0, 0, 0, 2, 4],
      [3, 2, 3, 1, 2, 2, 1, 3],
      [3, 2, 3, 0],
      [1, 0, 2, 2, 4, 4, 4, 3, 1]
    ]);

  })
})