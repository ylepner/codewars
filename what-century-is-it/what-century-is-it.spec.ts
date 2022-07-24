import { expect } from 'chai';
import { whatCentury } from './what-century-is-it';

describe('What century is it?, 6kyu, https://www.codewars.com/kata/what-century-is-it', () => {
  it('case 1', () => {
    const result = whatCentury('1999');
    expect(result).to.be.eq('20th');
  });
  it('case 2', () => {
    const result = whatCentury('2011');
    expect(result).to.be.eq('21st');
  });
  it('case 3', () => {
    const result = whatCentury('2154');
    expect(result).to.be.eq('22nd');
  });
  it('case 4', () => {
    const result = whatCentury('2259');
    expect(result).to.be.eq('23rd');
  });
  it('case 5', () => {
    const result = whatCentury("1124");
    expect(result).to.be.eq('12th');
  });
  it('case 6', () => {
    const result = whatCentury('2000');
    expect(result).to.be.eq('20th');
  });
  it('case 7', () => {
    const result = whatCentury('1234');
    expect(result).to.be.eq('13th');
  });
  it('case 8', () => {
    const result = whatCentury('1023');
    expect(result).to.be.eq('11th');
  });
})