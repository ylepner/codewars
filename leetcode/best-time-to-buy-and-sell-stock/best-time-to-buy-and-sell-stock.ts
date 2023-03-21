// export function maxProfit(prices: number[]): number {
//   const min = Math.min(...prices)
//   const arr = prices.slice(prices.indexOf(min))
//   const max = Math.max(...arr)
//   const profit = max - min
//   if (profit > 0) {
//     return profit
//   }
//   return profit
// };

export function maxProfit(prices: number[]): number {
  let min = +Infinity
  let maxProfit = 0
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < min) {
      min = prices[i]
    } else if (prices[i] - min > maxProfit) {
      maxProfit = prices[i] - min
    }
  }
  return maxProfit
};