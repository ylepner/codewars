import { expect } from 'chai';
import { multiFilter } from './multifilter';

describe('MultiFilter, 6kyu, https://www.codewars.com/kata/multifilter', () => {
  it('case 1', () => {
    const result = [1, 2, 3, 4, 10, 11, 12, 20, 21, 22].filter(multiFilter(isEven, isGTten));
    expect(result).to.be.deep.eq([12, 20, 22]);
  });
})

function isEven(el: number) {
  return el % 2 === 0;
}

function isGTten(el: number) {
  return el > 10;
}