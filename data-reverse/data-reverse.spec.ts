import { expect } from 'chai';
import { dataReverse } from './data-reverse';

describe('Data Reverse, 6kyu, https://www.codewars.com/kata/data-reverse', () => {
  it('case 1', () => {
    const result = dataReverse(data1);
    expect(result).to.deep.eq(data2);
  });
  it('case 2', () => {
    const result = dataReverse(data3);
    expect(result).to.deep.eq(data4);
  });
})

const data1 = [1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0]
const data2 = [1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1]
const data3 = [0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1]
const data4 = [0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0]