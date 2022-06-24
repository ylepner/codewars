import { expect } from 'chai';
import { WordDictionary } from './urban-dictionary';

describe('Urban Dictionary, 6kyu, https://www.codewars.com/kata/urban-dictionary', () => {
  it('case 1', () => {
    const wd = new WordDictionary();
    wd.addWord('a');
    wd.addWord('at');
    wd.addWord('ate');
    wd.addWord('ear');
    expect(wd.search('a')).to.be.eq(true);
    expect(wd.search('a.')).to.be.eq(true);
    expect(wd.search('a.e')).to.be.eq(true);
    expect(wd.search('b')).to.be.eq(false);
    expect(wd.search('e.')).to.be.eq(false);
    expect(wd.search('ea.')).to.be.eq(true);
    expect(wd.search('ea..')).to.be.eq(false);
  });
})