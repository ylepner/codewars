import { expect } from 'chai';
import { absentVowel } from './absent-vowel';

describe('Absent vowel, 7kyu, https://www.codewars.com/kata/absent-vowel', () => {
  it(`simple case`, () => {
    const result = absentVowel("aeio");
    expect(result).to.be.eq(4);
  });
  it(`should return'0' if 'a' missed`, () => {
    const result = absentVowel("John Doe hs seven red pples under his bsket");
    expect(result).to.be.eq(0);
  });
  it(`should return'3' if 'o' missed`, () => {
    const result = absentVowel("Bb Smith sent us six neatly arranged range bicycles");
    expect(result).to.be.eq(3);
  });
})