import { expect } from "chai";
import { search } from "./binary-search";


describe('Binary Search, Easy, https://leetcode.com/problems/binary-search/', () => {
  it('case 1', () => {
    const result = search([], 0)
    expect(result).to.be.eq(-1)
  })
  it('case 2', () => {
    const result = search([-1, 0, 3, 5, 9, 12], 9)
    expect(result).to.be.eq(4)
  })
  it('case 3', () => {
    const result = search([-1, 0, 3, 5, 9, 12], 2)
    expect(result).to.be.eq(-1)
  })
})