import { expect } from 'chai';
import { getMatrix } from './matrix-creation';

describe('Matrix creation, 7kyu, https://www.codewars.com/kata/matrix-creation', () => {
  it('should return an empty array if size <= 0', () => {
    const result = getMatrix(-1);
    expect(result).to.be.deep.eq([]);
  });
  it('should return [[1]] if size is 1', () => {
    const result = getMatrix(1);
    expect(result).to.be.deep.eq([[1]]);
  });
  it('case 1', () => {
    const result = getMatrix(2);
    expect(result).to.be.deep.eq([[1, 0], [0, 1]]);
  });
  it('case 2', () => {
    const result = getMatrix(5);
    expect(result).to.be.deep.eq([[1, 0, 0, 0, 0], [0, 1, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 1, 0], [0, 0, 0, 0, 1]]);
  });
})