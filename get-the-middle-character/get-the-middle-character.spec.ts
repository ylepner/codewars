import { expect } from 'chai';
import { getMiddle } from './get-the-middle-character';

describe('Get the Middle Character, 7kyu, https://www.codewars.com/kata/get-the-middle-character', () => {
  it(`simple case`, () => {
    const result = getMiddle('a');
    expect(result).to.be.eq('a');
  });
  it(`should return the middle character if the word's length is odd`, () => {
    const result = getMiddle('middle');
    expect(result).to.be.eq('dd');
  });
  it(`should return the middle 2 characters if the word's length is even`, () => {
    const result = getMiddle('testing');
    expect(result).to.be.eq('t');
  });
})
