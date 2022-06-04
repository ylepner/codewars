import { expect } from 'chai';
import { nthFibo } from './n-th-fibonacci';

describe('N-th Fibonacci, 6kyu, https://www.codewars.com/kata/n-th-fibonacci', () => {
  it('should return 0 if  if the number is 1', () => {
    const result = nthFibo(1);
    expect(result).to.be.eq(0);
  });
  it('should return 2 if  if the number is 4', () => {
    const result = nthFibo(4);
    expect(result).to.be.eq(2);
  });
  it('should return 144 if  if the number is 13', () => {
    const result = nthFibo(13);
    expect(result).to.be.eq(144);
  });
})