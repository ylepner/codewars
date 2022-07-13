import { expect } from 'chai';
import './extract-nested-object-reference'


describe('Extract Nested Object Reference, 6kyu, https://www.codewars.com/kata/extract-nested-object-reference', () => {
  it(`case 1`, () => {
    const result = obj.hash('person.name')
    expect(result).to.be.deep.eq('joe');
  });
  it(`case 2`, () => {
    const result = obj.hash('person.history.bio')
    expect(result).to.be.deep.eq({ funFact: 'I like fishing.' });
  });
  it(`case 3`, () => {
    const result = obj.hash('person.history.homeStreet')
    expect(result).to.be.deep.eq(undefined);
  });
  it(`case 4`, () => {
    const result = obj.hash('person.animal.pet.needNoseAntEater')
    expect(result).to.be.deep.eq(undefined);
  });
})

const obj = {
  person: {
    name: 'joe',
    history: {
      hometown: 'bratislava',
      bio: {
        funFact: 'I like fishing.'
      }
    }
  }
};