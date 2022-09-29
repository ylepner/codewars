import { expect } from 'chai';
import { shorten } from './string-shortener-(shrink)';

describe('String Shortener (shrink), 6kyu, https://www.codewars.com/kata/557d18803802e873170000a0', () => {
  it('case 1', () => {
    const result = shorten(sentence, 27);
    expect(result).to.be.eq('The quick br...the lazy dog');
  });
  it('case 2', () => {
    const result = shorten(sentence, 27, '---');
    expect(result).to.be.eq('The quick br---the lazy dog');
  });
  it('case 3', () => {
    const result = shorten(sentence, 27, '----');
    expect(result).to.be.eq('The quick b----the lazy dog');
  });
  it('case 4', () => {
    const result = shorten(sentence, 21);
    expect(result).to.be.eq('The quick... lazy dog');
  });
  it('case 5', () => {
    const result = shorten(sentence2, 20);
    expect(result).to.be.eq('hello world');
  });
  it('case 6', () => {
    const result = shorten(sentence2, 5, '----');
    expect(result).to.be.eq('hello');
  });
})

const sentence = "The quick brown fox jumps over the lazy dog"
const sentence2 = 'hello world'