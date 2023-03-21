import { expect } from 'chai';
import { isAnagram } from './valid-anagram';


describe('Valid Anagram, Easy, https://leetcode.com/problems/valid-anagram/', () => {
  it('case 1', () => {
    const result = isAnagram('', '');
    expect(result).to.be.eq(false);
  });
  it('case 2', () => {
    const result = isAnagram('anagram', 'nagaram');
    expect(result).to.be.eq(true);
  });
})