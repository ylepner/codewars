import { expect } from 'chai';
import { disemvowel } from './disemvowel-trolls';

describe('Disemvowel Trolls, 7kyu, https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript', () => {
  it('should return a new string with vowel removed', () => {
    const result = disemvowel('LOL');
    expect(result).to.be.eq('LL');
  })
  it('should return a new string with all vowels removed', () => {
    const result = disemvowel('LOL ROFL');
    expect(result).to.be.eq('LL RFL');
  })
  it('should return a new string with all capital and small vowels removed', () => {
    const result = disemvowel('laUgh Out loud');
    expect(result).to.be.eq('lgh t ld');
  })
  it(`should return a new string with all capital and small vowels removed ( 'y' isn't considered a vowel)`, () => {
    const result = disemvowel('What are you, a communist?');
    expect(result).to.be.eq('Wht r y,  cmmnst?');
  })
  it(`should return a new string with all vowels removed with saving special symbols`, () => {
    const result = disemvowel(`No offense but,\nYour writing is among the worst I've ever read`);
    expect(result).to.be.eq(`N ffns bt,\nYr wrtng s mng th wrst 'v vr rd`);
  })
})