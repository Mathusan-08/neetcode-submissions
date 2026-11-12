class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let maxProfit =0;
      let minPrice=prices[0];
      for(let i=0; i <prices.length;i++){
            let currentProfit = prices[i] - minPrice;
            maxProfit = Math.max(maxProfit, currentProfit);
            minPrice = Math.min(minPrice, prices[i]);

      } 
      return maxProfit; 
    }
}
