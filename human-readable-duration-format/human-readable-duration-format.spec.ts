import { expect } from 'chai';
import { formatDuration } from './human-readable-duration-format';

describe('Human readable duration format, 4kyu, https://www.codewars.com/kata/human-readable-duration-format', () => {
  it(`should return 'now' if the amount of seconds is 0`, () => {
    const result = formatDuration(0);
    expect(result).to.be.eq('now');
  });
  it(`should return '1 second' if the amount of seconds is 1`, () => {
    const result = formatDuration(1);
    expect(result).to.be.eq('1 second');
  });
  it(`should return '1 minute' if the amount of seconds is 60`, () => {
    const result = formatDuration(60);
    expect(result).to.be.eq('1 minute');
  });
  it(`should return '1 hour' if the amount of seconds is 3600`, () => {
    const result = formatDuration(3600);
    expect(result).to.be.eq('1 hour');
  });
  it(`should return '1 year' if the amount of seconds is 31536000`, () => {
    const result = formatDuration(31536000);
    expect(result).to.be.eq('1 year');
  });
  it(`should return '2 minutes' if the amount of seconds is 120`, () => {
    const result = formatDuration(120);
    expect(result).to.be.eq('2 minutes');
  });
  it(`shoud return '1 hour, 1 minute and 2 seconds' if the amount of seconds is 3662`, () => {
    const result = formatDuration(3662);
    expect(result).to.be.eq('1 hour, 1 minute and 2 seconds');
  });
  it(`complex case 1`, () => {
    const result = formatDuration(15731080);
    expect(result).to.be.eq('182 days, 1 hour, 44 minutes and 40 seconds');
  });
  it(`complex case 2`, () => {
    const result = formatDuration(132030240);
    expect(result).to.be.eq('4 years, 68 days, 3 hours and 4 minutes');
  });
  it(`complex case 3`, () => {
    const result = formatDuration(400000000);
    expect(result).to.be.eq('12 years, 249 days, 15 hours, 6 minutes and 40 seconds');
  });
  it(`complex case 4`, () => {
    const result = formatDuration(253374061);
    expect(result).to.be.eq('8 years, 12 days, 13 hours, 41 minutes and 1 second');
  });
})