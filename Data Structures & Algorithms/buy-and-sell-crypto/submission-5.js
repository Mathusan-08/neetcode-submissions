class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let profit =0;
      for(let i=0; i <prices.length;i++){
        let right = i+1;
        while(right<prices.length){
           let currentprofit=prices[right]-prices[i];
           profit = Math.max(profit,currentprofit)
           right++
        }

      }
      return profit; 
    }
}
