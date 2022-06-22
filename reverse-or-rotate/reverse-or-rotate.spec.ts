import { expect } from 'chai';
import { revrot } from './reverse-or-rotate';

describe('Reverse or rotate, 6kyu, https://www.codewars.com/kata/reverse-or-rotate', () => {
  it('should return empty string if chunk is 0', () => {
    const result = revrot('1234', 0);
    expect(result).to.be.eq('');
  });
  it('should return empty string if size of chunk <= 0', () => {
    const result = revrot('1234', 0);
    expect(result).to.be.eq('');
  });
  it('should return empty string if size of chunk > than the length of str', () => {
    const result = revrot('1234', 5);
    expect(result).to.be.eq('');
  });
  it('simple case', () => {
    const result = revrot("66443875", 4);
    expect(result).to.be.eq('44668753');
  });
  it('complex case', () => {
    const result = revrot("3936308501275813809913201133418446561538366577135367076633099217161734764909400355095672348988030465663273062473539928700782", 23);
    expect(result).to.be.eq('2319908318572105803639311334184465615383665770371617129903366707635317649094003550956723489493537426037236656403088');
  });
})