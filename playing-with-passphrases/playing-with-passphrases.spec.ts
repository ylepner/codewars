import { expect } from 'chai';
import { playPass } from './playing-with-passphrases';

describe('Playing with passphrases, 6kyu, https://www.codewars.com/kata/559536379512a64472000053', () => {
  it('simple case', () => {
    const result = playPass("LOVE", 1)
    expect(result).to.be.eq('fWpM');
  });
  it('should keep such as non alphabetic and non digit characters', () => {
    const result = playPass("I LOVE YOU!!!", 1)
    expect(result).to.be.eq("!!!vPz fWpM J");
  });
  it('complex case', () => {
    const result = playPass("MY GRANMA CAME FROM NY ON THE 23RD OF APRIL 2015", 2)
    expect(result).to.be.eq("4897 NkTrC Hq fT67 GjV Pq aP OqTh gOcE CoPcTi aO");
  });
})