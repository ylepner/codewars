import { expect } from 'chai';
import { calculate } from './javascript-mathematician';

describe('Javascript Mathematician, 7kyu, https://www.codewars.com/kata/javascript-mathematician', () => {
  it('should return the sum of the values of all of the arguments of function', () => {
    const result = calculate(1)(1);
    expect(result).to.be.eq(2);
  });
  it('complex case', () => {
    const result = calculate(2, 4)(3, 7, 1);
    expect(result).to.be.eq(17);
  });
})