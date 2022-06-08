import { expect } from 'chai';
import { recycle } from './lets-recycle';

describe(`Let's Recycle!, 6kyu, https://www.codewars.com/kata/lets-recycle`, () => {
  it('should return 0 if no pair values in arr', () => {
    const a = [{ type: 'rotten apples', material: 'organic' }]
    const b = [[], [], ['rotten apples'], []]
    const result = recycle(a);
    expect(result).to.deep.eq(b);
  })
  it('complex case', () => {
    let a = [
      { type: 'rotten apples', material: 'organic' },
      { type: 'out of date yogurt', material: 'organic', secondMaterial: 'plastic' },
      { type: 'wine bottle', material: 'glass', secondMaterial: 'paper' },
      { type: 'amazon box', material: 'paper' },
      { type: 'beer bottle', material: 'glass', secondMaterial: 'paper' }
    ];
    let b = [
      ['wine bottle', 'amazon box', 'beer bottle'],
      ['wine bottle', 'beer bottle'],
      ['rotten apples', 'out of date yogurt'],
      ['out of date yogurt']
    ];
    const result = recycle(a);
    expect(result).to.deep.eq(b);
  })

})