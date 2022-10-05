import { expect } from 'chai';
import { towelSort } from './towel-sort';

describe('Towel Sort, https://github.com/ylepner/towel-sort', () => {
  it('Should return empty array if no params passed', () => {
    const result = towelSort();
    expect(result).to.deep.eq([]);
  });
  it('Should return empty array if matrix is empty', () => {
    const result = towelSort([]);
    expect(result).to.deep.eq([]);
  });
  it('Should do towelSort', () => {
    const matrix = [
      [1, 2],
      [3, 4],
    ];
    const result = towelSort(matrix);
    expect(result).to.deep.eq([1, 2, 4, 3]);
  });

  it('Should do towelSort case 2', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
    ];
    const result = towelSort(matrix);
    expect(result).to.deep.eq([1, 2, 3, 6, 5, 4, 7, 8, 9]);
  });

  it('Should do towelSort case 3', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16],
    ];
    const result = towelSort(matrix);
    expect(result).to.deep.eq([1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12, 16, 15, 14, 13]);
  });

  it('Should do towelSort correctly with nonsquare matrix', () => {
    const matrix = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
    ];
    const result = towelSort(matrix);
    expect(result).to.deep.eq([1, 2, 3, 4, 8, 7, 6, 5, 9, 10, 11, 12,]);
  });

  it('Should do towelSort case 4', () => {
    const matrix = [
      [1, 2, 3],
      [4, 5, 6],
    ];
    const result = towelSort(matrix);
    expect(result).to.deep.eq([1, 2, 3, 6, 5, 4,]);
  });

  it('Should do towelSort case 5', () => {
    const matrix = [
      [1, 2, 4],
      [5, 6, 7, 8],
      [9, 12],
    ];
    const result = towelSort(matrix);
    expect(result).to.deep.eq([1, 2, 4, 8, 7, 6, 5, 9, 12]);
  });
});
