import { expect } from 'chai';
import { nthFiboRec, nthFiboLoop } from './n-th-fibonacci';

describe('N-th Fibonacci, 6kyu, https://www.codewars.com/kata/n-th-fibonacci', () => {
  it('nthFiboRec() should return 0 if the number is 1', () => {
    const result = nthFiboRec(1);
    expect(result).to.be.eq(0);
  });
  it('nthFiboRec() should return 2 if the number is 4', () => {
    const result = nthFiboRec(4);
    expect(result).to.be.eq(2);
  });
  it('nthFiboRec() should return 144 if the number is 13', () => {
    const result = nthFiboRec(13);
    expect(result).to.be.eq(144);
  });
  it('should return 0 if the number is 1', () => {
    const result = nthFiboLoop(1);
    expect(result).to.be.eq(0);
  });
  it('should return 2 if the number is 4', () => {
    const result = nthFiboLoop(4);
    expect(result).to.be.eq(2);
  });
  it('should return 144 if the number is 13', () => {
    const result = nthFiboLoop(13);
    expect(result).to.be.eq(144);
  });
})