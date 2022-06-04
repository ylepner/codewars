import { expect } from 'chai';
import { getParticipants } from './handshake-problem';

describe('Handshake problem, 6kyu, https://www.codewars.com/kata/handshake-problem', () => {
  it('should return 0 if the number of handshakes is 0', () => {
    const result = getParticipants(0);
    expect(result).to.be.eq(0);
  });
  it('should return 2 if the number of handshakes is 1', () => {
    const result = getParticipants(1);
    expect(result).to.be.eq(2);
  });
  it('should return 5 if the number of handshakes is 7', () => {
    const result = getParticipants(7);
    expect(result).to.be.eq(5);
  });
})