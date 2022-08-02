import { expect } from 'chai';
import { ascendDescend } from './ascend-descend-repeat'

describe('Ascend, Descend, Repeat?, 6kyu, https://www.codewars.com/kata/62ca07aaedc75c88fb95ee2f', () => {
  it('case 1', () => {
    const result = ascendDescend(5, 1, 3);
    expect(result).to.be.eq('12321');
  })
  it('case 2', () => {
    const result = ascendDescend(14, 0, 2);
    expect(result).to.be.eq('01210121012101');
  })
  it('case 3', () => {
    const result = ascendDescend(11, 5, 9);
    expect(result).to.be.eq('56789876567');
  })
  it('case 4', () => {
    const result = ascendDescend(10, 1, 1);
    expect(result).to.be.eq('1111111111');
  })
  it('case 5', () => {
    const result = ascendDescend(9, 10, 12);
    expect(result).to.be.eq('101112111');
  })
})