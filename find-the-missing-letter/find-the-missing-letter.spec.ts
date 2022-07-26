import { expect } from 'chai';
import { findMissingLetter } from './find-the-missing-letter';


describe('Find the missing letter, 6kyu, https://www.codewars.com/kata/5839edaa6754d6fec10000a2', () => {
  it(`case 1`, () => {
    const result = findMissingLetter(["a", "b", "c", "d", "f"]);
    expect(result).to.be.eq("e");
  });
  it(`case 2`, () => {
    const result = findMissingLetter(["O", "Q", "R", "S"]);
    expect(result).to.be.eq("P");
  });
})