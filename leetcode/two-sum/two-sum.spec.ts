import { expect } from 'chai';
import { twoSum1 } from './two-sum-1';
import { twoSum2 } from './two-sum-2';

const funcs = [twoSum1, twoSum2]

describe('Two Sum, Easy, https://leetcode.com/problems/two-sum/', () => {
  it('case 1', () => {
    funcs.forEach((func) => {
      const result = func([3, 3], 6);
      expect(result).to.be.deep.eq([0, 1]);
    })
  });
  it('case 2', () => {
    funcs.forEach((func) => {
      const result = func([3, 2, 4], 6);
      expect(result).to.be.deep.eq([1, 2]);
    })
  });
  it('case 3', () => {
    funcs.forEach((func) => {
      const result = func([2, 7, 11, 15], 9);
      expect(result).to.be.deep.eq([0, 1]);
    })
  });
  it('case 4', () => {
    funcs.forEach((func) => {
      const result = func([2, 5, 5, 11], 10);
      expect(result).to.be.deep.eq([1, 2]);
    })
  });
})