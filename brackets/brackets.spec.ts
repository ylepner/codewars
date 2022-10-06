import { expect } from 'chai';
import { check } from './brackets';

const config1 = [['(', ')']];
const config2 = [['(', ')'], ['[', ']']];
const config3 = [['(', ')'], ['[', ']'], ['{', '}']];
const config4 = [['|', '|']];
const config5 = [['(', ')'], ['|', '|']];
const config6 = [['1', '2'], ['3', '4'], ['5', '6'], ['7', '7'], ['8', '8']];
const config7 = [['(', ')'], ['[', ']'], ['{', '}'], ['|', '|']];

describe('Brackets, https://github.com/ylepner/brackets', () => {
  it('should check if brackets sequence is correct 1', () => {
    const result = check('()', config1);
    expect(result).to.deep.eq(true);
  });

  it('should check if brackets sequence is correct 2', () => {
    const result = check('((()))()', config1);
    expect(result).to.deep.eq(true);
  });

  it('should check if brackets sequence is not correct 3', () => {
    const result = check('())(', config1)
    expect(result).to.deep.eq(false);
  });

  it('should check if brackets sequence is correct 4', () => {
    const result = check('([{}])', config3)
    expect(result).to.deep.eq(true);
  });

  it('should check if brackets sequence is not correct 5', () => {
    const result = check('[(])', config2)
    expect(result).to.deep.eq(false);
  });

  it('should check if brackets sequence is correct 6', () => {
    const result = check('[]()', config2)
    expect(result).to.deep.eq(true);
  });

  it('should check if brackets sequence is correct 7', () => {
    const result = check('[]()(', config2)
    expect(result).to.deep.eq(false);
  });

  it('should check if brackets sequence is correct 8', () => {
    const result = check('||', config4)
    expect(result).to.deep.eq(true);
  });

  it('should check if brackets sequence is correct 9', () => {
    const result = check('|()|', config5)
    expect(result).to.deep.eq(true);
  });

  it('should check if brackets sequence is not correct 10', () => {
    const result = check('|(|)', config5)
    expect(result).to.deep.eq(false);
  });

  it('should check if brackets sequence is correct 11', () => {
    const result = check('|()|(||)||', config5)
    expect(result).to.deep.eq(true);
  });

  it('should check if brackets sequence is correct 12', () => {
    const result = check('111115611111111222288888822225577877778775555666677777777776622222', config6)
    expect(result).to.deep.eq(true);
  });

  it('should check if brackets sequence is correct 13', () => {
    const result = check('5555512575557777777555566667888888667661133833448441111222233333444442266666', config6)
    expect(result).to.deep.eq(false);
  });

  it('should check if brackets sequence is correct 14', () => {
    const result = check('8888877878887777777888888887777777887887788788887887777777788888888887788888', config6)
    expect(result).to.deep.eq(false);
  });

  it('should check if brackets sequence is correct 15', () => {
    const result = check('111115611111111156111111112222888888222255778777787755556666777777777766222221111222288888822225577877778775555666677777777776622222', config6)
    expect(result).to.deep.eq(true);
  });

  it('should check if brackets sequence is not correct 16', () => {
    const result = check('[]][[]', config3)
    expect(result).to.deep.eq(false);
  });

  it('should check if brackets sequence is not correct 17', () => {
    const result = check('[]][[]', config2)
    expect(result).to.deep.eq(false);
  });

  it('should check if brackets sequence is not correct 18', () => {
    const result = check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]]))()', config7)
    expect(result).to.deep.eq(false);
  });

  it('should check if brackets sequence is correct 19', () => {
    const result = check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])(())', config7)
    expect(result).to.deep.eq(true);
  });

  it('should check if brackets sequence is correct 20', () => {
    const result = check('([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])((([[[[(({{{}}}(([](((((((())))||||||))))[[{{|{{}}|}}[[[[]]]]{{{{{}}}}}]]))))]]]])))', config7)
    expect(result).to.deep.eq(true);
  });

})