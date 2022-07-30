import { expect } from 'chai';
import { mirror } from './mirror-object';

describe('Mirror object, 6kyu, https://www.codewars.com/kata/586305e8916e244b66001a93', () => {
  it('case 1', () => {
    const obj = {
      abc: undefined,
      arara: undefined
    }
    const result = mirror(obj);
    expect(result).to.be.deep.eq({
      abc: 'cba',
      arara: 'arara',
    });
  });
})