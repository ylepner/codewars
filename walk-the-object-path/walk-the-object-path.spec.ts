import { expect } from 'chai';
import { find } from './walk-the-object-path';

describe('Walk the Object Path, 6kyu, https://www.codewars.com/kata/walk-the-object-path', () => {
  it('Case 1', () => {
    const result = find(object, 'user.name.first');
    expect(result).to.be.eq('John');
  });
  it('Should handle passing array indices', () => {
    const result = find(object2, 'people.1');
    expect(result).to.be.eq('Dave');
  });
  it('Should handle invalid paths and return undefined in this case', () => {
    const result = find(object, 'user.wallet.name.first');
    expect(result).to.be.eq(undefined);
  });
})

let object = {
  user: {
    name: {
      first: 'John',
      last: 'Snow'
    }
  }
};

let object2 = {
  people: ['John', 'Dave', 'Lisa']
}