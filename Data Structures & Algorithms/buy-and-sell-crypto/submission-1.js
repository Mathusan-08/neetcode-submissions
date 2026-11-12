class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
      let profit = 0;
      for(let i =0; i < prices.length; i++){
        for(let j =i; j <prices.length; j++){
            if(prices[j] - prices[i] > profit){
                profit = prices[j] - prices[i];
            }
        }
      } 
      return profit; 
    }
}
