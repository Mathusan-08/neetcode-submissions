class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let results = [];
        results.length = nums.length;
        let current =1;
        for(let i=0; i < nums.length; i++){
            if(i === 0){
                results[i] =1;
            }
            else{
                results[i] = results[i - 1] * nums[i - 1];
            }
        }
        for(let i=0; i < nums.length;i++){
            if(i ===0){
                results[nums.length-1] *= current; 
            }
            else{
                current *= nums[nums.length - i];
                results[nums.length-1-i] *= current; 
            }
        }  
        return results;
    }
}
