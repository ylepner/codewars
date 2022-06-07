import { expect } from 'chai';
import { createSecretHolder } from './can-you-keep-a-secret';

describe('Can you keep a secret?, 6kyu, https://www.codewars.com/kata/can-you-keep-a-secret', () => {
  it('should accept any value as secret and return an object with two methods: getSecret and setSecret', () => {
    const result = createSecretHolder('value');
    expect(result.getSecret()).to.be.eq('value');
    result.setSecret('new')
    expect(result.getSecret()).to.be.eq('new');
  })
})