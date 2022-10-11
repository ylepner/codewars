import { expect } from 'chai';
import { findAllHobbyists } from './find-all-hobbyists';


describe('Find All Hobbyists', () => {
  it(`case 1`, () => {
    const result = findAllHobbyists('Yoga', hobbies);
    expect(result).to.deep.eq(['Chad']);
  });
  it(`case 2`, () => {
    const result = findAllHobbyists('Yoga', {});
    expect(result).to.deep.eq([]);
  });
  it(`case 3`, () => {
    const result = findAllHobbyists('Pets', hobbies);
    expect(result).to.deep.eq(['Patty', 'Chad']);
  });
})

const hobbies = {
  "Steve": ['Fashion', 'Piano', 'Reading'],
  "Patty": ['Drama', 'Magic', 'Pets'],
  "Chad": ['Puzzles', 'Pets', 'Yoga']
};