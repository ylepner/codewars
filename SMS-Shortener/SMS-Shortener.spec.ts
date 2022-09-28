import { expect } from 'chai';
import { shortener } from './SMS-Shortener';

describe('SMS-Shortener, 6kyu, https://www.codewars.com/kata/535a69fb36973f2aad000953', () => {
  it('case 1', () => {
    const result = shortener('No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear, surprise, and ruthless efficiency! And that will be it.');
    expect(result).to.be.eq('No one expects the Spanish Inquisition! Our chief weapon is surprise, fear and surprise; two chief weapons, fear,Surprise,AndRuthlessEfficiency!AndThatWillBeIt.');
  });
  it('case 2', () => {
    const result = shortener('This message is already short enough!');
    expect(result).to.be.eq('This message is already short enough!');
  });
  it('case 3', () => {
    const result = shortener('ThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoon');
    expect(result).to.be.eq('ThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoonThereIsNoSpoon');
  });
  it('case 4', () => {
    const result = shortener('SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long. SMS messages are limited to 160 characters. It tends to be irritating, especially when freshly written message is 164 characters long.');
    expect(result).to.be.eq('SMSMessagesAreLimitedTo160Characters.ItTendsToBeIrritating,EspeciallyWhenFreshlyWrittenMessageIs164CharactersLong.SMSMessagesAreLimitedTo160Characters.ItTendsToBeIrritating,EspeciallyWhenFreshlyWrittenMessageIs164CharactersLong.');
  });
  it('case 5', () => {
    const result = shortener('ddBRtqaw,o ztSBaIUOg!zgFp ijilZTjQ efh,?uZ IzCQSDfun VbTdXPev?vSZ.e LKN!OGIHuYpkJ .XU.zei JNZ.VER?FzsizK xZf AGy h.zyF Q,uDQA VAOM,gJ,O gT,?AoaMQcd Ghe.Kxm!g!Lpz ccYSXe sPdbxuIq? k,woHhMCT.U DOVEvBhaWn drCRQRD cOAWNvK. !KH.,h Yj!!n,R?Ufoi!h ?XeZyQ!gRRs .lhvusUD,BLill imLEiwWFKuOq T?IfUp F!jqSYSVJbePw aEu.YRhBZ.a ByTUmv .tf.UxLkiUt B?qIJC!z!QzF sQP evWsgTiyPqGT kDFzYlULKfzlm, iMPvP MLRoFm.cPLbwWE AGU!! QWrWWGfB!,uq eKyJrNWxEJSIsD Cc?udieTS');
    expect(result).to.be.eq('ddBRtqaw,oZtSBaIUOg!zgFpIjilZTjQEfh,?uZIzCQSDfunVbTdXPev?vSZ.eLKN!OGIHuYpkJ.XU.zeiJNZ.VER?FzsizKXZfAGyH.zyFQ,uDQAVAOM,gJ,OGT,?AoaMQcdGhe.Kxm!g!LpzCcYSXeSPdbxuIq?K,woHhMCT.UDOVEvBhaWnDrCRQRDCOAWNvK.!KH.,hYj!!n,R?Ufoi!h?XeZyQ!gRRs.lhvusUD,BLillImLEiwWFKuOqT?IfUpF!jqSYSVJbePwAEu.YRhBZ.aByTUmv.tf.UxLkiUtB?qIJC!z!QzFSQPEvWsgTiyPqGTKDFzYlULKfzlm,IMPvPMLRoFm.cPLbwWEAGU!!QWrWWGfB!,uqEKyJrNWxEJSIsDCc?udieTS');
  });
})