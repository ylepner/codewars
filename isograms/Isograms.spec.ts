import { expect } from 'chai';
import { isIsogram } from './Isograms';

describe('Isograms, 7kyu, https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript', () => {
  it('should return true if empty string is in argument', () => {
    const result = isIsogram('');
    expect(result).to.be.true;
  })
  it('should return true if word has no repeating letters', () => {
    const result = isIsogram('isogram');
    expect(result).to.be.true;
  })
  it('should return false if word has repeating consecutive letters', () => {
    const result = isIsogram('moOse');
    expect(result).to.be.false;
  })
  it('should return false if word has repeating non-consecutive letters', () => {
    const result = isIsogram('isIsogram');
    expect(result).to.be.false;
  })
})