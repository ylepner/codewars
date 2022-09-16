import { expect } from 'chai';
import { scramble } from './scramblies';

describe('Scramblies, 5kyu, https://www.codewars.com/kata/55c04b4cc56a697bb0000048', () => {
  it('case 1', () => {
    const result = scramble('rkqodlw', 'world');
    expect(result).to.be.eq(true);
  });
  it('case 2', () => {
    const result = scramble('cedewaraaossoqqyt', 'codewars');
    expect(result).to.be.eq(true);
  });
  it('case 3', () => {
    const result = scramble('katas', 'steak');
    expect(result).to.be.eq(false);
  });
  it('case 4', () => {
    const result = scramble('javx', 'java');
    expect(result).to.be.eq(false);
  });
  it('case 5', () => {
    const result = scramble('scriptingjava', 'javascript');
    expect(result).to.be.eq(true);
  });
  it('case 6', () => {
    const result = scramble('scriptsjava', 'javascripts');
    expect(result).to.be.eq(true);
  });
  it('case 7', () => {
    const result = scramble('javscripts', 'javascript');
    expect(result).to.be.eq(false);
  });
})

