import { expect } from 'chai';
import { isPalindrome } from './valid-palindrome';


describe('Length of missing array, 6kyu, https://www.codewars.com/kata/length-of-missing-array', () => {
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