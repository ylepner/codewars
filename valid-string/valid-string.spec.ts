import { expect } from 'chai';
import { validWord } from './valid-string';

describe('Valid string, 6kyu, https://www.codewars.com/kata/valid-string', () => {
  it('case 1', () => {
    const result = validWord(['a', 'b'], 'ab');
    expect(result).to.be.eq(true);
  });
  it('case 2', () => {
    const result = validWord(['b', 'a'], 'ab');
    expect(result).to.be.eq(true);
  });
  it('case 3', () => {
    const result = validWord(['Star', 'Code', 'Wars'], 'CodeStarsWar');
    expect(result).to.be.eq(false);
  });
  it('case 4', () => {
    const result = validWord(['code', 'star', 'wars'], 'starwars');
    expect(result).to.be.eq(true);
  });
  it('case 5', () => {
    const result = validWord(['ab', 'a', 'bc'], 'abc');
    expect(result).to.be.eq(true);
  });
}) 