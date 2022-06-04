import { expect } from 'chai';
import { explode } from './digits-explosion';

describe('Digits explosion, 7kyu, https://www.codewars.com/kata/digits-explosion', () => {
  it('should return empty string 0 if string made of digit 0', () => {
    const result = explode('0');
    expect(result).to.be.eq('');
  });
  it(`should return '333122' if string is '312'`, () => {
    const result = explode('312');
    expect(result).to.be.eq('333122');
  });
  it(`should return '12222666666999999999' if string is 102269'`, () => {
    const result = explode('102269');
    expect(result).to.be.eq('12222666666999999999');
  });
})