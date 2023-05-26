import { expect } from "chai";
import { solution } from "../../mean-square-error/mean-square-error";


describe('First Bad Version, Easy, https://leetcode.com/problems/first-bad-version/', () => {
  it('case 1', () => {
    const isBadVersion1 = 4;
    const expected1 = 4;
    const firstBad1 = solution(isBadVersion1)(10);
    expect(firstBad1).to.equal(expected1);
  })
})

class MockRelation {
  private badVersion: number;

  constructor(badVersion: number) {
    this.badVersion = badVersion;
  }

  isBadVersion(version: number): boolean {
    return version >= this.badVersion;
  }
}


export class Relation {
  isBadVersion(version: number): boolean {
    return false;
  }
}