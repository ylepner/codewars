import { expect } from 'chai';
import { runLengthEncoding } from './run-length-encoding';

describe('Run-length encoding, 6kyu, https://www.codewars.com/kata/run-length-encoding', () => {
  it('should return empty array if string is empty', () => {
    const result = runLengthEncoding('');
    expect(result).to.deep.eq([]);
  });
  it('simple case', () => {
    const result = runLengthEncoding('ab');
    expect(result).to.deep.eq([[1, 'a'], [1, 'b']]);
  });
  it('complex case 1', () => {
    const result = runLengthEncoding("hello world!");
    expect(result).to.deep.eq([[1, 'h'], [1, 'e'], [2, 'l'], [1, 'o'], [1, ' '], [1, 'w'], [1, 'o'], [1, 'r'], [1, 'l'], [1, 'd'], [1, '!']]);
  });
  it('complex case 2', () => {
    const result = runLengthEncoding("WWWWWWWWWWWWBWWWWWWWWWWWWBBBWWWWWWWWWWWWWWWWWWWWWWWWBWWWWWWWWWWWWWW");
    expect(result).to.deep.eq([[12, 'W'], [1, 'B'], [12, 'W'], [3, 'B'], [24, 'W'], [1, 'B'], [14, 'W']]);
  });
})