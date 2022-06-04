import { expect } from 'chai';
import { duplicateEncode } from './duplicate-encoder';

describe('Duplicate Encoder, 6kyu, https://www.codewars.com/kata/duplicate-encoder', () => {
  it(`should return '(' if only 1 letter in string`, () => {
    const result = duplicateEncode('a');
    expect(result).to.be.eq('(');
  });
  it(`should return '(((' if string is 'din'`, () => {
    const result = duplicateEncode('din');
    expect(result).to.be.eq('(((');
  });
  it(`should return '()()()' if string is 'recede'`, () => {
    const result = duplicateEncode('recede');
    expect(result).to.be.eq('()()()');
  });
  it(`should ignore capitalization when determining if a character is a duplicate`, () => {
    const result = duplicateEncode('Success');
    expect(result).to.be.eq(')())())');
  });
})