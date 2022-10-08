import { expect } from 'chai';
import { reverse } from './reverse-int';

describe('Reverse int, https://github.com/ylepner/reverse-int', () => {
  it('Should return 261 when 162 given', () => {
    const reversed = reverse(162);
    expect(reversed).to.be.eq(261);
  });
  it('Should return 291 when -192 given', () => {
    const reversed = reverse(-192);
    expect(reversed).to.be.eq(291);
  });
  it('Should return 252 when -252 given', () => {
    const reversed = reverse(-252);
    expect(reversed).to.be.eq(252);
  });
  it('Should return 71 when 170 given', () => {
    const reversed = reverse(170);
    expect(reversed).to.be.eq(71);
  });
  it('Should return 605 when 506 given', () => {
    const reversed = reverse(506);
    expect(reversed).to.be.eq(605);
  });
  it('Should return 835 when -538 given', () => {
    const reversed = reverse(-538);
    expect(reversed).to.be.eq(835);
  });
  it('Should return 465 when 564 given', () => {
    const reversed = reverse(564);
    expect(reversed).to.be.eq(465);
  });
  it('Should return 891 when -198 given', () => {
    const reversed = reverse(-198);
    expect(reversed).to.be.eq(891);
  });
  it('Should return 715 when -517 given', () => {
    const reversed = reverse(-517);
    expect(reversed).to.be.eq(715);
  });
  it('Should return 601 when -106 given', () => {
    const reversed = reverse(-106);
    expect(reversed).to.be.eq(601);
  });
  it('Should return 462 when -264 given', () => {
    const reversed = reverse(-264);
    expect(reversed).to.be.eq(462);
  });
  it('Should return 332 when 233 given', () => {
    const reversed = reverse(233);
    expect(reversed).to.be.eq(332);
  });
  it('Should return 763 when -367 given', () => {
    const reversed = reverse(-367);
    expect(reversed).to.be.eq(763);
  });
  it('Should return 25 when 520 given', () => {
    const reversed = reverse(520);
    expect(reversed).to.be.eq(25);
  });
  it('Should return 822 when 228 given', () => {
    const reversed = reverse(228);
    expect(reversed).to.be.eq(822);
  });
  it('Should return 231 when -132 given', () => {
    const reversed = reverse(-132);
    expect(reversed).to.be.eq(231);
  });
  it('Should return 152 when -251 given', () => {
    const reversed = reverse(-251);
    expect(reversed).to.be.eq(152);
  });
  it('Should return 561 when 165 given', () => {
    const reversed = reverse(165);
    expect(reversed).to.be.eq(561);
  });
  it('Should return 524 when -425 given', () => {
    const reversed = reverse(-425);
    expect(reversed).to.be.eq(524);
  });
  it('Should return 535 when 535 given', () => {
    const reversed = reverse(535);
    expect(reversed).to.be.eq(535);
  });
})