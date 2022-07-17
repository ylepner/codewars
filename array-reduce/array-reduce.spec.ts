import { expect } from 'chai';
import './array-reduce'

describe('Array#reduce, 6kyu, https://www.codewars.com/kata/5411e3e95f3a7f6a7a0000e3', () => {
  it('string reducer', () => {
    const result = ['a', 'y', '!'].reduce2(function (x, y) { return x + y }, 'y')
    expect(result).to.be.eq('yay!');
  });
  it('number reducer', () => {
    const result = [1, 2, 3].reduce2(function (sum, next) { return sum + next }, 0)
    expect(result).to.be.eq(6);
  });
  it('object reducer', () => {
    const result = ['a', 'b', 'a'].reduce(function (obj: Record<string, number>, elem) { if (!obj[elem]) obj[elem] = 0; obj[elem] += 1; return obj }, {})
    expect(result).to.be.deep.eq({ 'a': 2, 'b': 1 });
  });
})