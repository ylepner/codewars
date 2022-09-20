import { expect } from 'chai';
import { anagrams } from './where-my-anagrams-at';

describe('Where my anagrams at?, 5kyu, https://www.codewars.com/kata/523a86aa4230ebb5420001e1', () => {
  it('case 1', () => {
    const result = anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada'])
    expect(result).to.deep.eq(['aabb', 'bbaa']);
  });
  it('case 2', () => {
    const result = anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer'])
    expect(result).to.deep.eq(['carer', 'racer']);
  });
  it('case 3', () => {
    const result = anagrams('laser', ['lazing', 'lazy', 'lacer'])
    expect(result).to.deep.eq([]);
  });
  it('case 4', () => {
    const result = anagrams('abba', ['aabb', 'abab', 'abbaa', 'abbab', 'abbba', 'abcd', 'baaab', 'baab', 'baba', 'babaa', 'bbaa'])
    expect(result).to.deep.eq(['aabb', 'bbaa']);
  });
})