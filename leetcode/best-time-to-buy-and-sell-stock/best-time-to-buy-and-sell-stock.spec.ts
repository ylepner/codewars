import { expect } from "chai";
import { maxProfit } from "./best-time-to-buy-and-sell-stock";

describe('Best Time to Buy and Sell Stock, Easy, https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', () => {
  it('case 1', () => {
    const result = maxProfit([7, 1, 5, 3, 6, 4])
    expect(result).to.be.eq(5)
  })
  it('case 2', () => {
    const result = maxProfit([7, 6, 4, 3, 1])
    expect(result).to.be.eq(0)
  })
})