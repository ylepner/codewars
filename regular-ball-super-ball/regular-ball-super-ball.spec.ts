import { expect } from 'chai';
import { Ball } from './regular-ball-super-ball';

describe('Regular Ball Super Ball, 8kyu, https://www.codewars.com/kata/regular-ball-super-ball', () => {
  it('case 1', () => {
    expect(new Ball().ballType).to.be.eq('regular');
  });
  it('case 2', () => {
    expect(new Ball('super').ballType).to.be.eq('super');
  });
})