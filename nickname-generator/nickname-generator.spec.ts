import { expect } from 'chai';
import { nicknameGenerator } from './nickname-generator';

describe('Nickname Generator, 7kyu, https://www.codewars.com/kata/nickname-generator', () => {
  it('should return "Error: Name too short" if the string is less than 4 characters', () => {
    const result = nicknameGenerator('Sam');
    expect(result).to.be.eq('Error: Name too short');
  });
  it('should return the first 3 letters if the 3rd letter is a consonant', () => {
    const result = nicknameGenerator('Robert');
    expect(result).to.be.eq('Rob');
  });
  it('should return the first 4 letters if the 3rd letter is a vowel', () => {
    const result = nicknameGenerator('Jeannie');
    expect(result).to.be.eq('Jean');
  });
})