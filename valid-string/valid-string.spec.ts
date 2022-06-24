import { expect } from 'chai';
import { validWord } from './valid-string';

describe('Valid string, 6kyu, https://www.codewars.com/kata/valid-string', () => {
  it('simple case 1', () => {
    const result = validWord(['a', 'b'], 'ab');
    expect(result).to.be.eq(true);
  });
  it('simple case 2', () => {
    const result = validWord(['b', 'a'], 'ab');
    expect(result).to.be.eq(true);
  });
  it('simple case 3', () => {
    const result = validWord(['Star', 'Code', 'Wars'], 'CodeStarsWar');
    expect(result).to.be.eq(false);
  });
  it('simple case 4', () => {
    const result = validWord(['code', 'star', 'wars'], 'starwars');
    expect(result).to.be.eq(true);
  });
  it('complex case 1', () => {
    const result = validWord(['ab', 'a', 'bc'], 'abc');
    expect(result).to.be.eq(true);
  });
}) 