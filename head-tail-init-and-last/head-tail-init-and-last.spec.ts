import { expect } from 'chai';
import { head, tail, init, last } from './head-tail-init-and-last';

describe('Head, Tail, Init and Last, 7kyu, https://www.codewars.com/kata/head-tail-init-and-last', () => {
  it(`'tail' should return all elements of array except first`, () => {
    const result = tail([1, 2, 3, 4, 5]);
    expect(result).to.deep.eq([2, 3, 4, 5]);
  });
  it(`'head' should return first element of array`, () => {
    const result = head([1, 2, 3, 4, 5]);
    expect(result).to.be.eq(1);
  });
  it(`'init' should return all elements except last`, () => {
    const result = init([1, 2, 3, 4, 5]);
    expect(result).to.deep.eq([1, 2, 3, 4]);
  });
  it(`'last' should return the last element of array`, () => {
    const result = last([1, 2, 3, 4, 5]);
    expect(result).to.be.eq(5);
  });
  it('should return the same arr', () => {
    const arr = [1]
    const result = tail(arr);
    expect(result).to.be.not.eq(arr);
    expect(arr).to.be.deep.eq([1]);
  });
})