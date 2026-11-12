class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
         let results = [];
         let frequencies = new Map();
         for(let num of nums){
            frequencies.set(num,(frequencies.get(num) || 0)+1);
         }
         let buckets = Array.from({length: nums.length + 1 },() => []);
         for (let [num, count] of frequencies) {
            buckets[count].push(num);
        }
        for (let i = buckets.length - 1; i >= 0; i--) {
            for(let j=0; j < buckets[i].length; j++){
                results.push(buckets[i][j]);
                if(results.length === k){
                    return results;
                }
            }

        }
    }
   

}
