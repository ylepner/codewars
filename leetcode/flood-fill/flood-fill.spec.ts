import { expect } from "chai";
import { floodFill } from "./flood-fill";


describe('Flood Fill, Easy, https://leetcode.com/problems/flood-fill/', () => {
  it('case 1', () => {
    const result = floodFill([[1, 1, 1], [1, 1, 0], [1, 0, 1]], 1, 1, 2)
    expect(result).to.be.deep.eq([[2, 2, 2], [2, 2, 0], [2, 0, 1]])
  })
  it('case 2', () => {
    const result = floodFill([[0, 0, 0], [0, 0, 0]], 0, 0, 0)
    expect(result).to.be.deep.eq([[0, 0, 0], [0, 0, 0]])
  })
})