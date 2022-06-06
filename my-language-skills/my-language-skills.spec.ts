import { expect } from 'chai';
import { myLanguages } from './my-language-skills';

describe('My Language Skills, 7kyu, https://www.codewars.com/kata/my-language-skills', () => {
  it('should return the list of languages where test score is at least 60, in descending order of the results', () => {
    const result = myLanguages({ "Java": 10, "Ruby": 80, "Python": 65 });
    expect(result).to.deep.eq(["Ruby", "Python"]);
  });
  it('complex task', () => {
    const result = myLanguages({ "Hindi": 60, "Dutch": 93, "Greek": 71, "Java": 10, "Ruby": 80, "Python": 65 });
    expect(result).to.deep.eq(["Dutch", "Ruby", "Greek", "Python", "Hindi"]);
  });
})