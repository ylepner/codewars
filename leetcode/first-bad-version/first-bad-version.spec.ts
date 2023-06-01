import { expect } from "chai";
import { solution } from "./first-bad-version";


describe('First Bad Version, Easy, https://leetcode.com/problems/first-bad-version/', () => {
  it('case 1', () => {
    const result = solution(makeBadVersion(42))(1000);
    expect(result).to.equal(42);
  })
})

function makeBadVersion(badVersionNumber: number) {
  return (n: number) => {
    return n >= badVersionNumber;
  }
}
