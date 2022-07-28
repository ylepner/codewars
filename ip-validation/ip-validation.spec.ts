import { expect } from 'chai';
import { isValidIP } from './ip-validation';

describe('IP Validation, 6kyu, https://www.codewars.com/kata/515decfd9dcfc23bb6000006', () => {
  it('should return false if empty string is argument', () => {
    const result = isValidIP('');
    expect(result).to.be.false;
  })
  it('should return false if string includes letters', () => {
    const result = isValidIP('abc.def.ghi.jkl');
    expect(result).to.be.false;
  })
  it('should return false if string includes other symbols', () => {
    const result = isValidIP('1.2.3.4\n');
    expect(result).to.be.false;
  })
  it('leading zeros are considered invalid', () => {
    const result = isValidIP('01.02.03.04');
    expect(result).to.be.false;
  })
  it('should return false if string not consist of four octets', () => {
    const result = isValidIP('1.2.3.4.5');
    expect(result).to.be.false;
  })
  it('case 1', () => {
    const result = isValidIP('0.0.0.0');
    expect(result).to.be.true;
  })
  it('case 2', () => {
    const result = isValidIP('12.255.56.1');
    expect(result).to.be.true;
  })
  it('case 3', () => {
    const result = isValidIP('137.255.156.100');
    expect(result).to.be.true;
  })
  it('case 4', () => {
    const result = isValidIP('12.255.56.1');
    expect(result).to.be.true;
  })
  it('case 5', () => {
    const result = isValidIP('1e0.1e1.1e2.2e2');
    expect(result).to.be.false;
  })
  it('case 6', () => {
    const result = isValidIP('1.2.3.4');
    expect(result).to.be.true;
  })
  it('case 7', () => {
    const result = isValidIP('0.2.3.4');
    expect(result).to.be.true;
  })
})