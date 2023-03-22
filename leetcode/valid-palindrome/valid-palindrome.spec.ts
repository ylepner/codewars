import { expect } from 'chai';
import { isPalindrome } from './valid-palindrome';


describe('Valid Palindrome, Easy, https://leetcode.com/problems/valid-palindrome/', () => {
  it('case 1', () => {
    const result = isPalindrome('race a car');
    expect(result).to.be.eq(false);
  });
  it('case 2', () => {
    const result = isPalindrome('noon');
    expect(result).to.be.eq(true);
  });
  it('case 3', () => {
    const result = isPalindrome('A man, a plan, a canal: Panama');
    expect(result).to.be.eq(true);
  });
})