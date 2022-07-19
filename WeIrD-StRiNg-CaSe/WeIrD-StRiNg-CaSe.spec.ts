import { expect } from 'chai';
import { toWeirdCase } from './WeIrD-StRiNg-CaSe';

describe('WeIrD StRiNg CaSe, 6kyu, https://www.codewars.com/kata/52b757663a95b11b3d00062d', () => {
  it('simple case', () => {
    const result = toWeirdCase('is');
    expect(result).to.be.eq('Is');
  });
  it('complex case', () => {
    const result = toWeirdCase('Weird string case');
    expect(result).to.be.eq('WeIrD StRiNg CaSe');
  });
})