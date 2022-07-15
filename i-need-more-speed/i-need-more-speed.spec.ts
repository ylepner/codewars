import { expect } from 'chai';
import { reverse } from './i-need-more-speed';

describe('I need more speed!, 6kyu, https://www.codewars.com/kata/i-need-more-speed', () => {
  it('case 1', () => {
    const result = reverse([1, 2, 3, 4, 5]);
    expect(result).to.be.deep.eq([5, 4, 3, 2, 1]);
  })
  it('case 2', () => {
    const result = reverse(['hello', 'world', 'how', 'are', 'you', '?']);
    expect(result).to.be.deep.eq(['?', 'you', 'are', 'how', 'world', 'hello']);
  })
})