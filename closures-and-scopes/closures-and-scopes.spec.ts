import { expect } from 'chai';
import { createFunctions } from './closures-and-scopes';

describe('Closures and Scopes, 6kyu, https://www.codewars.com/kata/closures-and-scopes', () => {
  it('should return an array of functions, which return their index in the array', () => {
    const result = createFunctions(5);
    for (let i = 0; i < 5; i++) {
      expect(result[i]()).to.be.eq(i);
    }
  })
})