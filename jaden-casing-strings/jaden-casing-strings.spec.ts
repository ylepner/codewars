import { expect } from 'chai';
import './jaden-casing-strings'

describe('Jaden Casing Strings, 7kyu, https://www.codewars.com/kata/jaden-casing-strings', () => {
  it('simple case', () => {
    const str = 'hi'
    const result = str.toJadenCase()
    expect(result).to.be.eq('Hi');
  });
  it('complex case', () => {
    const str = `How can mirrors be real if our eyes aren't real`
    const result = str.toJadenCase()
    expect(result).to.be.eq(`How Can Mirrors Be Real If Our Eyes Aren't Real`);
  });
})