import { expect } from 'chai';
import { rgb } from './rgb-to-hex-conversion';

describe('RGB To Hex Conversion, 5kyu, https://www.codewars.com/kata/513e08acc600c94f01000001', () => {
  it('case 1', () => {
    const result = rgb(0, 0, 0);
    expect(result).to.be.eq('000000');
  });
  it('case 2', () => {
    const result = rgb(0, 0, -20);
    expect(result).to.be.eq('000000');
  });
  it('case 3', () => {
    const result = rgb(300, 255, 255);
    expect(result).to.be.eq('FFFFFF');
  });
  it('case 4', () => {
    const result = rgb(173, 255, 47);
    expect(result).to.be.eq('ADFF2F');
  });
  it('case 5', () => {
    const result = rgb(262, 4, 194);
    expect(result).to.be.eq('FF04C2');
  });
  it('case 6', () => {
    const result = rgb(256, 56, 10);
    expect(result).to.be.eq('FF380A');
  });
  it('case 7', () => {
    const result = rgb(208, 10, 95);
    expect(result).to.be.eq('D00A5F');
  });
}) 